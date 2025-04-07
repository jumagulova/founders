import { MetadataRoute } from 'next'
import foundersData from '@/data/founders' // Ensure this path points to your founder data file
// Assuming you might have book data similarly structured
// import booksData from '@/data/books' 

// Use the production domain
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://foundersforkids.com'; 

// No console logs needed now unless the problem persists after this
// console.log('--- Generating Sitemap ---'); 

export default function sitemap(): MetadataRoute.Sitemap {
  
  const now = new Date(); // Get current date once

  // Define ALL known static pages
  const staticRoutes = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly' as 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/books`, lastModified: now, changeFrequency: 'weekly' as 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly' as 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/founders`, lastModified: now, changeFrequency: 'monthly' as 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/newsletter`, lastModified: now, changeFrequency: 'monthly' as 'monthly', priority: 0.5 }, 
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly' as 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: 'yearly' as 'yearly', priority: 0.3 },
    // Add any other static pages here if they exist
    // Example: { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
  ];

  // Generate routes for each individual founder page
  let founderRoutes: MetadataRoute.Sitemap = []; // Initialize as empty array
  try {
    if (Array.isArray(foundersData)) {
      founderRoutes = foundersData.map((founder) => {
        if (!founder?.slug) { // Check if founder or slug is missing
           console.warn('Sitemap generation: Skipping founder data missing slug:', founder); 
           return null; 
        }
        return {
          url: `${BASE_URL}/founders/${founder.slug}`,
          lastModified: now, // Use the same 'now' date
          changeFrequency: 'monthly' as 'monthly', 
          priority: 0.6,
        };
      }).filter(route => route !== null) as MetadataRoute.Sitemap; 
    } else {
      console.error('Sitemap generation: foundersData is not an array!');
    }
  } catch (error) {
     console.error('Sitemap generation: Error mapping foundersData:', error); 
  }
  
  // Example: Dynamic book pages (if you have them)
  /*
  const bookRoutes = booksData.map((book) => ({
    url: `${BASE_URL}/books/${book.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as 'yearly',
    priority: 0.6,
  }));
  */

  // Combine all routes into the final sitemap
  const allRoutes = [
    ...staticRoutes,
    ...founderRoutes,
    // ...bookRoutes, // Uncomment if you add book routes
  ];

  // console.log(`Total sitemap routes generated: ${allRoutes.length}`); 
  // console.log('--- Sitemap Generation Complete ---');

  return allRoutes;
} 