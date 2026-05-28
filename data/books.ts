import { Book } from '@/types'

const books: Book[] = [
  {
    id: 'ole-kirk-kristiansen',
    title: 'Ole Kirk Kristiansen: Founder of LEGO',
    slug: 'ole-kirk-kristiansen',
    author: 'Jan J.',
    description: 'Learn how Ole Kirk Kristiansen built the beloved LEGO company brick by brick.',
    coverImage: '/books/lego.jpg',
    image: '/books/lego.jpg',
    status: 'available',
    amazonLink: 'https://www.amazon.com/dp/B0F6S86V8G?maas=maas_adg_C956EFD8C147B08A0BBEDA6998C946D4_afap_abs&ref_=aa_maas&tag=maas',
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
    amazonLink: 'https://www.amazon.com/dp/B0F6V4KCVQ?maas=maas_adg_C5A83EFE9F7724A7D787EF73216E0C3C_afap_abs&ref_=aa_maas&tag=maas',
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
    amazonLink: 'https://www.amazon.com/dp/B0F6SKR9BJ?maas=maas_adg_BA77858D9671BB4BFE8BEEAB917F5E17_afap_abs&ref_=aa_maas&tag=maas',
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
    coverImage: '/books/Canva.jpg',
    image: '/books/Canva.jpg',
    status: 'available',
    amazonLink: 'https://www.amazon.com/dp/B0G3HPP3WN?maas=maas_adg_D5A0D49D2DCC996D0B662C4A572CA491_afap_abs&ref_=aa_maas&tag=maas'
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
    title: 'Markus Persson: Founder of Minecraft',
    slug: 'markus-persson',
    author: 'Jan J.',
    description: 'Your child has spent hundreds of hours in Minecraft — now they can read the story behind it. Follow Markus "Notch" Persson from a difficult childhood in Sweden to building the best-selling video game in history.',
    coverImage: '/books/minecraft.jpg',
    image: '/books/minecraft.jpg',
    status: 'available',
    amazonLink: 'https://www.amazon.com/dp/B0GX34NN2C',
    rating: {
      stars: 5.0,
      reviews: 1
    }
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