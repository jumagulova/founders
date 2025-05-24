"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState, FormEvent } from 'react'
import booksData from '@/data/books' // Import book data

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    
    // Google Form URL with prefilled parameters
    const googleFormURL = `https://docs.google.com/forms/d/e/1FAIpQLSfThztQgCSeWqhotHsatvMijjaokG8yo6TRV-0hdGtPvbXjCg/formResponse?entry.1198178546=${encodeURIComponent(name?.toString() || '')}&entry.1500794759=${encodeURIComponent(email?.toString() || '')}&submit=Submit`
    
    try {
      // Using a hidden iframe to submit the form without redirecting
      const iframe = document.createElement('iframe')
      iframe.style.display = 'none'
      document.body.appendChild(iframe)
      iframe.src = googleFormURL
      
      // Show success message after a short delay
      setTimeout(() => {
        setFormSubmitted(true)
        setIsSubmitting(false)
        document.body.removeChild(iframe)
      }, 1000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      // Show success message anyway since we can't reliably detect Google Form submission errors
      setFormSubmitted(true)
    }
  }

  // Filter for available books to feature
  const featuredBooks = booksData.filter(book => book.status === 'available').slice(0, 3); // Show top 3 available

  return (
    <div className="bg-white font-sans">
      {/* Hero Section - Bold, Vibrant */}
      <section className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative">
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-overlay opacity-60 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-pink-500 rounded-full mix-blend-overlay opacity-40 animate-pulse"></div>
          <div className="absolute top-40 left-1/4 w-20 h-20 bg-cyan-300 rounded-full mix-blend-overlay opacity-70"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
            <div className="md:w-1/2 z-10 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-black mb-4 text-white leading-tight tracking-tight animate-fadeIn">
                <span className="block mb-2">True Stories of</span>
                <span className="font-extrabold">Dreamers, Doers, and Builders</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-lg font-light leading-relaxed animate-fadeIn animation-delay-300">
                See how great ventures begin with simple ideas. The Founders for Kids series spotlights entrepreneurs who turned big dreams into reality.
              </p>
              <p className="text-xl text-yellow-300 mb-8 max-w-lg font-light leading-relaxed animate-fadeIn animation-delay-400">
                Ready to begin your own project? Grab our Starter Pack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-500">
                <a 
                  href="#starter-pack" 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <span>Get Starter Pack</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <p className="text-white/80 text-sm mt-2 ml-4">Includes easy worksheets and fun tips.</p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] transform -rotate-6 hover:rotate-0 transition-all duration-500 animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-yellow-400 rounded-3xl opacity-20 blur-xl"></div>
                <Image 
                  src="/book.png" 
                  alt="Colorful book illustration" 
                  fill
                  className="object-contain drop-shadow-2xl z-10"
                />
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-cyan-400 rounded-full opacity-70 blur-md animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section - Edgy Design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-600">Featured Books</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Get inspired by the stories of world-changing founders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredBooks.map((book) => (
               <div key={book.slug} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                {book.image ? (
                   <div className="h-80 relative bg-gray-100">
                    <Image
                      src={book.image}
                      alt={`Book cover for ${book.title}`}
                      fill
                      className="object-contain p-4" 
                    />
                  </div>
                ) : (
                  <div className="h-80 bg-gray-200 flex items-center justify-center text-gray-500">Image coming soon</div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-blue-600">{book.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">{book.description}</p>
                  {book.rating && (
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`text-lg ${
                              star <= Math.floor(book.rating!.stars) || 
                              (star === 5 && book.rating!.stars >= 4.5)
                                ? 'text-yellow-500'
                                : 'text-gray-300'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="font-semibold text-gray-800">{book.rating.stars}</span>
                      <span className="text-gray-500 ml-2 text-sm">({book.rating.reviews} reviews)</span>
                    </div>
                  )}
                   <Link 
                     href={book.amazonLink || '#'} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold text-sm hover:from-purple-700 hover:to-pink-600 transition duration-300 inline-block text-center mt-auto"
                   >
                     View on Amazon
                   </Link>
                </div>
              </div>
            ))}
          </div>
           {/* Optional: Link to the full books page */}
           <div className="text-center mt-12">
              <Link href="/books" className="text-purple-600 font-semibold hover:text-pink-500 transition">
                See All Books &rarr;
              </Link>
           </div>
        </div>
      </section>

      {/* Why Founders for Kids Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-indigo-100 to-transparent opacity-50"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-100 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal-element">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight">
              Why Founders for Kids?
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow reveal-element">
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Real Stories</h3>
              <p className="text-gray-600 text-center">
                Learn how actual entrepreneurs built their dreams.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow reveal-element animation-delay-200">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Fun Adventures</h3>
              <p className="text-gray-600 text-center">
                Explore "The Wild, Wacky, and Brilliant World of Entrepreneurs."
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow reveal-element animation-delay-300">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Behind the Scenes</h3>
              <p className="text-gray-600 text-center">
                Get a peek at the steps (and missteps) that took them from a simple thought to a company known around the world.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow reveal-element animation-delay-400">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Easy Lessons</h3>
              <p className="text-gray-600 text-center">
                Enjoy stories that are easy to read and full of useful lessons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser Section - Changed to more vibrant gradient */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-10"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rotate-12 scale-150 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal-element">
            <h2 className="text-5xl font-black mb-6 tracking-tight">Inspiring the Founders of Tomorrow</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Ideas can come from anywhere—especially kids. Our stories showcase those lightbulb moments, smart hacks, and humble beginnings behind today's biggest brands.
            </p>
            <Link 
              href="/about" 
              className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/50 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              <span className="group-hover:mr-2 transition-all">Learn More About Us</span>
              <span className="opacity-0 group-hover:opacity-100 transition-all">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Email Sign-Up Section */}
      <section id="starter-pack" className="py-20 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-purple-100 reveal-element">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Get Your Free Starter Pack
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Inspire your child's entrepreneurial journey with our free starter pack. It includes worksheets, activities, and tips to help young founders take their first steps.
              </p>
            </div>
            
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-8">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full md:w-auto disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Starter Pack'}
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-4 text-center">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            ) : (
              <div className="text-center py-8 max-w-xl mx-auto">
                <div className="mb-6 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your Starter Pack is on its way to your inbox! Please check your email in the next few minutes.
                </p>
                <p className="text-gray-600">
                  If you don't see it, please check your spam folder or contact us at hello[at]foundersforkids.com
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
} 