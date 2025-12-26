import { SITEMAP_CONFIG } from '../constants/config/seo-automation-config';
import { PAGE_LAST_MODIFIED } from '../constants/site-metadata';
import { EXTERNAL_URLS } from '../constants/urls';
import { createPacificDate } from '../lib/utils/date-utils';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = EXTERNAL_URLS.MAIN;

  return [
    {
      url: baseUrl,
      lastModified: createPacificDate(PAGE_LAST_MODIFIED.HOME),
      changeFrequency: SITEMAP_CONFIG.HOME.changeFrequency,
      priority: SITEMAP_CONFIG.HOME.priority,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: createPacificDate(PAGE_LAST_MODIFIED.ABOUT),
      changeFrequency: SITEMAP_CONFIG.ABOUT.changeFrequency,
      priority: SITEMAP_CONFIG.ABOUT.priority,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: createPacificDate(PAGE_LAST_MODIFIED.PORTFOLIO),
      changeFrequency: SITEMAP_CONFIG.PORTFOLIO.changeFrequency,
      priority: SITEMAP_CONFIG.PORTFOLIO.priority,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: createPacificDate(PAGE_LAST_MODIFIED.PRIVACY),
      changeFrequency: SITEMAP_CONFIG.PRIVACY.changeFrequency,
      priority: SITEMAP_CONFIG.PRIVACY.priority,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: createPacificDate(PAGE_LAST_MODIFIED.CONTACT),
      changeFrequency: SITEMAP_CONFIG.CONTACT.changeFrequency,
      priority: SITEMAP_CONFIG.CONTACT.priority,
    },
  ];
}
