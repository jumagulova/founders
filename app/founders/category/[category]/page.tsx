import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FounderCard from '@/components/FounderCard'
import { getAllCategories, getCategory } from '@/lib/categories'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://foundersforkids.com'

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category: category.slug }))
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = getCategory(params.category)

  if (!category) {
    return { title: { absolute: 'Category Not Found | Founders for Kids' } }
  }

  const title = `${category.label} Founders & Entrepreneurs for Kids | Founders for Kids`
  const description = `Meet the ${category.label.toLowerCase()} founders whose inspiring stories we tell for kids. Biographies of the people behind the brands children know and love.`
  const url = `${BASE_URL}/founders/category/${category.slug}`

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Founders for Kids',
      type: 'website',
      locale: 'en_US',
    },
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategory(params.category)

  if (!category) {
    notFound()
  }

  const url = `${BASE_URL}/founders/category/${category.slug}`

  const collectionStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.label} Founders for Kids`,
    description: `Biographies of ${category.label.toLowerCase()} founders, written for kids.`,
    url,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: category.founders.map((founder, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${BASE_URL}/founders/${founder.slug}`,
        name: founder.name,
      })),
    },
  }

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Founders', item: `${BASE_URL}/founders` },
      { '@type': 'ListItem', position: 3, name: category.label, item: url },
    ],
  }

  return (
    <main className="pt-16 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/founders" className="hover:text-blue-600">Founders</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{category.label}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-blue-600">
          {category.label} Founders
        </h1>
        <p className="text-lg text-gray-700 mb-16 text-center max-w-3xl mx-auto">
          Meet the {category.label.toLowerCase()} founders and entrepreneurs whose stories we tell in the Founders for Kids series.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {category.founders.map((founder) => (
            <FounderCard key={founder.slug} founder={founder} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/founders"
            className="px-6 py-2 bg-white text-purple-600 border border-purple-300 rounded-full font-semibold text-sm hover:bg-purple-50 transition duration-300 inline-block text-center"
          >
            ← See all founders
          </Link>
        </div>
      </div>
    </main>
  )
}
