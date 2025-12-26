import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import foundersData from '@/data/founders'
import booksData from '@/data/books'

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
  const founder = foundersData.find((f) => f.slug === params.slug);

  if (!founder) {
    notFound();
  }

  // Try to find a related book for this founder (by matching slug)
  const relatedBook = booksData.find(
    (book) => book.status === 'available' && book.slug === founder.slug
  );

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
    <main className="pt-16 pb-32 bg-gray-50">
      {/* Add JSON-LD Script for Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

      <div className="container mx-auto px-4">
        {/* Founder Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-12">
          <div className="w-full md:w-1/3">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <Image 
                src={founder.image} 
                alt={founder.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
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
          {founder.bio.map((paragraph, index) => ( 
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Related Book, if available */}
        {relatedBook && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">
              Read the book about {founder.name}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="w-full md:w-1/4">
                <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                  {relatedBook.image ? (
                    <Image
                      src={relatedBook.image}
                      alt={`Book cover for ${relatedBook.title}`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      Cover coming soon
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full md:w-3/4 flex flex-col">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{relatedBook.title}</h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  {relatedBook.description}
                </p>
                {relatedBook.rating && (
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`text-lg ${
                            star <= Math.floor(relatedBook.rating!.stars) ||
                            (star === 5 && relatedBook.rating!.stars >= 4.5)
                              ? 'text-yellow-500'
                              : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="font-semibold text-gray-800">
                      {relatedBook.rating.stars}
                    </span>
                    <span className="text-gray-500 ml-2 text-sm">
                      ({relatedBook.rating.reviews} reviews)
                    </span>
                  </div>
                )}
                <div className="flex flex-wrap gap-4 mt-auto">
                  {relatedBook.amazonLink && (
                    <Link
                      href={relatedBook.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold text-sm hover:from-purple-700 hover:to-pink-600 transition duration-300"
                    >
                      View on Amazon
                    </Link>
                  )}
                  <Link
                    href="/books"
                    className="px-6 py-2 border border-blue-200 text-blue-600 rounded-full font-semibold text-sm hover:bg-blue-50 transition duration-300"
                  >
                    See all books
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
        
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