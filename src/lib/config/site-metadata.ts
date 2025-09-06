import type { Metadata } from 'next';
import {
  PERSONAL_INFO,
  PAGE_DESCRIPTIONS,
  PROFESSIONAL_TITLES,
} from '../../constants/shared';
import { EXTERNAL_URLS } from '../../constants/urls';
import { COMBINED_KEYWORDS } from './seo-config';

/**
 * Site metadata configuration constants for the website.
 */
export const SITE_METADATA: Metadata = {
  title: {
    default: `${PERSONAL_INFO.FULL_NAME} - ${PROFESSIONAL_TITLES.CURRENT}`,
    template: `%s | ${PERSONAL_INFO.FULL_NAME}`,
  },
  description: PAGE_DESCRIPTIONS.SITE_EXTENDED,
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
    description: PAGE_DESCRIPTIONS.SITE_EXTENDED,
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
    description: PAGE_DESCRIPTIONS.PRIMARY_DESCRIPTION,
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
} as const;

export const PAGE_METADATA = {
  ABOUT: {
    title: `About | ${PERSONAL_INFO.FULL_NAME} - ${PROFESSIONAL_TITLES.CURRENT}`,
    description: PAGE_DESCRIPTIONS.PROFESSIONAL_SUMMARY,
    keywords: [...COMBINED_KEYWORDS.ABOUT],
  },
  CONTACT: {
    title: `Contact | ${PERSONAL_INFO.FULL_NAME} - Get In Touch`,
    description: PAGE_DESCRIPTIONS.CONTACT,
    keywords: [...COMBINED_KEYWORDS.CONTACT],
  },
  PORTFOLIO: {
    title: `Portfolio | ${PERSONAL_INFO.FULL_NAME} - Software Projects & GitHub`,
    description: PAGE_DESCRIPTIONS.PORTFOLIO,
    keywords: [...COMBINED_KEYWORDS.PORTFOLIO],
  },
};
