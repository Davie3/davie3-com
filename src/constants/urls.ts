/**
 * Consolidated URL constants for the entire application.
 * Combines external URLs, social media URLs, and internal routes.
 */

/**
 * External URLs for third-party services and APIs
 */
export const EXTERNAL_URLS = {
  // Site Assets
  SITE_URL: 'https://davie3.com',
  OG_IMAGE: 'https://davie3.com/images/profile.png',

  // GitHub
  GITHUB_PROFILE: 'https://github.com/davie3',
  GITHUB_API:
    'https://api.github.com/search/repositories?q=user:davie3+fork:false&sort=stars&direction=desc',
} as const;

/**
 * Social media URLs organized by platform
 */
export const SOCIAL_URLS = {
  // Twitter/X
  TWITTER: 'https://twitter.com/ItsDavie3',
  X_TWITTER: 'https://x.com/itsdavie3/',

  // YouTube Channels
  YOUTUBE_DAVIE3TV: 'https://www.youtube.com/Davie3TV',
  YOUTUBE_DAVIE3TECH: 'https://www.youtube.com/Davie3Tech',
  YOUTUBE_DAVIE3GAMES: 'https://www.youtube.com/Davie3Games',
  YOUTUBE_ITSDAVIE3: 'https://www.youtube.com/ItsDavie3',

  // Other Platforms
  TWITCH: 'https://www.twitch.tv/Davie3',
  FACEBOOK: 'https://www.facebook.com/Davie3.Griffin',
  INSTAGRAM: 'https://instagram.com/itsdavie3',
  LINKEDIN: 'https://www.linkedin.com/in/davie3',
  BLUESKY: 'https://bsky.app/profile/davie3.com',
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
 * Organized arrays of social URLs for different contexts
 */
export const SOCIAL_URL_ARRAYS = {
  /**
   * All social media profiles for comprehensive SEO coverage
   */
  ALL_PLATFORMS: [
    SOCIAL_URLS.TWITTER,
    SOCIAL_URLS.X_TWITTER,
    SOCIAL_URLS.YOUTUBE_DAVIE3TV,
    SOCIAL_URLS.YOUTUBE_DAVIE3TECH,
    SOCIAL_URLS.YOUTUBE_DAVIE3GAMES,
    SOCIAL_URLS.YOUTUBE_ITSDAVIE3,
    SOCIAL_URLS.TWITCH,
    SOCIAL_URLS.FACEBOOK,
    SOCIAL_URLS.INSTAGRAM,
    SOCIAL_URLS.LINKEDIN,
    SOCIAL_URLS.BLUESKY,
  ],

  /**
   * Primary professional platforms
   */
  PROFESSIONAL: [
    SOCIAL_URLS.TWITTER,
    SOCIAL_URLS.X_TWITTER,
    SOCIAL_URLS.LINKEDIN,
  ],

  /**
   * Content creation platforms
   */
  CONTENT_CREATION: [
    SOCIAL_URLS.YOUTUBE_DAVIE3TV,
    SOCIAL_URLS.YOUTUBE_DAVIE3TECH,
    SOCIAL_URLS.YOUTUBE_DAVIE3GAMES,
    SOCIAL_URLS.YOUTUBE_ITSDAVIE3,
    SOCIAL_URLS.TWITCH,
  ],
} as const;
