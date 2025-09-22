import {
  PERSONAL_INFO,
  PROFESSIONAL_TITLES,
  TECHNOLOGIES,
} from '../../constants/shared';

/**
 * SEO and Search Optimization Configuration
 */

/**
 * Combined keyword arrays for different page types
 */
export const COMBINED_KEYWORDS = {
  HOME: [
    PERSONAL_INFO.FULL_NAME,
    PROFESSIONAL_TITLES.CURRENT,
    'Twitch',
    ...TECHNOLOGIES.LANGUAGES,
    ...TECHNOLOGIES.FRONTEND,
    ...TECHNOLOGIES.CLOUD,
    ...TECHNOLOGIES.INFRASTRUCTURE,
    ...TECHNOLOGIES.IDENTITY,
    ...TECHNOLOGIES.CDN,
    ...TECHNOLOGIES.AI,
    ...TECHNOLOGIES.EMERGING,
    ...TECHNOLOGIES.DEVELOPMENT,
    PERSONAL_INFO.NICKNAME.toLowerCase(),
    PERSONAL_INFO.TWITTER_HANDLE.replace('@', ''),
    'software development',
    'cloud architecture',
    'modern web development',
    'technical consulting',
  ],
  ABOUT: [
    PERSONAL_INFO.FULL_NAME,
    PROFESSIONAL_TITLES.CURRENT,
    'Twitch',
    ...TECHNOLOGIES.LANGUAGES,
    ...TECHNOLOGIES.FRONTEND,
    ...TECHNOLOGIES.CLOUD,
    ...TECHNOLOGIES.INFRASTRUCTURE,
    ...TECHNOLOGIES.IDENTITY,
    ...TECHNOLOGIES.CDN,
    ...TECHNOLOGIES.AI,
    ...TECHNOLOGIES.EMERGING,
    ...TECHNOLOGIES.DEVELOPMENT,
  ],
  CONTACT: [
    PERSONAL_INFO.FULL_NAME,
    PROFESSIONAL_TITLES.CURRENT,
    'Twitch',
    ...TECHNOLOGIES.LANGUAGES,
    ...TECHNOLOGIES.FRONTEND,
    PERSONAL_INFO.NICKNAME.toLowerCase(),
    PERSONAL_INFO.TWITTER_HANDLE.replace('@', ''),
    'software development',
    'cloud architecture',
    'modern web development',
    'technical consulting',
    'collaboration',
    'technical consulting',
  ],
  PORTFOLIO: [
    PERSONAL_INFO.FULL_NAME,
    PROFESSIONAL_TITLES.CURRENT,
    'Twitch',
    ...TECHNOLOGIES.LANGUAGES,
    ...TECHNOLOGIES.FRONTEND,
    ...TECHNOLOGIES.CLOUD,
    ...TECHNOLOGIES.INFRASTRUCTURE,
    ...TECHNOLOGIES.IDENTITY,
    ...TECHNOLOGIES.CDN,
    ...TECHNOLOGIES.AI,
    ...TECHNOLOGIES.EMERGING,
    ...TECHNOLOGIES.DEVELOPMENT,
    'GitHub',
    'open source',
    'projects',
  ],
} as const;

/**
 * SEO and structured data constants
 */
export const SEO_DATA = {
  ALTERNATE_NAMES: [PERSONAL_INFO.NICKNAME, PERSONAL_INFO.ALTERNATE_NICKNAME],
  WORKS_FOR: {
    name: 'Twitch',
    url: 'https://www.twitch.tv',
  },
  KNOWS_ABOUT: [
    ...TECHNOLOGIES.LANGUAGES,
    ...TECHNOLOGIES.FRONTEND,
    ...TECHNOLOGIES.AI,
    ...TECHNOLOGIES.EMERGING,
    ...TECHNOLOGIES.CLOUD,
    ...TECHNOLOGIES.INFRASTRUCTURE,
    ...TECHNOLOGIES.IDENTITY,
    ...TECHNOLOGIES.CDN,
    ...TECHNOLOGIES.DEVELOPMENT,
    ...TECHNOLOGIES.DEVELOPMENT_EXTENDED,
    ...TECHNOLOGIES.CONTENT,
    ...TECHNOLOGIES.GENERAL,
  ],
} as const;
