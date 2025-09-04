import type { Metadata } from 'next';
import { PERSONAL_INFO } from '../../constants/personal-info';
import { EXTERNAL_URLS } from '../../constants/urls';
import {
  SEO_DESCRIPTIONS,
  COMBINED_KEYWORDS,
} from '../../constants/seo-descriptions';

/**
 * Site metadata configuration constants for the website.
 */
export const SITE_METADATA: Metadata = {
  title: {
    default: `${PERSONAL_INFO.FULL_NAME} - ${PERSONAL_INFO.TITLE}`,
    template: `%s | ${PERSONAL_INFO.FULL_NAME}`,
  },
  description: SEO_DESCRIPTIONS.SITE_EXTENDED,
  keywords: COMBINED_KEYWORDS.HOME,
  authors: [{ name: PERSONAL_INFO.FULL_NAME }],
  creator: PERSONAL_INFO.FULL_NAME,
  publisher: PERSONAL_INFO.FULL_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(EXTERNAL_URLS.SITE_URL),
  alternates: {
    canonical: EXTERNAL_URLS.SITE_URL,
  },
  openGraph: {
    title: `${PERSONAL_INFO.FULL_NAME} - ${PERSONAL_INFO.TITLE}`,
    description: SEO_DESCRIPTIONS.SITE_EXTENDED,
    url: EXTERNAL_URLS.SITE_URL,
    siteName: `${PERSONAL_INFO.FULL_NAME} - ${PERSONAL_INFO.NICKNAME}`,
    images: [
      {
        url: EXTERNAL_URLS.OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.FULL_NAME} - ${PERSONAL_INFO.TITLE}`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.FULL_NAME} - ${PERSONAL_INFO.TITLE}`,
    description: SEO_DESCRIPTIONS.SITE_PRIMARY,
    creator: PERSONAL_INFO.TWITTER_HANDLE,
    site: PERSONAL_INFO.TWITTER_HANDLE,
    images: {
      url: EXTERNAL_URLS.OG_IMAGE,
      alt: `${PERSONAL_INFO.FULL_NAME} - ${PERSONAL_INFO.TITLE}`,
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
} as const;

export const PAGE_METADATA = {
  ABOUT: {
    title: `About | ${PERSONAL_INFO.FULL_NAME} - ${PERSONAL_INFO.TITLE}`,
    description: SEO_DESCRIPTIONS.PROFESSIONAL_SUMMARY,
    keywords: COMBINED_KEYWORDS.ABOUT,
  },
  CONTACT: {
    title: `Contact | ${PERSONAL_INFO.FULL_NAME} - Get In Touch`,
    description: SEO_DESCRIPTIONS.CONTACT_DESCRIPTION,
    keywords: COMBINED_KEYWORDS.CONTACT,
  },
  PORTFOLIO: {
    title: `Portfolio | ${PERSONAL_INFO.FULL_NAME} - Software Projects & GitHub`,
    description: SEO_DESCRIPTIONS.PORTFOLIO_DESCRIPTION,
    keywords: COMBINED_KEYWORDS.PORTFOLIO,
  },
} as const;
