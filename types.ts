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