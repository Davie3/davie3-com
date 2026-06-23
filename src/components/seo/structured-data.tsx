import { SEO_DATA } from '@/constants/config/seo-config';
import { PERSONAL_INFO, PAGE_DESCRIPTIONS, PROFESSIONAL_TITLES } from '@/constants/shared';
import { EXTERNAL_URLS, ALL_PLATFORMS } from '@/constants/urls';

import type { GitHubRepo } from '@/types/api-types';
import type { JSX } from 'react';

type GraphNode = Record<string, unknown>;

type StructuredDataProps = {
  readonly nodes?: readonly GraphNode[];
  readonly websiteVariant?: 'full' | 'slim';
  readonly includePerson?: boolean;
  readonly id?: string;
};

const ROOT = EXTERNAL_URLS.MAIN;
const INLANG = 'en';

export const SCHEMA_IDS = {
  website: `${ROOT}/#website`,
  person: `${ROOT}/#person`,
  webpage: (path: string) => `${ROOT}${path}#webpage`,
  project: (slug: string) => `${ROOT}/#project-${encodeURIComponent(slug)}`,
} as const;

function buildWebsiteNode(variant: 'full' | 'slim'): GraphNode {
  if (variant === 'slim') {
    return {
      '@type': 'WebSite',
      '@id': SCHEMA_IDS.website,
      url: `${ROOT}/`,
      name: PERSONAL_INFO.FULL_NAME,
    };
  }
  return {
    '@type': 'WebSite',
    '@id': SCHEMA_IDS.website,
    url: `${ROOT}/`,
    name: PERSONAL_INFO.FULL_NAME,
    alternateName: SEO_DATA.ALTERNATE_NAMES,
    description: PAGE_DESCRIPTIONS.SEO_DESCRIPTION,
    inLanguage: INLANG,
    publisher: { '@id': SCHEMA_IDS.person },
  };
}

function buildPersonNode(): GraphNode {
  return {
    '@type': 'Person',
    '@id': SCHEMA_IDS.person,
    url: `${ROOT}/`,
    name: PERSONAL_INFO.FULL_NAME,
    alternateName: SEO_DATA.ALTERNATE_NAMES,
    description: PAGE_DESCRIPTIONS.ABOUT_PAGE_INTRO,
    image: EXTERNAL_URLS.OG_IMAGE,
    jobTitle: PROFESSIONAL_TITLES.CURRENT,
    worksFor: {
      '@type': 'Organization',
      ...SEO_DATA.WORKS_FOR,
    },
    knowsAbout: SEO_DATA.KNOWS_ABOUT,
    sameAs: ALL_PLATFORMS,
  };
}

export function buildProfilePageNode({
  path,
  name,
  description,
}: {
  readonly path: string;
  readonly name: string;
  readonly description?: string;
}): GraphNode {
  return {
    '@type': 'ProfilePage',
    '@id': SCHEMA_IDS.webpage(path),
    url: `${ROOT}${path}`,
    isPartOf: { '@id': SCHEMA_IDS.website },
    mainEntity: { '@id': SCHEMA_IDS.person },
    name,
    ...(description !== undefined && { description }),
    inLanguage: INLANG,
  };
}

export function buildCollectionPageNode({
  path,
  name,
  description,
}: {
  readonly path: string;
  readonly name: string;
  readonly description?: string;
}): GraphNode {
  return {
    '@type': 'CollectionPage',
    '@id': SCHEMA_IDS.webpage(path),
    url: `${ROOT}${path}`,
    isPartOf: { '@id': SCHEMA_IDS.website },
    about: { '@id': SCHEMA_IDS.person },
    name,
    ...(description !== undefined && { description }),
    inLanguage: INLANG,
  };
}

export function buildSoftwareApplicationNode(project: GitHubRepo): GraphNode {
  // GitHub URLs are https://github.com/<owner>/<repo>; namespace the @id with
  // owner so two repos with the same name from different orgs can't collide.
  const ownerRepo = project.html_url.replace(/^https?:\/\/github\.com\//, '');
  return {
    '@type': 'SoftwareApplication',
    '@id': SCHEMA_IDS.project(ownerRepo),
    url: project.html_url,
    name: project.name,
    description: project.description ?? `${project.name} — open source project`,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'All',
    creator: { '@id': SCHEMA_IDS.person },
    sameAs: [project.html_url],
    ...(project.language !== null && { programmingLanguage: project.language }),
    isAccessibleForFree: true,
  };
}

export function StructuredData({
  nodes = [],
  websiteVariant = 'slim',
  includePerson = true,
  id = 'structured-data',
}: StructuredDataProps): JSX.Element {
  const graph: GraphNode[] = [buildWebsiteNode(websiteVariant)];
  if (includePerson) graph.push(buildPersonNode());
  graph.push(...nodes);

  const document = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(document) }}
    />
  );
}
