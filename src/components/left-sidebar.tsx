'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitch } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { SiBluesky } from 'react-icons/si';
import type { JSX } from 'react';

import { SOCIAL_LINKS_DATA } from '@/constants/social';
import type { SocialLinkData } from '@/types/social';

const getIcon = (iconName: SocialLinkData['iconName']): JSX.Element => {
  const iconProps = { size: 20 };
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

export function LeftSidebar(): JSX.Element {
  return (
    <motion.div
      className="hidden md:flex flex-col items-center fixed bottom-0 left-10 w-10"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <div className="flex flex-col items-center gap-6">
        {SOCIAL_LINKS_DATA.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-transform duration-300 hover:text-primary hover:-translate-y-1"
            aria-label={link.name}
          >
            {getIcon(link.iconName)}
          </a>
        ))}
      </div>
      <div className="mt-6 h-24 w-px bg-[color:var(--color-slate-dark)]"></div>
    </motion.div>
  );
}
