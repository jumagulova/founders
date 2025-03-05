import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Founders for Kids',
    default: 'Founders for Kids | True Stories of Dreamers, Doers, and Builders',
  },
  description: 'Inspiring children\'s books about real founders and entrepreneurs who changed the world with their ideas and determination.',
  keywords: ['children books', 'entrepreneur books', 'founder stories', 'kids books', 'educational books'],
  authors: [{ name: 'Founders for Kids' }],
  creator: 'Founders for Kids',
  publisher: 'Founders for Kids',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://foundersforkids.com',
    siteName: 'Founders for Kids',
    title: 'Founders for Kids | True Stories of Dreamers, Doers, and Builders',
    description: 'Inspiring children\'s books about real founders and entrepreneurs who changed the world with their ideas and determination.',
    images: [
      {
        url: 'https://foundersforkids.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Founders for Kids - Children\'s books about entrepreneurs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founders for Kids | True Stories of Dreamers, Doers, and Builders',
    description: 'Inspiring children\'s books about real founders and entrepreneurs who changed the world with their ideas and determination.',
    images: ['https://foundersforkids.com/twitter-image.jpg'],
    creator: '@foundersforkids',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Script id="reveal-animation">
          {`
            function checkReveal() {
              const elements = document.querySelectorAll('.reveal-element');
              const windowHeight = window.innerHeight;
              
              elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                  element.classList.add('revealed');
                }
              });
            }
            
            window.addEventListener('scroll', checkReveal);
            window.addEventListener('load', checkReveal);
            checkReveal();
          `}
        </Script>
      </body>
    </html>
  )
} 