/**
 * URL constants and collections
 * External URLs, internal routes, and URL collections
 */

/**
 * All external URLs combined for easy access
 */
export const EXTERNAL_URLS = {
  // Site-specific URLs
  MAIN: 'https://davie3.com',
  OG_IMAGE: 'https://davie3.com/images/profile.png',

  // Content creation platform URLs
  YOUTUBE_MAIN: 'https://www.youtube.com/Davie3TV',
  YOUTUBE_TECH: 'https://www.youtube.com/Davie3Tech',
  YOUTUBE_GAMES: 'https://www.youtube.com/Davie3Games',
  YOUTUBE_VLOG: 'https://www.youtube.com/ItsDavie3',
  TWITCH: 'https://www.twitch.tv/Davie3',

  // Social media platform URLs
  BLUESKY: 'https://bsky.app/profile/itsdavie3.bsky.social',
  FACEBOOK: 'https://www.facebook.com/Davie3.Griffin',
  GITHUB_PROFILE: 'https://github.com/davie3',
  INSTAGRAM: 'https://instagram.com/itsdavie3',
  LINKEDIN: 'https://www.linkedin.com/in/davie3',
  TWITTER_OLD: 'https://twitter.com/ItsDavie3',
  X_TWITTER: 'https://x.com/itsdavie3',
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
 * Computed collection of all platform URLs
 */
export const ALL_PLATFORMS = [
  // Social media platforms
  EXTERNAL_URLS.BLUESKY,
  EXTERNAL_URLS.FACEBOOK,
  EXTERNAL_URLS.GITHUB_PROFILE,
  EXTERNAL_URLS.INSTAGRAM,
  EXTERNAL_URLS.LINKEDIN,
  EXTERNAL_URLS.TWITTER_OLD,
  EXTERNAL_URLS.X_TWITTER,

  // Content creation platforms
  EXTERNAL_URLS.YOUTUBE_MAIN,
  EXTERNAL_URLS.YOUTUBE_TECH,
  EXTERNAL_URLS.YOUTUBE_GAMES,
  EXTERNAL_URLS.YOUTUBE_VLOG,
  EXTERNAL_URLS.TWITCH,
] as const;
