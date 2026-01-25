import type { UrlMapping } from '@/types/url-types';

/**
 * URL mappings for redirects from old Squarespace site and common user expectations
 */
export const URL_MAPPINGS: readonly UrlMapping[] = [
  // Resume/CV variations -> About page
  { source: '/resume', destination: '/about', permanent: true },
  { source: '/resumé', destination: '/about', permanent: true },
  { source: '/résumé', destination: '/about', permanent: true },
  { source: '/résume', destination: '/about', permanent: true },
  { source: '/cv', destination: '/about', permanent: true },
  { source: '/curriculum-vitae', destination: '/about', permanent: true },
  { source: '/curriculum-vitaé', destination: '/about', permanent: true },
  { source: '/curriculum-vitáe', destination: '/about', permanent: true },
  { source: '/curriculum-vitá', destination: '/about', permanent: true },
  { source: '/curriculum', destination: '/about', permanent: true },

  // Bio/Profile variations -> About page
  { source: '/bio', destination: '/about', permanent: true },
  { source: '/biography', destination: '/about', permanent: true },
  { source: '/profile', destination: '/about', permanent: true },
  { source: '/read-me', destination: '/about', permanent: true },

  // Development/Portfolio variations -> Portfolio page
  { source: '/work', destination: '/portfolio', permanent: true },
  { source: '/projects', destination: '/portfolio', permanent: true },
  { source: '/code', destination: '/portfolio', permanent: true },
  { source: '/coding', destination: '/portfolio', permanent: true },
  { source: '/development', destination: '/portfolio', permanent: true },
  { source: '/dev', destination: '/portfolio', permanent: true },
  { source: '/software', destination: '/portfolio', permanent: true },
  { source: '/programming', destination: '/portfolio', permanent: true },

  // Repository/Showcase variations -> Portfolio page
  { source: '/github', destination: '/portfolio', permanent: true },
  { source: '/repos', destination: '/portfolio', permanent: true },
  { source: '/repositories', destination: '/portfolio', permanent: true },
  { source: '/showcase', destination: '/portfolio', permanent: true },
  { source: '/demos', destination: '/portfolio', permanent: true },
  { source: '/examples', destination: '/portfolio', permanent: true },

  // External subdomain redirects
  { source: '/blog', destination: 'http://blog.davie3.com', permanent: true },
  { source: '/tech', destination: 'http://tech.davie3.com', permanent: true },

  // Legacy Squarespace pages -> Home
  { source: '/photos', destination: '/', permanent: true },
  { source: '/videos', destination: '/', permanent: true },
  { source: '/brb', destination: '/', permanent: true },
  { source: '/davie3', destination: '/', permanent: true },
  { source: '/lemons-and-limes', destination: '/', permanent: true },
  { source: '/links', destination: '/', permanent: true },
  { source: '/links/', destination: '/', permanent: true },
  { source: '/home', destination: '/', permanent: true },
  { source: '/home/', destination: '/', permanent: true },
] as const;
