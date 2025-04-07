"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png"
            alt="Founders for Kids Logo" 
            width={180}
            height={45}
            className="h-10 w-auto"
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">
            HOME
          </Link>
          <Link href="/books" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">
            BOOKS
          </Link>
          <Link href="/founders" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">
            FOUNDERS
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm">
            ABOUT
          </Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
            <Link 
              href="/#starter-pack"
              className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold text-sm hover:from-purple-700 hover:to-pink-600 transition duration-300"
            >
              GET STARTER PACK
            </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-4 px-4">
             <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
             <Link 
                href="/books" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                BOOKS
              </Link>
             <Link 
                href="/founders" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                FOUNDERS
              </Link>
             <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
             {/* Mobile Button */}
             <div className="mt-4 w-full flex justify-center">
                <Link 
                  href="/#starter-pack"
                  className="block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold text-sm hover:from-purple-700 hover:to-pink-600 transition duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GET STARTER PACK
                </Link>
             </div>
          </nav>
        </div>
      )}
    </header>
  )
} 