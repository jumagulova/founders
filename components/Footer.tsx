"use client"

import Link from 'next/link'
import { useState, FormEvent } from 'react'

export default function Footer() {
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

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-indigo-50 to-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Founders for Kids
              </span>
            </Link>
            <p className="text-gray-600 mb-6 text-sm">
              True stories of dreamers, doers, and builders for the next generation of entrepreneurs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-gray-900 font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-gray-900 font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#starter-pack" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Starter Pack
                </a>
              </li>
              <li>
                <Link href="/founders" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Founders
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-gray-900 font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">
                  hello[at]foundersforkids.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="border-t border-gray-200 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-gray-900 font-bold mb-2">Be the First to Know</h3>
              <p className="text-gray-600 text-sm">Join our newsletter to get updates on new releases, special offers, and exclusive content.</p>
            </div>
            
            {!newsletterSubmitted ? (
              <div className="w-full md:w-auto">
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your email" 
                    required
                    className="px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 flex-grow text-sm"
                  />
                  <button 
                    type="submit"
                    disabled={isNewsletterSubmitting}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-4 py-2 rounded-r-full text-sm font-medium transition-colors"
                  >
                    {isNewsletterSubmitting ? 'SENDING...' : 'SIGN UP'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="w-full md:w-auto bg-green-50 border border-green-100 rounded-lg p-3 flex items-center text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium text-sm">Thank you for subscribing!</p>
                  <p className="text-xs text-green-500">We'll keep you updated on new books and resources.</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Founders for Kids. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-purple-600 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-purple-600 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center mt-6">
            Thanks for stopping by. Keep dreaming big.
          </p>
        </div>
      </div>
    </footer>
  )
} 