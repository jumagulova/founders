import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://foundersforkids.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/private/',
      // disallow: '/api/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
} 