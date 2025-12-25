/**
 * SEO automation configuration
 * Sitemap priorities, change frequencies, and robots.txt rules
 */

export const SITEMAP_CONFIG = {
  HOME: { changeFrequency: 'monthly' as const, priority: 1 },
  ABOUT: { changeFrequency: 'monthly' as const, priority: 0.8 },
  PORTFOLIO: { changeFrequency: 'weekly' as const, priority: 0.7 },
  PRIVACY: { changeFrequency: 'yearly' as const, priority: 0.3 },
  CONTACT: { changeFrequency: 'monthly' as const, priority: 0.7 },
} as const;

export const ROBOTS_CONFIG = {
  USER_AGENT: '*',
  ALLOW: '/',
  DISALLOW: ['/api/', '/admin/'],
} as const;
