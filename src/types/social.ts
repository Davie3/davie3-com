/**
 * Social media related type definitions.
 */
export type SocialIconName =
  | 'github'
  | 'linkedin'
  | 'twitch'
  | 'x'
  | 'instagram'
  | 'bluesky';

export type SocialLinkData = {
  readonly name: string;
  readonly href: string;
  readonly iconName: SocialIconName;
};
