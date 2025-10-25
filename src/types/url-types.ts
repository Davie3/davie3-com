/**
 * Types for URL mapping and redirect functionality
 */

export type UrlMapping = {
  readonly source: string;
  readonly destination: string;
  readonly permanent: boolean;
};
