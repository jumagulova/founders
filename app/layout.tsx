import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://foundersforkids.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Founders for Kids - Inspiring Children Through Stories',
    template: '%s | Founders for Kids',
  },
  description: 'Learn about inspiring founders and entrepreneurs through engaging stories and books designed for kids. Discover lessons in innovation, perseverance, and problem-solving.',
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
    title: 'Founders for Kids - Inspiring Children Through Stories',
    description: 'Engaging stories and books about innovative founders for kids.',
    url: BASE_URL,
    siteName: 'Founders for Kids',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Founders for Kids Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founders for Kids - Inspiring Children Through Stories',
    description: 'Engaging stories and books about innovative founders for kids.',
    images: [`${BASE_URL}/twitter-image.png`],
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

const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Founders for Kids',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '777216705021542');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=777216705021542&ev=PageView&noscript=1" alt="" />
        </noscript>
        <Header />
        <main>{children}</main>
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