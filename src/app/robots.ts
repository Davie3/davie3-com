import type { MetadataRoute } from 'next';

import { EXTERNAL_URLS } from '@/constants/url-constants';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = EXTERNAL_URLS.SITE_URL || 'https://davie3.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
