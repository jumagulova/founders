"use client"

import { useState, FormEvent } from 'react'

export default function NewsletterSignup() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsNewsletterSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')
    
    // Google Form URL with prefilled parameters
    const googleFormURL = `https://docs.google.com/forms/d/e/1FAIpQLSdxpgY-sMbtlJwoEp71aMG1FRZbPoEHQtnFxgV4DkL-VQQVEw/formResponse?entry.1402057886=${encodeURIComponent(email?.toString() || '')}&submit=Submit`
    
    try {
      // Using a hidden iframe to submit the form without redirecting
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      document.body.appendChild(iframe)
      iframe.src = googleFormURL
      
      // Show success message after a short delay
      setTimeout(() => {
        setNewsletterSubmitted(true)
        setIsNewsletterSubmitting(false)
        document.body.removeChild(iframe)
      }, 1000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsNewsletterSubmitting(false)
      // Show success message anyway since we can't reliably detect Google Form submission errors
      setNewsletterSubmitted(true)
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
              type="email" 
              name="email"
              placeholder="Your email address" 
              required
              className="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
            />
            <button 
              type="submit"
              disabled={isNewsletterSubmitting}
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
            >
              {isNewsletterSubmitting ? 'SENDING...' : 'SIGN UP'}
            </button>
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