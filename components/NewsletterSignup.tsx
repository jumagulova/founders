"use client"

import { useState, FormEvent, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = '6LfUD_wrAAAAAC7pxceK44HurQ663eiVS9G-UogW'

export default function NewsletterSignup() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [captchaError, setCaptchaError] = useState<string | null>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
    script.async = true
    script.onload = () => {
      // setGrecaptchaReady(true) // This line is removed
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsNewsletterSubmitting(true)
    setCaptchaError(null)
    if (!captchaToken) {
      setCaptchaError('Please verify you are not a robot.')
      setIsNewsletterSubmitting(false)
      return
    }
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name?.toString() || '',
          email: email?.toString() || '',
          formType: 'newsletter',
          captcha: captchaToken
        })
      })
      if (response.ok) {
        setNewsletterSubmitted(true)
        setIsNewsletterSubmitting(false)
      } else {
        const errorData = await response.json()
        setCaptchaError(errorData.error || 'Submission failed. Please try again.')
        setIsNewsletterSubmitting(false)
      }
    } catch (error) {
      setCaptchaError('Network error. Please try again.')
      setIsNewsletterSubmitting(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-md">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Be the First to Know</h3>
        <p className="text-gray-600">
          Join our newsletter to get updates on new releases, special offers, and exclusive content.
        </p>
      </div>
      
      {!newsletterSubmitted ? (
        <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              name="name"
              placeholder="Your name (optional)" 
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your email address" 
              required
              className="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
            />
            <button 
              type="submit"
              disabled={isNewsletterSubmitting || !captchaToken}
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
            >
              {isNewsletterSubmitting ? 'SENDING...' : 'SIGN UP'}
            </button>
          </div>
          <div className="mt-4 flex flex-col items-center">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={setCaptchaToken}
              onExpired={() => setCaptchaToken(null)}
            />
            {captchaError && (<p className="text-xs text-red-500 mt-2">{captchaError}</p>)}
          </div>
        </form>
      ) : (
        <div className="text-center py-4 max-w-md mx-auto">
          <div className="mb-4 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="text-xl font-bold mb-2">Thank You for Subscribing!</h4>
          <p className="text-gray-600">
            You're now on our list and will be the first to know about new books and resources.
          </p>
        </div>
      )}
    </div>
  )
} 