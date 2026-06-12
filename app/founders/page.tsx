import Link from 'next/link'
import foundersData from '@/data/founders'
import FounderCard from '@/components/FounderCard'
import { getAllCategories } from '@/lib/categories'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://foundersforkids.com'

export const metadata = {
  title: 'Famous Founders & Entrepreneurs — Biographies for Kids',
  description: 'Meet 30 famous founders, from Walt Disney to the creators of Minecraft, LEGO, and Pokémon. Kid-friendly biographies with facts, stories, and FAQs.',
  alternates: { canonical: `${BASE_URL}/founders` },
}

// Define the consistent button style
const primaryButtonStyle = "px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold text-sm hover:from-purple-700 hover:to-pink-600 transition duration-300 inline-block text-center";
const secondaryButtonStyle = "px-6 py-2 bg-white text-purple-600 border border-purple-300 rounded-full font-semibold text-sm hover:bg-purple-50 transition duration-300 inline-block text-center"; // Example secondary style

export default function FoundersPage() {
  const categories = getAllCategories()

  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Famous Founders & Entrepreneurs — Biographies for Kids',
    url: `${BASE_URL}/founders`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: foundersData.map((founder, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${BASE_URL}/founders/${founder.slug}`,
        name: founder.name,
      })),
    },
  }

  return (
    <main className="pt-16 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionStructuredData) }}
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-blue-600">Founders</h1>
        <p className="text-xl font-semibold text-gray-600 mb-4 text-center">
          Bold, Curious, and Building Big Ideas
        </p>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          Meet the dreamers and doers we celebrate in our series. They come from different places and moments in history, yet each had the courage to try something new. They often faced tough questions, doubters, and roadblocks. But they kept going.
        </p>

        {/* Browse by category */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/founders/category/${category.slug}`}
              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
            >
              {category.label}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {foundersData.map((founder) => (
            <FounderCard key={founder.slug} founder={founder} />
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