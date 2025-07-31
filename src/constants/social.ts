export type SocialLinkData = {
  name: string;
  href: string;
  iconName: 'github' | 'linkedin' | 'twitch' | 'x' | 'instagram' | 'bluesky';
};

export const SOCIAL_LINKS_DATA: SocialLinkData[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/davie3',
    iconName: 'github',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/davie3',
    iconName: 'linkedin',
  },
  {
    name: 'Twitch',
    href: 'https://www.twitch.tv/davie3',
    iconName: 'twitch',
  },
  {
    name: 'X',
    href: 'https://x.com/itsdavie3/',
    iconName: 'x',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/itsdavie3/',
    iconName: 'instagram',
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/itsdavie3.bsky.social',
    iconName: 'bluesky',
  },
];

export const FOOTER_CONFIG = {
  STARTING_YEAR: 2025,
  ANIMATION_DELAY: 2000,
  ICON_SIZE: 24,
} as const;
