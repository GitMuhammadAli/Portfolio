import "./globals.css";
import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Ali Shahid | Full Stack Developer Portfolio",
  description: "Portfolio of Ali Shahid, Full Stack Developer. Crafting innovative solutions at the intersection of web development and design.",
  openGraph: {
    title: "Ali Shahid | Full Stack Developer Portfolio",
    description: "Portfolio of Ali Shahid, Full Stack Developer. Crafting innovative solutions at the intersection of web development and design.",
    url: "https://your-domain.com/", // Replace with your actual domain
    siteName: "Ali Shahid Portfolio",
    images: [
      {
        url: "/og-image.png", // Place an og-image.png in your public folder
        width: 1200,
        height: 630,
        alt: "Ali Shahid Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Shahid | Full Stack Developer Portfolio",
    description: "Portfolio of Ali Shahid, Full Stack Developer. Crafting innovative solutions at the intersection of web development and design.",
    images: ["/og-image.png"],
    creator: "@yourtwitterhandle" // Replace with your Twitter handle
  },
  icons: {
    icon: "/favicon.ico"
  }
};

import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph and Twitter meta tags are handled by Next.js metadata */}
      </head>
      <body>{children}</body>
    </html>
  )
}

export const dynamic = 'force-static'
export const revalidate = 86400
