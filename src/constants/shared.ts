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
  // Core messaging (used for both page content and SEO)
  HOME_DESCRIPTION:
    "I architect cloud-native systems at Twitch using TypeScript, Node.js, and AWS. From fixing printers to building systems that scale, my journey has been all about turning complex problems into elegant solutions. These days I'm pioneering generative AI features and automating everything I can get my hands on.",

  SEO_DESCRIPTION:
    'System Development Engineer at Twitch building cloud-native solutions. I love creating systems that work at scale and exploring AI in development.',

  OPENGRAPH_DESCRIPTION:
    "By day, I'm a System Development Engineer at Twitch building cloud-native solutions with TypeScript, Node.js, and AWS. In my free time, I tinker with my homelab setup, experimenting with new technologies and occasionally stream on Twitch to share what I've learned along the way.",

  CAREER_JOURNEY:
    "I started with C# and programming early in my career, which gave me a strong foundation in software development. Later, I transitioned to IT Support and Network Engineering where I gained hands-on experience with real-world systems and user needs. From there, I progressed through deployments and System Administration into my current role as a Systems Development Engineer. Along the way, I've embraced AI tools and models to enhance my workflow, integrating them into my development process. This unique path has given me both development expertise and operational insight, which helps me create solutions that are both powerful and practical.",

  // Page content descriptions (also used for SEO for consistency)
  ABOUT_HERO_SUBTITLE: 'My journey in technology',
  ABOUT_PAGE_INTRO:
    "Curious how I went from fixing printers to building cloud systems at Twitch? My journey's been all about learning, growing, and finding creative ways to solve tech problems.",
  ABOUT_SKILLS_SUBTITLE: 'Technologies I work with and love',
  ABOUT_EXPERIENCE_SUBTITLE: 'My professional journey',
  ABOUT_EDUCATION_SUBTITLE: 'Academic foundation',

  PORTFOLIO_HERO_SUBTITLE: 'Public projects and contributions',
  PORTFOLIO_PAGE_INTRO:
    'Here is a selection of my public projects from GitHub. In addition to these, I have extensive experience developing and maintaining internal tools and systems for enterprise environments.',

  CONTACT_HERO_SUBTITLE: "Let's start a conversation",
  CONTACT_PAGE_INTRO:
    "Have a question, want to collaborate on a project, or just want to say hello? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.",
  CONTACT_FORM_HELP: "Fill out the form below and I'll get back to you soon",
} as const;

/**
 * Technologies and skills organized by category
 */
export const TECHNOLOGIES = {
  LANGUAGES: ['TypeScript', 'Node.js', 'Python'],
  FRONTEND: ['React.js', 'Next.js'],
  CLOUD: ['Amazon Web Services (AWS)', 'AWS CloudFormation'],
  INFRASTRUCTURE: ['Terraform', 'Docker', 'Ansible', 'System Administration'],
  IDENTITY: ['Okta'],
  CDN: ['CloudFlare'],
  AI: [
    'AI',
    'Artificial Intelligence',
    'Agentic AI',
    'Generative AI',
    'AI Tools',
    'AI Development',
  ],
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

  FOOTER_AI_CREDIT: 'Created with an AI assistant',
} as const;

/**
 * Contact page content
 */
export const CONTACT_PAGE = {
  SECTION_LABEL: 'Contact',
  HEADING: 'Get In Touch',
  FORM_SECTION_LABEL: 'Message',
  FORM_HEADING: 'Send a Message',
} as const;

/**
 * Contact form content
 */
export const CONTACT_FORM = {
  // Field labels
  LABEL_NAME: 'Name',
  LABEL_EMAIL: 'Email',
  LABEL_CONFIRM_EMAIL: 'Confirm Email',
  LABEL_SUBJECT: 'Subject',
  LABEL_MESSAGE: 'Message',

  // Placeholders
  PLACEHOLDER_NAME: 'Your full name',
  PLACEHOLDER_EMAIL: 'your.email@example.com',
  PLACEHOLDER_CONFIRM_EMAIL: 'Confirm your email address',
  PLACEHOLDER_SUBJECT: "What's this about?",
  PLACEHOLDER_MESSAGE: 'Tell me about your project or inquiry...',

  // Messages
  CAPTCHA_ERROR: 'Please complete the CAPTCHA verification.',
  SUCCESS_HEADING: 'Message Sent Successfully!',
  SUCCESS_MESSAGE:
    "Thank you for reaching out. I'll get back to you as soon as possible.",
  SUCCESS_BUTTON: 'Send Another Message',
  ERROR_MESSAGE: 'Something went wrong. Please try again later.',
} as const;

/**
 * Portfolio page content
 */
export const PORTFOLIO_PAGE = {
  SECTION_LABEL: 'Portfolio',
  HEADING: 'My Work',
  FEATURED_LABEL: 'Featured',
  FEATURED_HEADING: 'Open Source Projects',
  PROJECT_NO_DESCRIPTION: 'No description available',
  EMPTY_STATE_HEADING: 'Projects Loading',
  EMPTY_STATE_MESSAGE: 'Fetching the latest projects from GitHub...',
  VIEW_ALL_BUTTON: 'View All Projects on GitHub',
} as const;
