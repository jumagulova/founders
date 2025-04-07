import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import foundersData from '@/data/founders'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://foundersforkids.com';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const founder = foundersData.find(founder => founder.slug === params.slug)
  
  if (!founder) {
    return {
      title: 'Founder Not Found | Founders for Kids',
    }
  }

  const pageTitle = `${founder.name} | Founders for Kids`;
  const pageDescription = `Learn about ${founder.name}, the founder of ${founder.company}. Discover their inspiring journey and impact.`;
  const imageUrl = `${BASE_URL}${founder.image}`; // Ensure founder.image starts with /
  const pageUrl = `${BASE_URL}/founders/${founder.slug}`;
  
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: pageUrl, // Add canonical URL
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: 'Founders for Kids',
      images: [
        {
          url: imageUrl,
          width: 800, // Use the actual width of your founder images
          height: 800, // Use the actual height
          alt: founder.name,
        },
      ],
      locale: 'en_US',
      type: 'article', // Specify content type as article
      // Optional Article specific OG tags
      // publishedTime: 'YYYY-MM-DDTHH:mm:ssZ', // Add if you have publish dates
      // authors: ['Founders for Kids'], // Or specific author
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      // siteId: 'YourTwitterSiteID', // Optional Twitter ID
      // creator: '@YourTwitterHandle', // Optional Twitter Handle
      images: [imageUrl], // Twitter recognizes OG images, but specifying is good
    },
  }
}

export function generateStaticParams() {
  return foundersData.map((founder) => ({
    slug: founder.slug,
  }))
}

export default function FounderPage({ params }: { params: { slug: string } }) {
  const founder = foundersData.find(founder => founder.slug === params.slug)
  
  if (!founder) {
    return notFound()
  }

  // Define Article Structured Data
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: founder.name,
    description: `Learn about ${founder.name}, the founder of ${founder.company}.`,
    image: `${BASE_URL}${founder.image}`, // Uses BASE_URL
    author: {
      '@type': 'Organization',
      name: 'Founders for Kids',
      url: BASE_URL, // Uses BASE_URL
    },
    publisher: {
      '@type': 'Organization',
      name: 'Founders for Kids',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`, // Uses BASE_URL
      },
    },
    // datePublished: 'YYYY-MM-DD', // Add if applicable
    // dateModified: 'YYYY-MM-DD', // Add if applicable
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/founders/${founder.slug}`, // Uses BASE_URL
    },
  }
  
  return (
    <main className="pt-16 pb-32">
      {/* Add JSON-LD Script for Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

      <div className="container mx-auto px-4">
        {/* Founder Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image 
                src={founder.image} 
                alt={founder.name}
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">{founder.name}</h1>
            <p className="text-xl text-gray-700 mb-6">{founder.shortBio}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {founder.industry}
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                {founder.company}
              </span>
            </div>
          </div>
        </div>
        
        {/* Founder Story */}
        <article className="prose prose-lg max-w-none mb-16">
          {founder.fullBio.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Inspire Your Children with Stories That Matter</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Help your children learn valuable lessons from the journeys of successful founders like {founder.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/books" className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors">
              Explore Our Books
            </Link>
            <Link href="/newsletter" className="px-8 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
              Join Our Newsletter
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 