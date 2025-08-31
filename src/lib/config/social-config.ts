import type { SocialLinkData } from '../../types/social-types';
import { EXTERNAL_URLS } from '../../constants/url-constants';

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
    href: EXTERNAL_URLS.LINKEDIN,
    iconName: 'linkedin',
  },
  {
    name: 'Twitch',
    href: EXTERNAL_URLS.TWITCH,
    iconName: 'twitch',
  },
  {
    name: 'X',
    href: EXTERNAL_URLS.X_TWITTER,
    iconName: 'x',
  },
  {
    name: 'Instagram',
    href: EXTERNAL_URLS.INSTAGRAM,
    iconName: 'instagram',
  },
  {
    name: 'Bluesky',
    href: EXTERNAL_URLS.BLUESKY,
    iconName: 'bluesky',
  },
];

export const FOOTER_CONFIG = {
  STARTING_YEAR: 2025,
  ANIMATION_DELAY: 2000,
  ICON_SIZE: 24,
} as const;
