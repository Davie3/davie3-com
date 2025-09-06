import type { UrlMapping } from '../../types/url-types';

/**
 * URL mappings for redirects from old Squarespace site
 */
export const URL_MAPPINGS: readonly UrlMapping[] = [
  { source: '/resume', destination: '/', permanent: true },
  { source: '/photos', destination: '/', permanent: true },
  { source: '/videos', destination: '/', permanent: true },
  { source: '/brb', destination: '/', permanent: true },
  { source: '/blog', destination: 'http://blog.davie3.com', permanent: true },
  { source: '/tech', destination: 'http://tech.davie3.com', permanent: true },
  { source: '/read-me', destination: '/about', permanent: true },
  { source: '/davie3', destination: '/', permanent: true },
  { source: '/lemons-and-limes', destination: '/', permanent: true },
  { source: '/links', destination: '/', permanent: true },
  { source: '/home', destination: '/', permanent: true },
] as const;

/**
 * Helper functions for URL mappings
 */
export const getSourcePaths = (): string[] => {
  return URL_MAPPINGS.map((mapping) => mapping.source);
};

export const findMappingBySource = (source: string): UrlMapping | undefined => {
  return URL_MAPPINGS.find((mapping) => mapping.source === source);
};
