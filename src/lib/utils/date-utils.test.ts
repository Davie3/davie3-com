import { describe, expect, it } from 'vitest';

import { createPacificDate, formatEmailTimestamp } from './date-utils';

describe('formatEmailTimestamp', () => {
  it('formats a fixed date in the Pacific timezone with full date + short time', () => {
    // 2024-01-15 18:30 UTC -> 10:30 AM PST
    const date = new Date('2024-01-15T18:30:00Z');
    const formatted = formatEmailTimestamp(date);
    expect(formatted).toContain('2024');
    expect(formatted).toContain('January');
    expect(formatted).toMatch(/10:30\s?AM/);
  });

  it('returns a non-empty string for the current date by default', () => {
    expect(formatEmailTimestamp().length).toBeGreaterThan(0);
  });
});

describe('createPacificDate', () => {
  it('produces a valid Date from a YYYY-MM-DD string', () => {
    const date = createPacificDate('2024-06-15');
    expect(date).toBeInstanceOf(Date);
    expect(Number.isNaN(date.getTime())).toBe(false);
  });
});
