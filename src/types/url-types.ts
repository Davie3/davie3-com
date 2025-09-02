/**
 * Types for URL mapping and redirect functionality
 */

export type RedirectType = 'permanent' | 'temporary';

export type UrlMapping = {
  readonly source: string;
  readonly destination: string;
  readonly permanent: boolean;
};

export type RedirectConfig = {
  readonly source: string;
  readonly destination: string;
  readonly permanent: boolean;
};
