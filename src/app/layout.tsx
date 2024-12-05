import "@/styles/main.scss"

import type { Metadata } from "next";
import PlausibleProvider from 'next-plausible'

export const metadata: Metadata = {
  title: "supermanifold",
  description: "Intelligent products for cozy living.",
  openGraph: {
    title: 'supermanifold',
    description: 'Intelligent products for cozy living.',
    url: 'https://www.supermanifold.com/',
    siteName: 'supermanifold',
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png', // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    // videos: [
    //   {
    //     url: 'https://nextjs.org/video.mp4', // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    // ],
    // audio: [
    //   {
    //     url: 'https://nextjs.org/audio.mp3', // Must be an absolute URL
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
  <PlausibleProvider domain="supermanifold.com" customDomain="https://plausible.hanhanxueb.synology.me" 
  // trackLocalhost enabled
  />
</head>
      <body className={``}>
        {children}
      </body>
    </html>
  );
}








