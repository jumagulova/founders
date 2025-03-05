"use client"

import Image from 'next/image'
import Link from 'next/link'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function Books() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-indigo-100 to-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight">
            Our Books
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover inspiring stories of founders who changed the world with their ideas and determination.
          </p>
        </div>
      </section>

      {/* Featured Titles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black mb-16 text-center">Featured Titles</h2>
            
            {/* Featured Book */}
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
              <div className="lg:w-2/5">
                <div className="relative w-[300px] h-[450px] mx-auto shadow-2xl rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/pleasant-rowland-book.jpg" 
                    alt="Pleasant Rowland Book" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="lg:w-3/5">
                <h3 className="text-3xl font-bold mb-4">Pleasant Rowland, Founder of American Girl</h3>
                <div className="bg-gradient-to-r from-purple-600 to-pink-500 h-1 w-20 mb-6"></div>
                <p className="text-lg text-gray-700 mb-6">
                  A teacher who spotted a gap for older kids and created a new kind of doll.
                  Combined creativity and problem-solving to change how people think about learning and play.
                </p>
                <a 
                  href="https://amazon.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Buy Now on Amazon
                </a>
              </div>
            </div>
            
            {/* Coming Soon Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center">Coming Soon</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Book 1 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative w-full h-[280px] mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Phil Knight</h3>
                  <p className="text-gray-600 text-center">Founder of Nike</p>
                </div>
                
                {/* Book 2 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative w-full h-[280px] mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-green-100 to-green-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Daniel Ek</h3>
                  <p className="text-gray-600 text-center">Founder of Spotify</p>
                </div>
                
                {/* Book 3 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative w-full h-[280px] mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-purple-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-400 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Jensen Huang</h3>
                  <p className="text-gray-600 text-center">Founder of NVIDIA</p>
                </div>
                
                {/* Book 4 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative w-full h-[280px] mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-red-100 to-red-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Nick Woodman</h3>
                  <p className="text-gray-600 text-center">Founder of GoPro</p>
                </div>
                
                {/* Book 5 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative w-full h-[280px] mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Markus Persson</h3>
                  <p className="text-gray-600 text-center">Creator of Minecraft</p>
                </div>
                
                {/* Book 6 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative w-full h-[280px] mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-pink-100 to-pink-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Sara Blakely</h3>
                  <p className="text-gray-600 text-center">Founder of Spanx</p>
                </div>
                
                {/* Book 7 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative w-full h-[280px] mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Dharmesh Shah</h3>
                  <p className="text-gray-600 text-center">Founder of HubSpot</p>
                </div>
                
                {/* Book 8 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative w-full h-[280px] mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-red-100 to-red-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-red-400 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">Reed Hastings</h3>
                  <p className="text-gray-600 text-center">Founder of Netflix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes These Books Fun Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              What Makes These Books Fun to Read?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Eye-Opening Adventures</h3>
                    <p className="text-gray-600">
                      Each founder's journey has surprise twists, comical bumps, and moments when everything nearly goes off track.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Relatable Failures</h3>
                    <p className="text-gray-600">
                      Nobody's perfect. Read how they handled setbacks and used them to grow stronger.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Childhood Clues</h3>
                    <p className="text-gray-600">
                      Find out what these founders were like as kids. Some had big imaginations, others loved tinkering or making games in their backyard.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Easily Digestible</h3>
                    <p className="text-gray-600">
                      Short chapters mean you can dip in for ten minutes or keep reading for an hour—whatever suits you.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 md:col-span-2">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Lighthearted Style</h3>
                    <p className="text-gray-600">
                      We keep it fun and fresh, so you'll laugh a little while learning new things.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe learning can happen in big events or small, everyday details. Pick a title, read a chapter (or three), and see which parts spark your own imagination. When you turn the page, you'll find stories that are easy to read, full of personality, and might just inspire your next idea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  )
} 