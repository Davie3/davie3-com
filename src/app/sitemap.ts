import type { MetadataRoute } from 'next';
import { PAGE_LAST_MODIFIED } from '../constants/site-metadata';
import { EXTERNAL_URLS } from '../constants/urls';
import { createPacificDate } from '../lib/utils/date-utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = EXTERNAL_URLS.MAIN || 'https://davie3.com';

  return [
    {
      url: baseUrl,
      lastModified: createPacificDate(PAGE_LAST_MODIFIED.HOME),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: createPacificDate(PAGE_LAST_MODIFIED.ABOUT),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: createPacificDate(PAGE_LAST_MODIFIED.PORTFOLIO),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: createPacificDate(PAGE_LAST_MODIFIED.PRIVACY),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: createPacificDate(PAGE_LAST_MODIFIED.CONTACT),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
