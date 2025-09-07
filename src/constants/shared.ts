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
    "I love building systems that just work, no matter the scale or pressure. When I'm not experimenting with new technologies in my homelab, I'm finding creative ways to turn tricky problems into experiences that feel effortless for users. I also enjoy exploring how AI can streamline development workflows.",

  PROFESSIONAL_SUMMARY:
    "At Twitch, I wear the System Development Engineer hat, diving deep into TypeScript, Node.js, and the AWS ecosystem. These days, I'm particularly excited about bringing generative AI into our cloud-native architecture.",

  SKILLS_SUMMARY:
    "My toolbox includes TypeScript, Node.js, React, and a healthy dose of AWS magic. I've got a soft spot for cloud-native architecture and lately I've been having a blast implementing generative AI solutions.",

  CAREER_JOURNEY:
    "I started with C# and programming early in my career, which gave me a strong foundation in software development. Later, I transitioned to IT Support and Network Engineering where I gained hands-on experience with real-world systems and user needs. From there, I progressed through deployments and System Administration into my current role as a Systems Development Engineer. Along the way, I've embraced AI tools and models to enhance my workflow, integrating them into my development process. This unique path has given me both development expertise and operational insight, which helps me create solutions that are both powerful and practical.",

  // Page-specific descriptions for SEO and meta tags
  HOME: "Hey, I'm a System Development Engineer at Twitch who loves TypeScript, Node.js, and all things AWS. When I'm not building cloud-native solutions, you'll find me creating tech content online.",

  ABOUT:
    "Curious how I went from fixing printers to building cloud systems at Twitch? My journey's been all about learning, growing, and finding creative ways to solve tech problems.",

  CONTACT:
    "Got a cool project idea or just want to chat about cloud architecture? Drop me a line! I'm always up for collaboration, consulting, or just geeking out about tech.",

  PORTFOLIO:
    'Check out some of my public projects! In addition to these, I have extensive experience developing and maintaining internal tools and systems for enterprise environments.',

  PRIVACY:
    'The not-so-exciting but important stuff: how I handle your data when you visit davie3.com, what I collect, and how I keep it safe.',

  SITE_EXTENDED:
    "By day, I'm a System Development Engineer at Twitch building cloud-native solutions with TypeScript, Node.js, and AWS. In my free time, I tinker with my homelab setup, experimenting with new technologies and occasionally stream on Twitch to share what I've learned along the way.",
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
} as const;
