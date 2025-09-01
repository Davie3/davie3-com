/**
 * Centralized page modification dates and timezone configuration
 * Update these dates when content changes to keep sitemap and page content in sync
 */

export const TIMEZONE = {
  PACIFIC_OFFSET: '-08:00',
  PACIFIC_NAME: 'America/Los_Angeles',
} as const;

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
