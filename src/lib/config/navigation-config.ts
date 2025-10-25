export interface NavLink {
  name: string;
  href: string;
  openInNewTab?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export const NAV_ANIMATION = {
  STAGGER_DELAY: 0.1,
  CHILDREN_DELAY: 0.2,
  ITEM_DURATION: 0.3,
  HEADER_DURATION: 0.5,
} as const;
