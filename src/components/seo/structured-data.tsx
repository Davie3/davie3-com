import Script from 'next/script';
import type { JSX } from 'react';
import {
  PERSONAL_INFO,
  PAGE_DESCRIPTIONS,
  PROFESSIONAL_TITLES,
  SEO_DATA,
} from '@/constants/shared';
import { EXTERNAL_URLS, URL_COLLECTIONS } from '@/constants/site-config';

type StructuredDataProps = {
  readonly pageType?: 'website' | 'person' | 'article';
  readonly title?: string;
  readonly description?: string;
  readonly url?: string;
};

/**
 * Structured Data (JSON-LD) component for enhanced SEO
 */
export function StructuredData({
  pageType = 'website',
  title,
  description,
  url = EXTERNAL_URLS.MAIN,
}: StructuredDataProps): JSX.Element {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': pageType === 'person' ? 'Person' : 'WebSite',
    name:
      title || `${PERSONAL_INFO.FULL_NAME} - ${PROFESSIONAL_TITLES.CURRENT}`,
    description: description || PAGE_DESCRIPTIONS.PROFESSIONAL_SUMMARY,
    url,
    author: {
      '@type': 'Person',
      name: PERSONAL_INFO.FULL_NAME,
      url: EXTERNAL_URLS.MAIN,
      sameAs: URL_COLLECTIONS.ALL_PLATFORMS,
    },
  };

  const personStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.FULL_NAME,
    alternateName: SEO_DATA.ALTERNATE_NAMES,
    description: PAGE_DESCRIPTIONS.PROFESSIONAL_SUMMARY,
    url: EXTERNAL_URLS.MAIN,
    image: EXTERNAL_URLS.OG_IMAGE,
    jobTitle: PROFESSIONAL_TITLES.CURRENT,
    worksFor: {
      '@type': 'Organization',
      ...SEO_DATA.WORKS_FOR,
    },
    knowsAbout: SEO_DATA.KNOWS_ABOUT,
    sameAs: URL_COLLECTIONS.ALL_PLATFORMS,
  };

  const structuredData =
    pageType === 'person' ? personStructuredData : baseStructuredData;

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
