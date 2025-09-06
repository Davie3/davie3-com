/**
 * General shared constants
 * Core site-wide information, personal details, and technologies
 */

/**
 * Personal information and professional details
 */
export const PERSONAL_INFO = {
  FULL_NAME: 'David Griffin',
  NICKNAME: 'Davie3',
  ALTERNATE_NICKNAME: 'ItsDavie3',
  TWITTER_HANDLE: '@itsdavie3',
} as const;

/**
 * Professional titles and job information
 */
export const PROFESSIONAL_TITLES = {
  CURRENT: 'System Development Engineer',
  CURRENT_LEVEL: 'System Development Engineer II',
  PREVIOUS: 'System Admin Engineer II',
} as const;

/**
 * Core messaging and page descriptions
 * Centralized location for all site content and SEO descriptions
 */
export const PAGE_DESCRIPTIONS = {
  // Core messaging
  PRIMARY_DESCRIPTION:
    'I build and scale resilient, high-performance software systems. With a passion for elegant code and innovative solutions, I transform complex challenges into seamless user experiences.',

  PROFESSIONAL_SUMMARY:
    'System Development Engineer at Twitch with expertise in TypeScript, Node.js, AWS CloudFormation, Terraform, and generative AI. Leading architecture and implementation of modern cloud-native solutions.',

  SKILLS_SUMMARY:
    'Expertise in TypeScript, Node.js, React.js, AWS, Terraform, Okta, and system administration. Specializing in cloud-native architecture and generative AI implementation.',

  CAREER_JOURNEY:
    'My career is a story of progression, starting from hands-on IT support and network administration, where I built a strong foundation in managing robust infrastructures. This experience paved the way for a transition into system administration, where I honed my skills in automation, cloud technologies, and enterprise-level systems management using tools like Terraform and Okta. Today, as a Systems Development Engineer, I leverage that deep technical background to design and build scalable, cloud-native software solutions with a focus on Node.js, TypeScript, and Generative AI, turning complex engineering challenges into elegant and efficient systems.',

  // Page-specific descriptions for SEO and meta tags
  HOME: 'System Development Engineer at Twitch specializing in TypeScript, Node.js, AWS, and generative AI. Building resilient cloud-native solutions and creating tech content.',

  ABOUT:
    "Learn about David Griffin's journey from IT support to System Development Engineer at Twitch, with expertise in cloud architecture, automation, and modern web development.",

  CONTACT:
    'Get in touch with David Griffin for collaboration opportunities, technical consulting, or to discuss modern software development and cloud architecture solutions.',

  PORTFOLIO:
    "Explore David Griffin's software projects and GitHub repositories showcasing expertise in TypeScript, Node.js, AWS, and modern web development technologies.",

  PRIVACY:
    'Privacy policy for davie3.com outlining data collection, usage, and protection practices for website visitors and users.',

  SITE_EXTENDED:
    'David Griffin is a System Development Engineer at Twitch and content creator specializing in modern cloud-native solutions, TypeScript, Node.js, AWS, and generative AI. Building resilient systems while creating tech content on YouTube and Twitch.',
} as const;

/**
 * Technologies and skills organized by category
 */
export const TECHNOLOGIES = {
  LANGUAGES: ['TypeScript', 'Node.js', 'Python'],
  FRONTEND: ['React.js', 'Next.js'],
  CLOUD: ['Amazon Web Services (AWS)', 'AWS CloudFormation'],
  INFRASTRUCTURE: ['Terraform', 'System Administration'],
  IDENTITY: ['Okta'],
  CDN: ['CloudFlare'],
  EMERGING: ['Generative AI', 'MCP Servers'],
  DEVELOPMENT: ['System Development'],
  DEVELOPMENT_EXTENDED: ['System Development Engineering'],
  CONTENT: ['Content Creation', 'YouTube', 'Gaming'],
  GENERAL: [
    'Cloud Architecture',
    'Software Development',
    'Web Development',
    'Technology',
  ],
} as const;

// PAGE_DESCRIPTIONS consolidated above with CORE_MESSAGES

/**
 * SEO and structured data constants
 */
export const SEO_DATA = {
  ALTERNATE_NAMES: [PERSONAL_INFO.NICKNAME, PERSONAL_INFO.ALTERNATE_NICKNAME],
  WORKS_FOR: {
    name: 'Twitch',
    url: 'https://www.twitch.tv',
  },
  KNOWS_ABOUT: [
    ...TECHNOLOGIES.LANGUAGES,
    ...TECHNOLOGIES.FRONTEND,
    ...TECHNOLOGIES.EMERGING,
    ...TECHNOLOGIES.CLOUD,
    ...TECHNOLOGIES.INFRASTRUCTURE,
    ...TECHNOLOGIES.IDENTITY,
    ...TECHNOLOGIES.CDN,
    ...TECHNOLOGIES.DEVELOPMENT,
    ...TECHNOLOGIES.DEVELOPMENT_EXTENDED,
    ...TECHNOLOGIES.CONTENT,
    ...TECHNOLOGIES.GENERAL,
  ],
} as const;

/**
 * Form and UI messaging
 */
export const UI_MESSAGES = {
  FORM_SUCCESS: "Thank you for your message! I'll get back to you soon.",
  FORM_ERROR: 'There was an error sending your message. Please try again.',
  FORM_SUBMITTING: 'Sending...',
  FORM_SUBMIT: 'Send Message',

  ERROR_DEFAULT_TITLE: 'Something went wrong',
  ERROR_DEFAULT_DESCRIPTION:
    'An unexpected error occurred. Please try refreshing the page.',
  ERROR_BUTTON_REFRESH: 'Refresh Page',
  ERROR_BUTTON_HOME: 'Go Home',
} as const;
