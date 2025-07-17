'use client';

import { motion } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { SiBluesky } from 'react-icons/si';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitch } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/davie3',
    icon: <FiGithub size={20} />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/davie3',
    icon: <FiLinkedin size={20} />,
  },
  {
    name: 'Twitch',
    href: 'https://www.twitch.tv/davie3',
    icon: <FiTwitch size={20} />,
  },
  {
    name: 'X',
    href: 'https://x.com/itsdavie3/',
    icon: <FaXTwitter size={20} />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/itsdavie3/',
    icon: <FiInstagram size={20} />,
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/itsdavie3.bsky.social',
    icon: <SiBluesky size={20} />,
  },
];

export function LeftSidebar() {
  return (
    <motion.div
      className="hidden md:flex flex-col items-center fixed bottom-0 left-10 w-10"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <div className="flex flex-col items-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--color-slate-dark)] hover:text-[color:var(--color-accent)] transition-transform duration-300 hover:-translate-y-1"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="mt-6 w-px h-24 bg-[color:var(--color-slate-dark)]"></div>
    </motion.div>
  );
}
