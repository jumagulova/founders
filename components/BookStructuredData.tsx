// Define an interface for the book prop
interface Book {
  title: string;
  description: string;
  coverImage: string;
  slug: string;
  isbn: string;
}

export default function BookStructuredData({ book }: { book: Book }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    author: {
      '@type': 'Person',
      name: 'Founders for Kids',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Founders for Kids',
    },
    description: book.description,
    image: book.coverImage,
    url: `https://foundersforkids.com/books/${book.slug}`,
    isbn: book.isbn,
    inLanguage: 'en',
    audience: {
      '@type': 'Audience',
      audienceType: 'Children',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 