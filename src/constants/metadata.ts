import type { Metadata } from 'next';
import { PERSONAL_INFO } from './personal';
import { EXTERNAL_URLS } from './urls';

/**
 * Metadata configuration constants for the website.
 */
export const SITE_METADATA: Metadata = {
  title: {
    default: `${PERSONAL_INFO.FULL_NAME} - ${PERSONAL_INFO.TITLE}`,
    template: `%s | ${PERSONAL_INFO.FULL_NAME}`,
  },
  description: `The personal website and portfolio of ${PERSONAL_INFO.FULL_NAME}, a passionate software engineer specializing in web development, system administration, and creative technology solutions.`,
  openGraph: {
    title: `${PERSONAL_INFO.FULL_NAME} - ${PERSONAL_INFO.TITLE}`,
    description: `The personal website and portfolio of ${PERSONAL_INFO.FULL_NAME}, a passionate software engineer.`,
    url: EXTERNAL_URLS.SITE_URL,
    siteName: PERSONAL_INFO.FULL_NAME,
    images: [
      {
        url: EXTERNAL_URLS.OG_IMAGE,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.FULL_NAME} - ${PERSONAL_INFO.TITLE}`,
    description: `The personal website and portfolio of ${PERSONAL_INFO.FULL_NAME}, a passionate software engineer.`,
    creator: PERSONAL_INFO.TWITTER_HANDLE,
    images: [EXTERNAL_URLS.OG_IMAGE],
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
} as const;
