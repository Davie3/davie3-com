import {
  PERSONAL_INFO,
  PROFESSIONAL_TITLES,
  TECHNOLOGIES,
} from '@/constants/shared';

/**
 * SEO and Search Optimization Configuration
 */

/**
 * Technology keywords for SEO (flattened for search optimization)
 */
const TECHNOLOGY_KEYWORDS = [
  ...TECHNOLOGIES.CLOUD,
  ...TECHNOLOGIES.INFRASTRUCTURE,
  ...TECHNOLOGIES.IDENTITY,
  ...TECHNOLOGIES.CDN,
  ...TECHNOLOGIES.AI,
  ...TECHNOLOGIES.EMERGING,
  ...TECHNOLOGIES.DEVELOPMENT,
] as const;

/**
 * SEO keywords organized by category
 */
const SEO_KEYWORDS = {
  PROFESSIONAL: [
    PERSONAL_INFO.FULL_NAME,
    PROFESSIONAL_TITLES.CURRENT,
    'Twitch',
    ...TECHNOLOGIES.LANGUAGES,
    ...TECHNOLOGIES.FRONTEND,
  ],
  TECHNOLOGY: TECHNOLOGY_KEYWORDS,
  BRANDING: [
    PERSONAL_INFO.NICKNAME.toLowerCase(),
    PERSONAL_INFO.TWITTER_HANDLE.replace('@', ''),
    'software development',
    'cloud architecture',
    'modern web development',
    'technical consulting',
  ],
} as const;

/**
 * Combined keyword arrays for different page types
 */
export const COMBINED_KEYWORDS = {
  HOME: [
    ...SEO_KEYWORDS.PROFESSIONAL,
    ...SEO_KEYWORDS.TECHNOLOGY,
    ...SEO_KEYWORDS.BRANDING,
  ],
  ABOUT: [...SEO_KEYWORDS.PROFESSIONAL, ...SEO_KEYWORDS.TECHNOLOGY],
  CONTACT: [
    ...SEO_KEYWORDS.PROFESSIONAL,
    ...SEO_KEYWORDS.BRANDING,
    'collaboration',
    'technical consulting',
  ],
  PORTFOLIO: [
    ...SEO_KEYWORDS.PROFESSIONAL,
    ...SEO_KEYWORDS.TECHNOLOGY,
    'GitHub',
    'open source',
    'projects',
  ],
} as const;

/**
 * SEO and structured data constants
 */
export const SEO_DATA = {
  ALTERNATE_NAMES: [PERSONAL_INFO.NICKNAME, PERSONAL_INFO.ALTERNATE_NICKNAME],
  WORKS_FOR: {
    name: 'Twitch',
    url: 'https://www.twitch.tv',
  },
  KNOWS_ABOUT: [
    ...TECHNOLOGIES.LANGUAGES,
    ...TECHNOLOGIES.FRONTEND,
    ...TECHNOLOGIES.AI,
    ...TECHNOLOGIES.EMERGING,
    ...TECHNOLOGIES.CLOUD,
    ...TECHNOLOGIES.INFRASTRUCTURE,
    ...TECHNOLOGIES.IDENTITY,
    ...TECHNOLOGIES.CDN,
    ...TECHNOLOGIES.DEVELOPMENT,
    ...TECHNOLOGIES.DEVELOPMENT_EXTENDED,
    ...TECHNOLOGIES.CONTENT,
    ...TECHNOLOGIES.GENERAL,
  ],
} as const;

export const PAGE_METADATA = {
  PRIVACY: {
    title: 'Privacy Policy | David Griffin',
    description:
      'Privacy policy for davie3.com - Learn how I collect, use, and protect your personal information.',
  },
} as const;
