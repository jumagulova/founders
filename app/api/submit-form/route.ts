import { NextRequest, NextResponse } from 'next/server'

// Rate limiting - simple in-memory store (use Redis in production)
const submissions = new Map<string, { count: number; lastSubmission: number }>()

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now()
  submissions.forEach((value, key) => {
    if (now - value.lastSubmission > 3600000) { // 1 hour
      submissions.delete(key)
    }
  })
}, 3600000)

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  return forwarded?.split(',')[0] || realIP || 'unknown'
}

function isSpamSubmission(name: string, email: string, ip: string): boolean {
  // Check for obvious spam patterns
  const spamPatterns = [
    /^[a-z]{10,}$/i, // Long single words
    /^[bcdfghjklmnpqrstvwxz]{8,}$/i, // Long consonant strings
    /(.)\1{3,}/, // Repeated characters
    /^[0-9]+$/, // Only numbers
    /^[^a-zA-Z\s]+$/, // No letters
  ]
  
  if (spamPatterns.some(pattern => pattern.test(name))) {
    return true
  }
  
  // Check email patterns
  const emailSpamPatterns = [
    /^[a-z]{10,}@/i, // Long random email prefixes
    /@(gmail|yahoo|hotmail)\.com$/i, // Common free email domains (can be adjusted)
  ]
  
  if (emailSpamPatterns.some(pattern => pattern.test(email))) {
    return true
  }
  
  // Rate limiting: max 3 submissions per IP per hour
  const now = Date.now()
  const ipData = submissions.get(ip)
  
  if (ipData) {
    if (now - ipData.lastSubmission < 300000) { // 5 minutes between submissions
      return true
    }
    if (ipData.count >= 3 && now - ipData.lastSubmission < 3600000) { // 3 per hour
      return true
    }
  }
  
  // Update rate limiting
  submissions.set(ip, {
    count: (ipData?.count || 0) + 1,
    lastSubmission: now
  })
  
  return false
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, formType, captcha } = body
    
    if (!name || !email || !formType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    
    if (!captcha) {
      return NextResponse.json({ error: 'Missing reCAPTCHA token' }, { status: 400 })
    }
    // Verify reCAPTCHA with Google
    const RECAPTCHA_SECRET_KEY = '6Lfu_PsrAAAAAIFZippwFCqSfhShu1ZW7_cjpQU-'
    const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${encodeURIComponent(captcha)}`
    })
    const verifyResult = await verifyResponse.json()
    if (!verifyResult.success || typeof verifyResult.score !== 'number' || verifyResult.score < 0.5) {
      console.warn('Blocked submission: Low reCAPTCHA v3 score', { score: verifyResult.score, action: verifyResult.action })
      return NextResponse.json({ error: 'reCAPTCHA verification failed. Are you a bot?' }, { status: 403 })
    }
    if (verifyResult.action && !(verifyResult.action === 'submit_newsletter' || verifyResult.action === 'submit_starter')) {
      console.warn('Blocked submission: Unexpected reCAPTCHA action', { action: verifyResult.action })
      return NextResponse.json({ error: 'Suspicious activity detected.' }, { status: 403 })
    }
    
    const ip = getClientIP(request)
    
    // Check for spam
    if (isSpamSubmission(name, email, ip)) {
      console.log(`Spam submission blocked from IP: ${ip}, name: ${name}, email: ${email}`)
      return NextResponse.json({ error: 'Submission blocked' }, { status: 429 })
    }
    
    // Determine which Google Form to submit to
    let googleFormURL: string
    let entryName: string
    let entryEmail: string
    
    if (formType === 'newsletter') {
      googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSeDWelLxr-6i4cw3XFSFmjzL1GaiQN0ZWe6eXKaw9a3zIlyRw/formResponse'
      entryName = 'entry.1202531028'
      entryEmail = 'entry.1402057886'
    } else if (formType === 'starter') {
      googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSerJmFG7orU5-9T9o9uxuWo_VX5LC43b_Q1gCAifhy56g1q5Q/formResponse'
      entryName = 'entry.1198178546'
      entryEmail = 'entry.1500794759'
    } else {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 })
    }
    
    // Submit to Google Form
    const formData = new URLSearchParams()
    formData.append(entryName, name)
    formData.append(entryEmail, email)
    formData.append('submit', 'Submit')
    
    const response = await fetch(googleFormURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })
    
    if (response.ok) {
      console.log(`Form submitted successfully: ${formType} from ${ip}`)
      return NextResponse.json({ success: true })
    } else {
      console.error(`Google Form submission failed: ${response.status}`)
      return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
    }
    
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
