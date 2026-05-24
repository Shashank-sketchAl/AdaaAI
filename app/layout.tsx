import type { Metadata, Viewport } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ['latin'],
  variable: '--font-geist'
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'NazakatAI | लखनवी स्टाइलिस्ट - Your Lucknowi Fashion Assistant',
  description:
    'आदाब! Experience the नज़ाकत (elegance) of Lucknowi fashion with AI-powered styling. Discover authentic Chikankari, Zardozi, Mukaish, and Nawabi heritage wear from master karigars. पहले आप!',
  keywords: [
    'Lucknow fashion',
    'Chikankari',
    'Zardozi',
    'Mukaish',
    'ethnic wear',
    'AI stylist',
    'Indian fashion',
    'Nawabi heritage',
    'karigar',
    'bunkar',
    'wedding wear',
    'Lucknow',
  ],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'NazakatAI | लखनवी स्टाइलिस्ट',
    description:
      'AI-powered styling for authentic Lucknowi fashion - Chikankari, Zardozi, Mukaish from master karigars',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#8B5A2B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geist.variable} ${geistMono.variable} ${playfair.variable} bg-background`}
      >
        <body className="font-sans antialiased">
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </body>
      </html>
    </ClerkProvider>
  )
}