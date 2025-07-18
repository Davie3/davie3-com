import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { Footer } from '@/components/footer';
import { ClientLayout } from '@/components/client-layout';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'David Griffin - Software Engineer',
    template: '%s | David Griffin',
  },
  description:
    'The personal website and portfolio of David Griffin, a passionate software engineer specializing in web development, system administration, and creative technology solutions.',
  openGraph: {
    title: 'David Griffin - Software Engineer',
    description:
      'The personal website and portfolio of David Griffin, a passionate software engineer.',
    url: 'https://davie3.com',
    siteName: 'David Griffin',
    images: [
      {
        url: 'https://davie3.com/og-image.png', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Griffin - Software Engineer',
    description:
      'The personal website and portfolio of David Griffin, a passionate software engineer.',
    creator: '@itsdavie3',
    images: ['https://davie3.com/og-image.png'], // Replace with your actual OG image URL
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-16 bg-black text-white`}
      >
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
