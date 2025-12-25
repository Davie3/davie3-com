/**
 * Error pages configuration
 * Content and settings for error pages (404, 500, etc.)
 */

export const NOT_FOUND_PAGE = {
  TITLE: 'Page Not Found',
  DESCRIPTION:
    "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
  HEADING_404: '404',
  HEADING_SIZE: {
    MOBILE: '150px',
    DESKTOP: '200px',
  },
  HELPFUL_LINKS_LABEL: 'Here are some helpful links:',
  NAVIGATION_LINKS: [
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ],
  BUTTONS: {
    HOME: 'Go Home',
    BACK: 'Go Back',
  },
} as const;
