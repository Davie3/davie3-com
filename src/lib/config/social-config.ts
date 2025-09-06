import type { SocialLinkData } from '../../types/social-types';
import {
  EXTERNAL_URLS,
  SOCIAL_URLS,
  CONTENT_URLS,
} from '../../constants/site-config';

/**
 * Social media links configuration.
 */
export const SOCIAL_LINKS_DATA: readonly SocialLinkData[] = [
  {
    name: 'GitHub',
    href: EXTERNAL_URLS.GITHUB_PROFILE,
    iconName: 'github',
  },
  {
    name: 'LinkedIn',
    href: SOCIAL_URLS.LINKEDIN,
    iconName: 'linkedin',
  },
  {
    name: 'Twitch',
    href: CONTENT_URLS.TWITCH,
    iconName: 'twitch',
  },
  {
    name: 'X (Twitter)',
    href: SOCIAL_URLS.X_TWITTER,
    iconName: 'x',
  },
  {
    name: 'Instagram',
    href: SOCIAL_URLS.INSTAGRAM,
    iconName: 'instagram',
  },
  {
    name: 'Bluesky',
    href: SOCIAL_URLS.BLUESKY,
    iconName: 'bluesky',
  },
];

export const FOOTER_CONFIG = {
  STARTING_YEAR: 2025,
  ANIMATION_DELAY: 2000,
  ICON_SIZE: 24,
} as const;
