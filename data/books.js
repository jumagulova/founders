import foundersData from './founders'; // Import founder data to ensure slugs match

const allFounderSlugs = foundersData.map(f => f.slug);

const booksData = [
  {
    slug: "pleasant-rowland", // To potentially link to the founder's page
    title: "Pleasant Rowland: Founder of American Girl",
    founderName: "Pleasant Rowland",
    // Ensure this image exists at public/books/american_girl.png
    image: "/books/american_girl.png", 
    amazonLink: "https://www.amazon.com/Pleasant-Rowland-American-Biographies-Founders/dp/B0F6SKR9BJ/",
    status: "available",
    description: "Meet Pleasant Rowland, the woman who turned her love of history and books into a timeless brand.", // Added short description
  },
  {
    slug: "phil-knight",
    title: "Phil Knight: Founder of Nike",
    founderName: "Phil Knight",
     // Corrected image path to use .jpg and ensure it exists at public/books/nike.jpg
    image: "/books/nike.jpg", 
    amazonLink: "https://www.amazon.com/Phil-Knight-Founder-Biographies-Founders/dp/B0F6V4KCVQ",
    status: "available",
    description: "Discover the journey of Phil Knight and the creation of the iconic Nike brand.",
  },
  {
    slug: "ole-kirk-kristiansen",
    title: "Ole Kirk Kristiansen: Founder of LEGO",
    founderName: "Ole Kirk Kristiansen",
    // NOTE: You provided nike.png for LEGO. Assuming typo, using lego.png. 
    // Ensure this image exists at public/books/lego.png
    image: "/books/lego.png", 
    amazonLink: "https://www.amazon.com/Ole-Kirk-Kristiansen-Biographies-Founders/dp/B0F6S86V8G",
    status: "available",
    description: "Learn how Ole Kirk Kristiansen built the beloved LEGO company brick by brick.",
  },
  {
    slug: "melanie-perkins", // Consider adding Melanie Perkins to foundersData if not already there
    title: "Melanie Perkins: Founder of Canva",
    founderName: "Melanie Perkins",
    image: null, // No image path provided for coming soon
    amazonLink: null,
    status: "coming soon",
    description: "Explore the story of how Melanie Perkins co-founded the design platform Canva.",
  },
  // Add more founders marked as "coming soon" here if needed
  // Example:
  // { 
  //   slug: "reed-hastings", 
  //   title: "Reed Hastings: Co-founder of Netflix", 
  //   founderName: "Reed Hastings", 
  //   image: null, 
  //   amazonLink: null, 
  //   status: "coming soon",
  //   description: "The story behind the streaming giant Netflix and its co-founder Reed Hastings." 
  // },
  // Add the remaining founders as coming soon
  { 
    slug: "reed-hastings", 
    title: "Reed Hastings: Co-founder of Netflix", 
    founderName: "Reed Hastings", 
    image: null, 
    amazonLink: null, 
    status: "coming soon",
    description: "The story behind the streaming giant Netflix and its co-founder Reed Hastings." 
  },
  { 
    slug: "sara-blakely", 
    title: "Sara Blakely: Founder of Spanx", 
    founderName: "Sara Blakely", 
    image: null, 
    amazonLink: null, 
    status: "coming soon",
    description: "Learn about Sara Blakely's journey creating the shapewear empire Spanx." 
  },
   { 
    slug: "jensen-huang", 
    title: "Jensen Huang: Co-founder of Nvidia", 
    founderName: "Jensen Huang", 
    image: null, 
    amazonLink: null, 
    status: "coming soon",
    description: "Discover the story of Jensen Huang and the graphics technology giant Nvidia." 
  },
   { 
    slug: "dharmesh-shah", 
    title: "Dharmesh Shah: Co-founder of HubSpot", 
    founderName: "Dharmesh Shah", 
    image: null, 
    amazonLink: null, 
    status: "coming soon",
    description: "Explore the creation of the marketing and sales platform HubSpot." 
  },
   { 
    slug: "nick-woodman", 
    title: "Nick Woodman: Founder of GoPro", 
    founderName: "Nick Woodman", 
    image: null, 
    amazonLink: null, 
    status: "coming soon",
    description: "The high-adventure story behind the action camera company GoPro." 
  },
  // NOTE: Markus Persson (Mojang/Minecraft) & Daniel Ek (Spotify) seem to be missing from the initial 9 if Pleasant, Phil, Ole, Melanie, Reed, Sara, Jensen, Dharmesh, Nick are included. Add them if they should be there.
  { 
    slug: "markus-persson", 
    title: "Markus Persson: Creator of Minecraft", 
    founderName: "Markus Persson", 
    image: null, 
    amazonLink: null, 
    status: "coming soon",
    description: "The story of Notch and the creation of the global phenomenon Minecraft." 
  },
  { 
    slug: "daniel-ek", 
    title: "Daniel Ek: Co-founder of Spotify", 
    founderName: "Daniel Ek", 
    image: null, 
    amazonLink: null, 
    status: "coming soon",
    description: "Discover how Daniel Ek co-founded the music streaming service Spotify." 
  },
];

// Simple validation: Check if all founder slugs from foundersData are represented
const bookSlugs = booksData.map(b => b.slug);
allFounderSlugs.forEach(slug => {
  if (!bookSlugs.includes(slug)) {
    console.warn(`[booksData Validation] Founder slug "${slug}" from foundersData is missing in booksData.`);
  }
});

// Ensure all slugs in booksData actually exist in foundersData
bookSlugs.forEach(slug => {
  if (!allFounderSlugs.includes(slug)) {
    console.warn(`[booksData Validation] Book slug "${slug}" does not exist in foundersData.`);
  }
})

export default booksData; 