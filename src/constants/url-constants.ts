/**
 * URL constants organized by category.
 */

/**
 * External URLs for third-party services and APIs.
 */
export const EXTERNAL_URLS = {
  // GitHub
  GITHUB_PROFILE: 'https://github.com/davie3',
  GITHUB_API:
    'https://api.github.com/search/repositories?q=user:davie3+fork:false&sort=stars&direction=desc',

  // Social Media
  LINKEDIN: 'https://www.linkedin.com/in/davie3',
  TWITCH: 'https://www.twitch.tv/davie3',
  X_TWITTER: 'https://x.com/itsdavie3/',
  INSTAGRAM: 'https://www.instagram.com/itsdavie3/',
  BLUESKY: 'https://bsky.app/profile/davie3.com',

  // Site Assets
  SITE_URL: 'https://davie3.com',
  OG_IMAGE: 'https://davie3.com/og-image.png',
} as const;

/**
 * Internal application routes.
 */
export const INTERNAL_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PORTFOLIO: '/portfolio',
  API_CONTACT: '/api/contact',
} as const;
