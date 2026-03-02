import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
