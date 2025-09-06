import type { UrlMapping } from '../types/url-types';
import {
  URL_MAPPINGS,
  findMappingBySource,
} from '../lib/config/redirect-config';

/**
 * URL mapping utilities for managing redirects
 */

/**
 * Add a new URL mapping (for development/testing)
 * In production, add directly to URL_MAPPINGS constant
 */
export const createUrlMapping = (
  source: string,
  destination: string,
  permanent: boolean = true,
): UrlMapping => ({
  source,
  destination,
  permanent,
});

/**
 * Validate a URL mapping
 */
export const validateUrlMapping = (mapping: UrlMapping): boolean => {
  const { source, destination } = mapping;

  // Basic validation
  if (!source || !destination) return false;
  if (!source.startsWith('/')) return false;

  // Check for duplicates
  const existing = findMappingBySource(source);
  return !existing;
};

/**
 * Get all mappings grouped by type
 */
export const getMappingsByType = () => {
  const internal: UrlMapping[] = [];
  const external: UrlMapping[] = [];

  URL_MAPPINGS.forEach((mapping) => {
    if (mapping.destination.startsWith('http')) {
      external.push(mapping);
    } else {
      internal.push(mapping);
    }
  });

  return { internal, external };
};

/**
 * Generate Next.js redirect configuration
 */
export const generateRedirectConfig = () => {
  return URL_MAPPINGS.map((mapping) => ({
    source: mapping.source,
    destination: mapping.destination,
    permanent: mapping.permanent,
  }));
};
