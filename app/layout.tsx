import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ali Shahid | Web Dev",
  description: "Generated by create next app",
};
      {/* <Background theme={theme} /> */}

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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

export const dynamic = 'force-static'
export const revalidate = 86400 // Revalidate once per day
