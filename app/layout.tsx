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
  title: 'Kaktusi Macan',
  description: 'Lokalni, obiteljski rasadnik kaktusa .',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo-nogb.png',
    apple: '/images/logo-nogb.png',
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
