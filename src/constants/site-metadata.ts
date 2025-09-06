/**
 * Site metadata constants
 * Page modification dates and metadata-related constants
 */

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

export type PageKey = keyof typeof PAGE_LAST_MODIFIED;
