import type { Metadata } from 'next'
import Script from "next/script";
import { Calistoga, DM_Sans, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cactus-website-design.vercel.app'),
  title: 'Kaktusi Macan — obiteljski rasadnik kaktusa',
  description: 'Lokalni, obiteljski rasadnik kaktusa iz Pule.',
  icons: {
    icon: '/images/logo-nogb.png',
    apple: '/images/logo-nogb.png',
  },
  openGraph: {
    title: 'Kaktusi Macan — obiteljski rasadnik kaktusa',
    description: 'Lokalni, obiteljski rasadnik kaktusa iz Pule.',
    url: '/',
    siteName: 'Kaktusi Macan',
    type: 'website',
    images: [
      {
        url: '/images/hero-couple.jpg',
        width: 1200,
        height: 630,
        alt: 'Kaktusi Macan — obiteljski rasadnik kaktusa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaktusi Macan — obiteljski rasadnik kaktusa',
    description: 'Lokalni, obiteljski rasadnik kaktusa iz Pule.',
    images: ['/images/hero-couple.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr" className="bg-background">
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body className={`${calistoga.variable} ${dmSans.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
