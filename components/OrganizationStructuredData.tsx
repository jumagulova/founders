export default function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Founders for Kids',
    url: 'https://foundersforkids.com',
    logo: 'https://foundersforkids.com/logo.png',
    sameAs: [
      'https://twitter.com/foundersforkids',
      'https://instagram.com/foundersforkids',
      'https://facebook.com/foundersforkids',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@foundersforkids.com',
      contactType: 'customer service',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 