import Image from 'next/image'
import Link from 'next/link'
import NewsletterSignup from '@/components/NewsletterSignup'
import booksData from '@/data/books' // Import the new book data

export const metadata = {
  title: 'Books | Founders for Kids',
  description: 'Explore biographies of inspiring founders like Pleasant Rowland, Phil Knight, Ole Kirk Kristiansen, and more.'
}

// Reusable button style from founders page
const primaryButtonStyle = "mt-auto px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold text-sm hover:from-purple-700 hover:to-pink-600 transition duration-300 inline-block text-center";

export default function Books() {
  const availableBooks = booksData.filter(book => book.status === 'available');
  const comingSoonBooks = booksData.filter(book => book.status === 'coming soon');

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

      {/* Available Books Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black mb-16 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Available Now
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> 
              {availableBooks.map((book) => (
                <div key={book.slug} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                  {book.image ? (
                     <div className="h-80 relative bg-gray-100"> {/* Taller container for book covers */}
                      <Image
                        src={book.image}
                        alt={`Book cover for ${book.title}`}
                        fill
                        className="object-contain p-4" // Use object-contain and padding
                      />
                    </div>
                  ) : (
                    <div className="h-80 bg-gray-200 flex items-center justify-center text-gray-500">Image coming soon</div>
                  )}
                  <div className="p-6 flex flex-col flex-grow"> {/* Ensure text content takes space */}
                    <h3 className="text-xl font-bold mb-2 text-blue-600">{book.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm flex-grow">{book.description}</p>
                     {/* Link to Amazon */}
                     <Link 
                       href={book.amazonLink || '#'} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className={primaryButtonStyle} // Apply button style
                     >
                       View on Amazon
                     </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Width Constraint Added */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50"> 
        <div className="container mx-auto px-6">
          {/* Added wrapper div to constrain width and center */}
          <div className="max-w-xl mx-auto"> 
            <NewsletterSignup /> 
          </div>
        </div>
      </section>

      {/* Coming Soon Section - Styling Updates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
             {/* Updated Headline Styling */}
            <h2 className="text-4xl font-black mb-16 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Coming Soon
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
              {comingSoonBooks.map((book) => (
                <div 
                  key={book.slug} 
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center border border-purple-100" 
                >
                  <div className="mb-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-blue-600">{book.founderName}</h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    Founder of {book.title.split('Founder of ')[1]?.split(':')[0] || book.title.split(':')[0] || '...'} 
                  </p>
                  
                  {/* Removed the "Coming Soon" span from here */}
                  {/* <span className="mt-auto text-sm font-semibold text-purple-600 opacity-80">
                    Coming Soon
                  </span> */}
                   <div className="mt-auto h-6"></div> {/* Add empty div to maintain space if needed */}
                </div>
              ))}
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
    </div>
  )
} 