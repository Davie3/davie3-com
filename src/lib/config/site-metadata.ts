import type { Metadata } from 'next';
import { PERSONAL_INFO } from '../../constants/personal-info';
import { EXTERNAL_URLS } from '../../constants/url-constants';

/**
 * Site metadata configuration constants for the website.
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

export const PAGE_METADATA = {
  ABOUT: {
    title: 'About | David Griffin - Software Developer & Tech Enthusiast',
    description:
      "Learn about David Griffin's experience in system administration, software development, and cloud technologies including AWS, Terraform, and Okta.",
    keywords:
      'David Griffin, software developer, system administrator, AWS, Terraform, Okta, IT professional',
  },
  CONTACT: {
    title: 'Contact | David Griffin - Get In Touch',
    description:
      'Get in touch with David Griffin for collaboration opportunities, technical consulting, or general inquiries.',
    keywords:
      'contact David Griffin, collaboration, technical consulting, software development',
  },
  PORTFOLIO: {
    title: 'Portfolio | David Griffin - Software Projects & GitHub',
    description:
      "Explore David Griffin's public software projects and GitHub repositories showcasing expertise in various technologies.",
    keywords:
      'David Griffin portfolio, GitHub projects, software development, open source',
  },
} as const;
