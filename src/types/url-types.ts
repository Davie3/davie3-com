/**
 * Types for URL mapping and redirect functionality
 */

export interface UrlMapping {
  readonly source: string;
  readonly destination: string;
  readonly permanent: boolean;
}
