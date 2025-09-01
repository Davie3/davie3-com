/**
 * Reusable SEO description constants for consistent messaging across the website.
 */
export const SEO_DESCRIPTIONS = {
  /**
   * Primary site description matching current branding
   */
  SITE_PRIMARY:
    'I build and scale resilient, high-performance software systems. With a passion for elegant code and innovative solutions, I transform complex challenges into seamless user experiences.',

  /**
   * Extended site description for meta tags
   */
  SITE_EXTENDED:
    'David Griffin is a Software Engineer at Twitch and content creator specializing in modern cloud-native solutions, TypeScript, Node.js, AWS, and generative AI. Building resilient systems while creating tech content on YouTube and Twitch.',

  /**
   * Professional summary for about pages
   */
  PROFESSIONAL_SUMMARY:
    'System Development Engineer at Twitch with expertise in TypeScript, Node.js, AWS CloudFormation, Terraform, and generative AI. Leading architecture and implementation of modern cloud-native solutions.',

  /**
   * Skills and expertise summary
   */
  SKILLS_SUMMARY:
    'Expertise in TypeScript, Node.js, React.js, AWS, Terraform, Okta, and system administration. Specializing in cloud-native architecture and generative AI implementation.',

  /**
   * Contact page description
   */
  CONTACT_DESCRIPTION:
    'Get in touch with David Griffin for collaboration opportunities, technical consulting, or to discuss modern software development and cloud architecture solutions.',

  /**
   * Portfolio description
   */
  PORTFOLIO_DESCRIPTION:
    "Explore David Griffin's software projects and GitHub repositories showcasing expertise in TypeScript, Node.js, AWS, and modern web development technologies.",
} as const;

/**
 * SEO keywords organized by category for consistent tagging
 */
export const SEO_KEYWORDS = {
  /**
   * Core professional keywords
   */
  PROFESSIONAL: [
    'David Griffin',
    'Software Engineer',
    'System Development Engineer',
    'Twitch',
    'TypeScript',
    'Node.js',
    'React.js',
  ],

  /**
   * Technology and tools keywords
   */
  TECHNOLOGY: [
    'AWS',
    'AWS CloudFormation',
    'Terraform',
    'Okta',
    'CloudFlare',
    'Generative AI',
    'MCP Servers',
    'System Administration',
  ],

  /**
   * Content and branding keywords
   */
  BRANDING: [
    'davie3',
    'itsdavie3',
    'software development',
    'cloud architecture',
    'modern web development',
    'technical consulting',
  ],
} as const;

/**
 * Combined keyword arrays for different page types
 */
export const COMBINED_KEYWORDS = {
  HOME: [
    ...SEO_KEYWORDS.PROFESSIONAL,
    ...SEO_KEYWORDS.TECHNOLOGY,
    ...SEO_KEYWORDS.BRANDING,
  ],
  ABOUT: [...SEO_KEYWORDS.PROFESSIONAL, ...SEO_KEYWORDS.TECHNOLOGY],
  CONTACT: [
    ...SEO_KEYWORDS.PROFESSIONAL,
    ...SEO_KEYWORDS.BRANDING,
    'collaboration',
    'technical consulting',
  ],
  PORTFOLIO: [
    ...SEO_KEYWORDS.PROFESSIONAL,
    ...SEO_KEYWORDS.TECHNOLOGY,
    'GitHub',
    'open source',
    'projects',
  ],
};
