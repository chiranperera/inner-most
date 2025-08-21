import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'InnorMost - Find Your Perfect Match',
  description: 'Connect with meaningful relationships through InnorMost. Discover people who share your interests and values in a safe, authentic dating environment.',
  keywords: 'dating, relationships, connections, matches, social networking',
  authors: [{ name: 'InnorMost Team' }],
  creator: 'InnorMost',
  publisher: 'InnorMost',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://innermost.com',
    siteName: 'InnorMost',
    title: 'InnorMost - Find Your Perfect Match',
    description: 'Connect with meaningful relationships through InnorMost. Discover people who share your interests and values.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InnorMost - Find Your Perfect Match',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InnorMost - Find Your Perfect Match',
    description: 'Connect with meaningful relationships through InnorMost.',
    images: ['/og-image.jpg'],
    creator: '@innermost',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-neutral-900`}>
        {children}
      </body>
    </html>
  );
}