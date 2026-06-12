export interface BookRating {
  stars: number;
  reviews: number;
}

export interface Book {
  id: string;
  title: string;
  slug: string;
  author: string;
  description: string;
  coverImage: string;
  image?: string;
  status: 'available' | 'coming soon';
  amazonLink?: string;
  rating?: BookRating;
}

export interface KeyFact {
  label: string;
  value: string;
}

export interface FounderFAQ {
  question: string;
  answer: string;
}

export interface BioSection {
  heading: string;
  paragraphs: string[];
}

export interface Founder {
  name: string;
  slug: string;
  shortBio: string;
  company: string;
  industry: string;
  image: string;
  bio: string[]; // required fallback narrative
  // Optional enrichment fields (backward-compatible)
  bornYear?: number;
  birthplace?: string;
  companyFoundedYear?: number;
  keyFacts?: KeyFact[];
  faqs?: FounderFAQ[];
  sameAs?: string[];
  bioSections?: BioSection[];
  metaTitle?: string;
  metaDescription?: string;
} 