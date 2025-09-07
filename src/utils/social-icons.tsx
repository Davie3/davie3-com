import type { JSX } from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitch } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { SiBluesky } from 'react-icons/si';

import type { SocialLinkData } from '@/types/social-types';

/**
 * Gets the appropriate icon component for a social platform.
 */
export const getSocialIcon = (
  iconName: SocialLinkData['iconName'],
  size: number = 20,
): JSX.Element => {
  const iconProps = { size };
  switch (iconName) {
    case 'github':
      return <FiGithub {...iconProps} />;
    case 'linkedin':
      return <FiLinkedin {...iconProps} />;
    case 'twitch':
      return <FiTwitch {...iconProps} />;
    case 'x':
      return <FaXTwitter {...iconProps} />;
    case 'instagram':
      return <FiInstagram {...iconProps} />;
    case 'bluesky':
      return <SiBluesky {...iconProps} />;
    default:
      return <FiGithub {...iconProps} />;
  }
};
