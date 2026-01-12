/**
 * URL constants and collections
 * External URLs, internal routes, and URL collections
 */

/**
 * Site-specific URLs
 */
const SITE_URLS = {
  MAIN: 'https://davie3.com',
  OG_IMAGE: 'https://davie3.com/images/profile.png',
} as const;

/**
 * Content creation platform URLs
 */
const CONTENT_URLS = {
  YOUTUBE_MAIN: 'https://www.youtube.com/Davie3TV',
  YOUTUBE_TECH: 'https://www.youtube.com/Davie3Tech',
  YOUTUBE_GAMES: 'https://www.youtube.com/Davie3Games',
  YOUTUBE_VLOG: 'https://www.youtube.com/ItsDavie3',
  TWITCH: 'https://www.twitch.tv/Davie3',
} as const;

/**
 * Social media platform URLs
 */
const SOCIAL_URLS = {
  BLUESKY: 'https://bsky.app/profile/itsdavie3.bsky.social',
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
const URL_COLLECTIONS = {
  SOCIAL: Object.values(SOCIAL_URLS),
  CONTENT: Object.values(CONTENT_URLS),
  PROFESSIONAL: [SOCIAL_URLS.X_TWITTER, SOCIAL_URLS.LINKEDIN, SOCIAL_URLS.GITHUB_PROFILE],
} as const;

/**
 * Computed collection of all platform URLs
 */
export const ALL_PLATFORMS = [...URL_COLLECTIONS.SOCIAL, ...URL_COLLECTIONS.CONTENT] as const;
