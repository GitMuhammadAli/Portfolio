import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ali Shahid | Web Dev",
  description: "Generated by create next app",
};
      {/* <Background theme={theme} /> */}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Londrina+Sketch&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-londrina-sketch">
        {children}
      </body>
    </html>
  );
}
