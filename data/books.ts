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
  },
  {
    id: 'melanie-perkins',
    title: 'Melanie Perkins: Founder of Canva',
    slug: 'melanie-perkins',
    author: 'Jan J.',
    description: 'Explore the story of how Melanie Perkins co-founded the design platform Canva.',
    coverImage: '',
    status: 'coming soon'
  },
  {
    id: 'reed-hastings',
    title: 'Reed Hastings: Co-founder of Netflix',
    slug: 'reed-hastings',
    author: 'Jan J.',
    description: 'The story behind the streaming giant Netflix and its co-founder Reed Hastings.',
    coverImage: '',
    status: 'coming soon'
  },
  {
    id: 'sara-blakely',
    title: 'Sara Blakely: Founder of Spanx',
    slug: 'sara-blakely',
    author: 'Jan J.',
    description: 'Learn about Sara Blakely\'s journey creating the shapewear empire Spanx.',
    coverImage: '',
    status: 'coming soon'
  },
  {
    id: 'jensen-huang',
    title: 'Jensen Huang: Co-founder of Nvidia',
    slug: 'jensen-huang',
    author: 'Jan J.',
    description: 'Discover the story of Jensen Huang and the graphics technology giant Nvidia.',
    coverImage: '',
    status: 'coming soon'
  },
  {
    id: 'dharmesh-shah',
    title: 'Dharmesh Shah: Co-founder of HubSpot',
    slug: 'dharmesh-shah',
    author: 'Jan J.',
    description: 'Explore the creation of the marketing and sales platform HubSpot.',
    coverImage: '',
    status: 'coming soon'
  },
  {
    id: 'nick-woodman',
    title: 'Nick Woodman: Founder of GoPro',
    slug: 'nick-woodman',
    author: 'Jan J.',
    description: 'The high-adventure story behind the action camera company GoPro.',
    coverImage: '',
    status: 'coming soon'
  },
  {
    id: 'markus-persson',
    title: 'Markus Persson: Creator of Minecraft',
    slug: 'markus-persson',
    author: 'Jan J.',
    description: 'The story of Notch and the creation of the global phenomenon Minecraft.',
    coverImage: '',
    status: 'coming soon'
  },
  {
    id: 'daniel-ek',
    title: 'Daniel Ek: Co-founder of Spotify',
    slug: 'daniel-ek',
    author: 'Jan J.',
    description: 'Discover how Daniel Ek co-founded the music streaming service Spotify.',
    coverImage: '',
    status: 'coming soon'
  }
]

export default books as Book[] 