import { COMBINED_KEYWORDS } from '@/constants/config/seo-config';
import { CONTACT_CONTENT } from '@/constants/pages/contact-page';
import { PORTFOLIO_CONTENT } from '@/constants/pages/portfolio-page';
import { PERSONAL_INFO, PAGE_DESCRIPTIONS, PROFESSIONAL_TITLES } from '@/constants/shared';
import { EXTERNAL_URLS } from '@/constants/urls';

import type { Metadata } from 'next';

/**
 * Site metadata for SEO (titles, descriptions, OpenGraph, Twitter, etc.).
 * Note: Descriptions here should use SEO-focused strings in PAGE_DESCRIPTIONS.
 * Page body copy should use the content-only keys (e.g., ABOUT_*, PORTFOLIO_*).
 */
export const SITE_METADATA: Metadata = {
  title: {
    default: `${PERSONAL_INFO.FULL_NAME} - ${PROFESSIONAL_TITLES.CURRENT}`,
    template: `%s | ${PERSONAL_INFO.FULL_NAME}`,
  },
  description: PAGE_DESCRIPTIONS.SEO_DESCRIPTION,
  keywords: [...COMBINED_KEYWORDS.HOME],
  authors: [{ name: PERSONAL_INFO.FULL_NAME }],
  creator: PERSONAL_INFO.FULL_NAME,
  publisher: PERSONAL_INFO.FULL_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(EXTERNAL_URLS.MAIN),
  alternates: {
    canonical: EXTERNAL_URLS.MAIN,
  },
  openGraph: {
    title: `${PERSONAL_INFO.FULL_NAME} - ${PROFESSIONAL_TITLES.CURRENT}`,
    description: PAGE_DESCRIPTIONS.OPENGRAPH_DESCRIPTION,
    url: EXTERNAL_URLS.MAIN,
    siteName: `${PERSONAL_INFO.FULL_NAME} - ${PERSONAL_INFO.NICKNAME}`,
    images: [
      {
        url: EXTERNAL_URLS.OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.FULL_NAME} - ${PROFESSIONAL_TITLES.CURRENT}`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.FULL_NAME} - ${PROFESSIONAL_TITLES.CURRENT}`,
    description: PAGE_DESCRIPTIONS.OPENGRAPH_DESCRIPTION,
    creator: PERSONAL_INFO.TWITTER_HANDLE,
    site: PERSONAL_INFO.TWITTER_HANDLE,
    images: {
      url: EXTERNAL_URLS.OG_IMAGE,
      alt: `${PERSONAL_INFO.FULL_NAME} - ${PROFESSIONAL_TITLES.CURRENT}`,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '-jmlJXBZ10A9sHmUiN_SW_Ae2krsJdfzwhw25nRityk',
    other: {
      'msvalidate.01': '36A7682CD26F879CA3BEC75EDA79B8D2',
      'dailymotion-domain-verification': 'dmx2g5c3lage9isw5',
    },
  },
  icons: [
    {
      rel: 'icon',
      url: '/icons/favicon.ico',
      sizes: 'any',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/icons/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/icons/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/icons/apple-touch-icon.png',
    },
  ],
} as const;

export const PAGE_METADATA = {
  ABOUT: {
    title: `About | ${PERSONAL_INFO.FULL_NAME} - ${PROFESSIONAL_TITLES.CURRENT}`,
    description: PAGE_DESCRIPTIONS.ABOUT_PAGE_INTRO,
    keywords: [...COMBINED_KEYWORDS.ABOUT],
  },
  CONTACT: {
    title: `Contact | ${PERSONAL_INFO.FULL_NAME} - Get In Touch`,
    description: CONTACT_CONTENT.PAGE_INTRO,
    keywords: [...COMBINED_KEYWORDS.CONTACT],
  },
  PORTFOLIO: {
    title: `Portfolio | ${PERSONAL_INFO.FULL_NAME} - Software Projects & GitHub`,
    description: PORTFOLIO_CONTENT.PAGE_INTRO,
    keywords: [...COMBINED_KEYWORDS.PORTFOLIO],
  },
};
