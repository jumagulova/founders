import { Book } from '@/types'

const books: Book[] = [
  {
    id: 'ole-kirk-kristiansen',
    title: 'Ole Kirk Kristiansen: Founder of LEGO',
    slug: 'ole-kirk-kristiansen',
    author: 'Jan J.',
    description: 'Learn how Ole Kirk Kristiansen built the beloved LEGO company brick by brick.',
    coverImage: '/books/lego.png',
    image: '/books/lego.png',
    status: 'available',
    amazonLink: 'https://www.amazon.com/Ole-Kirk-Kristiansen-Biographies-Founders/dp/B0F6S86V8G',
    rating: {
      stars: 4.8,
      reviews: 51
    }
  },
  {
    id: 'phil-knight',
    title: 'Phil Knight: Founder of Nike',
    slug: 'phil-knight',
    author: 'Jan J.',
    description: 'Discover the journey of Phil Knight and the creation of the iconic Nike brand.',
    coverImage: '/books/nike.jpg',
    image: '/books/nike.jpg',
    status: 'available',
    amazonLink: 'https://www.amazon.com/Phil-Knight-Founder-Biographies-Founders/dp/B0F6V4KCVQ',
    rating: {
      stars: 4.8,
      reviews: 52
    }
  },
  {
    id: 'pleasant-rowland',
    title: 'Pleasant Rowland: Founder of American Girl',
    slug: 'pleasant-rowland',
    author: 'Jan J.',
    description: 'Meet Pleasant Rowland, the woman who turned her love of history and books into a timeless brand.',
    coverImage: '/books/american_girl.png',
    image: '/books/american_girl.png',
    status: 'available',
    amazonLink: 'https://www.amazon.com/Pleasant-Rowland-American-Biographies-Founders/dp/B0F6SKR9BJ/',
    rating: {
      stars: 4.8,
      reviews: 48
    }
  }
]

export default books as Book[] 