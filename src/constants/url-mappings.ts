/**
 * URL mapping configuration for redirects
 * Add or remove mappings here to manage site redirects
 */

import type { UrlMapping } from '../types/url-types';

/**
 * URL mappings from old Squarespace site
 * Each mapping defines a redirect from source to destination
 */
export const URL_MAPPINGS: readonly UrlMapping[] = [
  // Legacy page redirects to home
  {
    source: '/resume',
    destination: '/',
    permanent: true,
  },
  {
    source: '/photos',
    destination: '/',
    permanent: true,
  },
  {
    source: '/videos',
    destination: '/',
    permanent: true,
  },
  {
    source: '/brb',
    destination: '/',
    permanent: true,
  },

  // External blog redirects
  {
    source: '/blog',
    destination: 'http://blog.davie3.com',
    permanent: true,
  },
  {
    source: '/tech',
    destination: 'http://tech.davie3.com',
    permanent: true,
  },

  // Page redirects
  {
    source: '/read-me',
    destination: '/about',
    permanent: true,
  },

  // Old Squarespace pages from sitemap
  {
    source: '/davie3',
    destination: '/',
    permanent: true,
  },
  {
    source: '/lemons-and-limes',
    destination: '/',
    permanent: true,
  },
  {
    source: '/links',
    destination: '/',
    permanent: true,
  },
  {
    source: '/home',
    destination: '/',
    permanent: true,
  },
] as const;

/**
 * Helper function to get all source paths
 */
export const getSourcePaths = (): string[] => {
  return URL_MAPPINGS.map((mapping) => mapping.source);
};

/**
 * Helper function to find mapping by source path
 */
export const findMappingBySource = (source: string): UrlMapping | undefined => {
  return URL_MAPPINGS.find((mapping) => mapping.source === source);
};
