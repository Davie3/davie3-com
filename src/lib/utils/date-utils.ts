/**
 * Formats a date string to a readable format.
 */
export const formatDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

/**
 * Formats a timestamp for email notifications with timezone support.
 */
export const formatEmailTimestamp = (
  date: Date = new Date(),
  timeZone: string = 'America/Los_Angeles',
): string => {
  return date.toLocaleString('en-US', {
    timeZone,
    dateStyle: 'full',
    timeStyle: 'short',
  });
};

/**
 * Timezone configuration
 */
export const TIMEZONE = {
  PACIFIC_OFFSET: '-08:00',
  PACIFIC_NAME: 'America/Los_Angeles',
} as const;

/**
 * Helper function to create Pacific timezone Date objects
 */
export const createPacificDate = (dateString: string): Date => {
  return new Date(dateString + `T00:00:00${TIMEZONE.PACIFIC_OFFSET}`);
};
