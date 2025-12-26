import { ROBOTS_CONFIG } from '../constants/config/seo-automation-config';
import { EXTERNAL_URLS } from '../constants/urls';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = EXTERNAL_URLS.MAIN;

  return {
    rules: {
      userAgent: ROBOTS_CONFIG.USER_AGENT,
      allow: ROBOTS_CONFIG.ALLOW,
      disallow: [...ROBOTS_CONFIG.DISALLOW],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
