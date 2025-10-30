"use client"

import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = '6LfUD_wrAAAAAC7pxceK44HurQ663eiVS9G-UogW'

export default function EducatorsOptIn() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [captchaError, setCaptchaError] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

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
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsSubmitting(true);
          setCaptchaError(null);
          setError(null);
          if (!captchaToken) {
            setCaptchaError('Please verify you are not a robot.');
            setIsSubmitting(false);
            return;
          }
          const formData = new FormData(e.currentTarget);
          const name = formData.get('entry.965620759') as string;
          const email = formData.get('entry.751953085') as string;
          try {
            const response = await fetch('/api/submit-educator-form', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: name || '',
                email: email || '',
                captcha: captchaToken
              }),
            });
            if (response.ok) {
              setSubmitted(true);
              setIsSubmitting(false);
            } else {
              const errorData = await response.json();
              setError(errorData.error || 'Submission failed. Please try again.');
              setIsSubmitting(false);
            }
          } catch (error) {
            setError('Network error. Please try again.');
            setIsSubmitting(false);
          }
        }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col sm:flex-row gap-3">
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
            {isSubmitting ? 'Sending…' : 'SEND ME THE LESSONS PLANS'}
          </button>
        </div>
        <div className="flex flex-col items-center w-full mt-3">
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={setCaptchaToken}
            onExpired={() => setCaptchaToken(null)}
          />
          {captchaError && <p className="text-xs text-red-500 mt-2">{captchaError}</p>}
        </div>
        {error && <p className="text-xs text-red-500 mt-2 text-center">{error}</p>}
      </form>
    </div>
  );
}


