/**
 * Site configuration constants
 * URLs, routes, form schemas, and UI component configurations
 */

import type { UrlMapping } from '../types/url-types';
import { PERSONAL_INFO, PROFESSIONAL_TITLES, TECHNOLOGIES } from './shared';

/**
 * Site-specific URLs
 */
export const SITE_URLS = {
  MAIN: 'https://davie3.com',
  OG_IMAGE: 'https://davie3.com/images/profile.png',
} as const;

/**
 * Content creation platform URLs
 */
export const CONTENT_URLS = {
  YOUTUBE_MAIN: 'https://www.youtube.com/Davie3TV',
  YOUTUBE_TECH: 'https://www.youtube.com/Davie3Tech',
  YOUTUBE_GAMES: 'https://www.youtube.com/Davie3Games',
  YOUTUBE_VLOG: 'https://www.youtube.com/ItsDavie3',
  TWITCH: 'https://www.twitch.tv/Davie3',
} as const;

/**
 * Social media platform URLs
 */
export const SOCIAL_URLS = {
  BLUESKY: 'https://bsky.app/profile/davie3.com',
  FACEBOOK: 'https://www.facebook.com/Davie3.Griffin',
  GITHUB_PROFILE: 'https://github.com/davie3',
  INSTAGRAM: 'https://instagram.com/itsdavie3',
  LINKEDIN: 'https://www.linkedin.com/in/davie3',
  TWITTER_OLD: 'https://twitter.com/ItsDavie3',
  X_TWITTER: 'https://x.com/itsdavie3',
} as const;

/**
 * All external URLs combined for easy access
 */
export const EXTERNAL_URLS = {
  ...SITE_URLS,
  ...CONTENT_URLS,
  ...SOCIAL_URLS,
} as const;

/**
 * Internal application routes
 */
export const INTERNAL_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PORTFOLIO: '/portfolio',
  PRIVACY: '/privacy',
  API_CONTACT: '/api/contact',
} as const;

/**
 * URL collections for different contexts
 */
export const URL_COLLECTIONS = {
  SOCIAL: Object.values(SOCIAL_URLS),
  CONTENT: Object.values(CONTENT_URLS),
  PROFESSIONAL: [
    SOCIAL_URLS.X_TWITTER,
    SOCIAL_URLS.LINKEDIN,
    SOCIAL_URLS.GITHUB_PROFILE,
  ],
} as const;

/**
 * Computed collection of all platform URLs
 */
export const ALL_PLATFORMS = [
  ...URL_COLLECTIONS.SOCIAL,
  ...URL_COLLECTIONS.CONTENT,
] as const;

/**
 * Extended URL collections including computed values
 */
export const URL_COLLECTIONS_EXTENDED = {
  ...URL_COLLECTIONS,
  ALL_PLATFORMS,
} as const;

/**
 * URL mappings for redirects from old Squarespace site
 */
export const URL_MAPPINGS: readonly UrlMapping[] = [
  { source: '/resume', destination: '/', permanent: true },
  { source: '/photos', destination: '/', permanent: true },
  { source: '/videos', destination: '/', permanent: true },
  { source: '/brb', destination: '/', permanent: true },
  { source: '/blog', destination: 'http://blog.davie3.com', permanent: true },
  { source: '/tech', destination: 'http://tech.davie3.com', permanent: true },
  { source: '/read-me', destination: '/about', permanent: true },
  { source: '/davie3', destination: '/', permanent: true },
  { source: '/lemons-and-limes', destination: '/', permanent: true },
  { source: '/links', destination: '/', permanent: true },
  { source: '/home', destination: '/', permanent: true },
] as const;

/**
 * Helper functions for URL mappings
 */
export const getSourcePaths = (): string[] => {
  return URL_MAPPINGS.map((mapping) => mapping.source);
};

export const findMappingBySource = (source: string): UrlMapping | undefined => {
  return URL_MAPPINGS.find((mapping) => mapping.source === source);
};

// Contact form schema moved to src/types/form-types.ts

/**
 * Timezone configuration
 */
export const TIMEZONE = {
  PACIFIC_OFFSET: '-08:00',
  PACIFIC_NAME: 'America/Los_Angeles',
} as const;

/**
 * Page modification dates for sitemap
 */
export const PAGE_LAST_MODIFIED = {
  HOME: '2025-09-01',
  ABOUT: '2025-09-01',
  PORTFOLIO: '2025-09-01',
  PRIVACY: '2025-09-01',
  CONTACT: '2025-09-01',
} as const;

/**
 * Helper function to create Pacific timezone Date objects
 */
export const createPacificDate = (dateString: string): Date => {
  return new Date(dateString + `T00:00:00${TIMEZONE.PACIFIC_OFFSET}`);
};

export type PageKey = keyof typeof PAGE_LAST_MODIFIED;

/**
 * SEO and Search Optimization
 */

/**
 * Technology keywords for SEO (flattened for search optimization)
 */
export const TECHNOLOGY_KEYWORDS = [
  ...TECHNOLOGIES.CLOUD,
  ...TECHNOLOGIES.INFRASTRUCTURE,
  ...TECHNOLOGIES.IDENTITY,
  ...TECHNOLOGIES.CDN,
  ...TECHNOLOGIES.EMERGING,
  ...TECHNOLOGIES.DEVELOPMENT,
] as const;

/**
 * SEO keywords organized by category
 */
export const SEO_KEYWORDS = {
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

// PAGE_DESCRIPTIONS moved to shared.ts for centralized management
