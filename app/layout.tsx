import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { LazyMotionProvider } from '@/components/LazyMotionProvider'

// Plus Jakarta Sans — modern geometric sans with personality. Replaced Inter
// (too generic / AI-portfolio default).
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://alishahid-dev.vercel.app'),
  title: 'Ali Shahid | Full Stack Developer',
  description:
    'Full Stack Developer specializing in Next.js, NestJS, React, and TypeScript. Building scalable web applications with modern technologies.',
  keywords: [
    'Full Stack Developer',
    'Next.js',
    'React',
    'TypeScript',
    'NestJS',
    'Portfolio',
    'Ali Shahid',
  ],
  authors: [{ name: 'Ali Shahid' }],
  openGraph: {
    title: 'Ali Shahid | Full Stack Developer',
    description:
      'Full Stack Developer specializing in Next.js, NestJS, React, and TypeScript. Building scalable web applications with modern technologies.',
    url: 'https://alishahid-dev.vercel.app',
    siteName: 'Ali Shahid Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ali Shahid - Full Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Shahid | Full Stack Developer',
    description:
      'Full Stack Developer specializing in Next.js, NestJS, React, and TypeScript.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.className}>
      <head>
        <script
          type="speculationrules"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [{ where: { href_matches: "/*" }, eagerness: "moderate" }],
            }),
          }}
        />
      </head>
      <body>
        <LazyMotionProvider>
          {children}
        </LazyMotionProvider>
      </body>
    </html>
  )
}
