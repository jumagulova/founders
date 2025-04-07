import Link from 'next/link'
import Image from 'next/image'
import foundersData from '@/data/founders'

export const metadata = {
  title: 'Founders | Founders for Kids',
  description: 'Meet the dreamers and doers we celebrate in our Founders for Kids series.'
}

// Define the consistent button style
const primaryButtonStyle = "px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold text-sm hover:from-purple-700 hover:to-pink-600 transition duration-300 inline-block text-center";
const secondaryButtonStyle = "px-6 py-2 bg-white text-purple-600 border border-purple-300 rounded-full font-semibold text-sm hover:bg-purple-50 transition duration-300 inline-block text-center"; // Example secondary style

export default function FoundersPage() {
  return (
    <main className="pt-16 pb-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-blue-600">Founders</h1>
        <p className="text-xl font-semibold text-gray-600 mb-4 text-center">
          Bold, Curious, and Building Big Ideas
        </p>
        <p className="text-lg text-gray-700 mb-16 text-center max-w-3xl mx-auto">
          Meet the dreamers and doers we celebrate in our series. They come from different places and moments in history, yet each had the courage to try something new. They often faced tough questions, doubters, and roadblocks. But they kept going.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {foundersData.map((founder) => (
            <div key={founder.slug} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="h-64 relative">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-blue-600">{founder.name}</h2>
                  <p className="text-gray-600 mb-4">{founder.shortBio}</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {founder.industry}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link 
                  href={`/founders/${founder.slug}`}
                  className={primaryButtonStyle}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Explore Their Stories?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Check out our books or sign up for the starter pack to begin your own entrepreneurial journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/books" className={secondaryButtonStyle.replace('text-purple-600 border border-purple-300', 'text-blue-600 border border-transparent')}>
              Browse Books
            </Link>
            <Link href="/#starter-pack" className={primaryButtonStyle}>
              Get Starter Pack
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 