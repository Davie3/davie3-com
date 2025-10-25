import { TIMEZONE } from '@/constants/date-constants';

/**
 * Formats a timestamp for email notifications with timezone support.
 */
export const formatEmailTimestamp = (
  date: Date = new Date(),
  timeZone = TIMEZONE.PACIFIC_NAME,
): string => {
  return date.toLocaleString('en-US', {
    timeZone,
    dateStyle: 'full',
    timeStyle: 'short',
  });
};

/**
 * Helper function to create Pacific timezone Date objects
 */
export const createPacificDate = (dateString: string): Date => {
  return new Date(dateString + `T00:00:00${TIMEZONE.PACIFIC_OFFSET}`);
};
