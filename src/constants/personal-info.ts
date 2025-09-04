import type { Experience } from '../types/personal-types';

/**
 * Personal information constants for David Griffin's website.
 */
export const PERSONAL_INFO = {
  FULL_NAME: 'David Griffin',
  NICKNAME: 'Davie3',
  TITLE: 'Systems Development Engineer',
  DESCRIPTION:
    'I build and scale resilient, high-performance software systems. With a passion for elegant code and innovative solutions, I transform complex challenges into seamless user experiences.',
  TWITTER_HANDLE: '@itsdavie3',
} as const;

export const SKILLS = [
  'Node.js',
  'TypeScript',
  'React.js',
  'Generative AI',
  'MCP Servers',
  'Terraform',
  'Amazon Web Services (AWS)',
  'AWS CloudFormation',
  'Okta',
  'CloudFlare',
  'System Administration',
  'Software Development',
] as const;

export const EXPERIENCES: readonly Experience[] = [
  {
    role: 'System Development Engineer II',
    company: 'Twitch',
    period: 'Aug 2025 - Present',
    description:
      'Leading systems development with a focus on modern cloud-native solutions using TypeScript, Node.js, AWS CloudFormation, and Terraform. Driving the architecture and implementation of generative AI features.',
  },
  {
    role: 'System Admin Engineer II',
    company: 'Twitch',
    period: 'Jul 2023 - Aug 2025',
    description:
      'Managed and automated critical IT systems using Terraform, Python, and TypeScript. Specialized in SaaS platform administration and identity management with Okta, ensuring robust and scalable infrastructure.',
  },
  {
    role: 'IT Support Engineer II',
    company: 'Twitch',
    period: 'Apr 2021 - Jul 2023',
    description:
      'Advanced to senior IT support role responsible for technical escalations, process automation, and mentoring. Developed expertise in Okta, ITIL, and technical writing.',
  },
  {
    role: 'IT Support Engineer I',
    company: 'Twitch',
    period: 'May 2018 - Apr 2021',
    description:
      'Provided foundational IT support and technical assistance. Built strong foundation in enterprise systems and support methodologies.',
  },
] as const;
