import type { MetadataRoute } from 'next';
import { EXTERNAL_URLS } from '../constants/urls';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = EXTERNAL_URLS.MAIN;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
