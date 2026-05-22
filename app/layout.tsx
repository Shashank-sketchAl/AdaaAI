import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist'
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Lucknowi AI | Your Personal Ethnic Fashion Stylist from the City of Nawabs',
  description: 'Experience the timeless elegance of Lucknowi fashion with AI-powered styling. Discover authentic Chikankari, Zardozi, and Awadhi heritage wear curated just for you. Pehle Aap!',
  keywords: ['Lucknow fashion', 'Chikankari', 'Zardozi', 'ethnic wear', 'AI stylist', 'Indian fashion', 'Awadhi heritage', 'wedding wear'],
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
    title: 'Lucknowi AI | Ethnic Fashion Stylist',
    description: 'AI-powered styling for authentic Lucknowi fashion',
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
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
