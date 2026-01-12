/**
 * Contact page constants
 */

/**
 * Contact page UI labels and headings
 */
export const CONTACT_PAGE = {
  SECTION_LABEL: 'Contact',
  HEADING: 'Get In Touch',
  FORM_SECTION_LABEL: 'Message',
  FORM_HEADING: 'Send a Message',
} as const;

/**
 * Contact form labels, placeholders, and messages
 */
export const CONTACT_FORM = {
  // Field labels
  LABEL_NAME: 'Name',
  LABEL_EMAIL: 'Email',
  LABEL_CONFIRM_EMAIL: 'Confirm Email',
  LABEL_SUBJECT: 'Subject',
  LABEL_MESSAGE: 'Message',
  LABEL_CAPTCHA: 'Please verify you are not a robot',

  // Placeholders
  PLACEHOLDER_NAME: 'Your full name',
  PLACEHOLDER_EMAIL: 'your.email@example.com',
  PLACEHOLDER_CONFIRM_EMAIL: 'Confirm your email address',
  PLACEHOLDER_SUBJECT: "What's this about?",
  PLACEHOLDER_MESSAGE: 'Tell me about your project or inquiry...',

  // Messages
  CAPTCHA_ERROR: 'Please complete the CAPTCHA verification.',
  SUCCESS_HEADING: 'Message Sent Successfully!',
  SUCCESS_MESSAGE: "Thank you for reaching out. I'll get back to you as soon as possible.",
  SUCCESS_BUTTON: 'Send Another Message',
  ERROR_MESSAGE: 'Something went wrong. Please try again later.',
} as const;

/**
 * Contact page content
 */
export const CONTACT_CONTENT = {
  HERO_SUBTITLE: "Let's start a conversation",
  PAGE_INTRO:
    "Have a question, want to collaborate on a project, or just want to say hello? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.",
  FORM_HELP: "Fill out the form below and I'll get back to you soon",
} as const;
