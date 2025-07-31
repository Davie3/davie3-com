/**
 * URL constants for external links and API endpoints.
 */
export const EXTERNAL_URLS = {
  GITHUB_PROFILE: 'https://github.com/davie3',
  GITHUB_API:
    'https://api.github.com/search/repositories?q=user:davie3+fork:false&sort=stars&direction=desc',
  SITE_URL: 'https://davie3.com',
  OG_IMAGE: 'https://davie3.com/og-image.png',
} as const;

export const INTERNAL_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PORTFOLIO: '/portfolio',
  API_CONTACT: '/api/contact',
} as const;
