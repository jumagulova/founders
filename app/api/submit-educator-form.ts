import { NextRequest, NextResponse } from 'next/server'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdEC0j2zA1IlaWMjQYVobC7JbclGjrfahDn9AtezFeFVtDnXQ/formResponse';
const RECAPTCHA_SECRET_KEY = '6LfUD_wrAAAAAHd6Rx4AhZPei9qeq5U_ztKyu5k0';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, captcha } = body
    if (!email || !captcha) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    // Verify captcha
    const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${encodeURIComponent(captcha)}`
    })
    const verifyResult = await verifyResponse.json()
    if (!verifyResult.success) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 403 })
    }
    // Submit to Google Form
    const formData = new URLSearchParams()
    if (name) formData.append('entry.965620759', name)
    formData.append('entry.751953085', email)
    formData.append('submit', 'Submit')
    const googleRes = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })
    if (googleRes.ok) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: 'Google Form submission failed.' }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
