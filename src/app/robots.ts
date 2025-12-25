import type { MetadataRoute } from 'next';
import { ROBOTS_CONFIG } from '../constants/config/seo-automation-config';
import { EXTERNAL_URLS } from '../constants/urls';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = EXTERNAL_URLS.MAIN || 'https://davie3.com';

  return {
    rules: {
      userAgent: ROBOTS_CONFIG.USER_AGENT,
      allow: ROBOTS_CONFIG.ALLOW,
      disallow: [...ROBOTS_CONFIG.DISALLOW],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
