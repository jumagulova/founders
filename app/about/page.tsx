import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="bg-white">
      {/* Letter from the Publisher Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 md:p-12 rounded-2xl shadow-lg border border-indigo-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                A Letter from the Publisher
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="font-medium text-gray-700 text-xl mb-6">Dear Readers,</p>
                
                <p className="mb-6">At Founders for Kids, we answer with real stories about real creators. Not fairy tales—true accounts of people who built something from nothing.</p>
                
                <p className="mb-6">Why focus on founders? Because behind every great creation stands a person with an idea and the courage to pursue it. Our books showcase the extraordinary perseverance, grit, and hard work that bring ideas to life.</p>
                
                <p className="mb-6">We share stories of people who kept going when others stopped. People whose creativity solved difficult problems. People who turned rejections into fuel and mistakes into stepping stones.</p>
                
                <p className="mb-6">Our mission is clear: to inspire and teach the next generation of bold dreamers and doers. Because the world needs their special ideas and determination—now more than ever.</p>
                
                <p className="mb-6">I can't wait to hear which story becomes your child's favorite. Or better yet, to someday read the story of what your child created through their own perseverance after reading one of our books.</p>
                
                <p className="mt-10 mb-8">Here's to the makers of tomorrow,</p>
                
                <div className="mt-8">
                  <p className="font-bold text-gray-900 mb-1 text-xl">Jan</p>
                  <p className="font-medium text-gray-800 mb-1">Founder & Publisher</p>
                  <p className="text-gray-600">Founders for Kids</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link 
                href="/books" 
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Our Books
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const metadata = {
  title: 'About Us',
  description: 'Learn about our mission to inspire the next generation of entrepreneurs through true stories of founders who changed the world.',
  alternates: {
    canonical: 'https://foundersforkids.com/about',
  },
} 