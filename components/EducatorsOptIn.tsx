"use client"

import { useState } from 'react'

export default function EducatorsOptIn() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Hidden iframe onLoad confirms submission without redirecting the page
  const handleIframeLoad = () => {
    if (isSubmitting) {
      setSubmitted(true)
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="mb-4 text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h3 className="text-xl font-semibold mb-1">Thanks! You're in.</h3>
        <p className="text-gray-600 text-sm">Check your inbox for the activity packs.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Hidden iframe target to avoid redirect */}
      <iframe name="educators_hidden_iframe" style={{ display: 'none' }} onLoad={handleIframeLoad} />

      {/* Post directly to Google Forms with correct entry IDs */}
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSdEC0j2zA1IlaWMjQYVobC7JbclGjrfahDn9AtezFeFVtDnXQ/formResponse"
        method="POST"
        target="educators_hidden_iframe"
        onSubmit={() => setIsSubmitting(true)}
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          type="text"
          name="entry.965620759"
          placeholder="Your name (optional)"
          className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm"
        />
        <input
          type="email"
          name="entry.751953085"
          required
          placeholder="Your email"
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300 text-sm"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold hover:from-purple-700 hover:to-pink-600 disabled:opacity-70"
        >
          {isSubmitting ? 'Sending…' : 'Get Activity Packs'}
        </button>
      </form>
    </div>
  )
}


