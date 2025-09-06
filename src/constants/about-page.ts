/**
 * About page constants
 * Content, data, and configuration specific to the about page
 */

import type { Education } from '@/types/personal-types';
import { PAGE_DESCRIPTIONS, TECHNOLOGIES } from './shared';

/**
 * About page content
 */
export const ABOUT_CONTENT = {
  HERO_SUBTITLE: 'My journey in technology',
  CAREER_JOURNEY: PAGE_DESCRIPTIONS.CAREER_JOURNEY,
  SKILLS_SUBTITLE: 'Technologies I work with and love',
  EXPERIENCE_SUBTITLE: 'My professional journey',
  EDUCATION_SUBTITLE: 'Academic foundation',
} as const;

/**
 * Skills array for about page display
 * Core technologies and expertise areas showcased on the about page
 */
export const SKILLS = [
  ...TECHNOLOGIES.DEVELOPMENT,
  ...TECHNOLOGIES.LANGUAGES,
  ...TECHNOLOGIES.FRONTEND,
  ...TECHNOLOGIES.EMERGING,
  ...TECHNOLOGIES.CLOUD,
  ...TECHNOLOGIES.INFRASTRUCTURE,
  ...TECHNOLOGIES.IDENTITY,
  ...TECHNOLOGIES.CDN,
] as const;

/**
 * Experience data
 */
export const EXPERIENCES = [
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

/**
 * Education data
 */
export const EDUCATION: readonly Education[] = [
  {
    degree: 'Associate of Science, Computer Science',
    institution: 'Finger Lakes Community College',
    period: '2010 - 2013',
    emoji: '🎓',
  },
] as const;
