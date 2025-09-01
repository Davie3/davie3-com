import Script from 'next/script';
import type { JSX } from 'react';
import { PERSONAL_INFO } from '@/constants/personal-info';
import { SEO_DESCRIPTIONS } from '@/constants/seo-descriptions';
import { EXTERNAL_URLS, SOCIAL_URL_ARRAYS } from '@/constants/urls';

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
  url = EXTERNAL_URLS.SITE_URL,
}: StructuredDataProps): JSX.Element {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': pageType === 'person' ? 'Person' : 'WebSite',
    name: title || `${PERSONAL_INFO.FULL_NAME} - ${PERSONAL_INFO.TITLE}`,
    description: description || SEO_DESCRIPTIONS.SITE_EXTENDED,
    url,
    author: {
      '@type': 'Person',
      name: PERSONAL_INFO.FULL_NAME,
      url: EXTERNAL_URLS.SITE_URL,
      sameAs: SOCIAL_URL_ARRAYS.ALL_PLATFORMS,
    },
  };

  const personStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.FULL_NAME,
    alternateName: ['Davie3', 'ItsDavie3'],
    description: SEO_DESCRIPTIONS.PROFESSIONAL_SUMMARY,
    url: EXTERNAL_URLS.SITE_URL,
    image: EXTERNAL_URLS.OG_IMAGE,
    jobTitle: PERSONAL_INFO.TITLE,
    worksFor: {
      '@type': 'Organization',
      name: 'Twitch',
      url: 'https://www.twitch.tv',
    },
    knowsAbout: [
      'TypeScript',
      'Node.js',
      'React.js',
      'AWS',
      'AWS CloudFormation',
      'Terraform',
      'Generative AI',
      'System Administration',
      'Cloud Architecture',
      'Software Development',
      'Web Development',
      'Content Creation',
      'YouTube',
      'Gaming',
      'Technology',
    ],
    sameAs: SOCIAL_URL_ARRAYS.ALL_PLATFORMS,
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
