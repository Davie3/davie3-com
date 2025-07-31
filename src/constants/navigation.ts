export type NavLink = {
  name: string;
  href: string;
  openInNewTab?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: 'https://blog.davie3.com', openInNewTab: true },
  { name: 'Tech Blog', href: 'https://tech.davie3.com', openInNewTab: true },
  { name: 'Contact', href: '/contact' },
];

export const NAV_ANIMATION = {
  STAGGER_DELAY: 0.1,
  CHILDREN_DELAY: 0.2,
  ITEM_DURATION: 0.3,
  HEADER_DURATION: 0.5,
} as const;
