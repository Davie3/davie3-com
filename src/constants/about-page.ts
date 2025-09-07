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
  HERO_SUBTITLE: PAGE_DESCRIPTIONS.ABOUT_HERO_SUBTITLE,
  CAREER_JOURNEY: PAGE_DESCRIPTIONS.CAREER_JOURNEY,
  SKILLS_SUBTITLE: PAGE_DESCRIPTIONS.ABOUT_SKILLS_SUBTITLE,
  EXPERIENCE_SUBTITLE: PAGE_DESCRIPTIONS.ABOUT_EXPERIENCE_SUBTITLE,
  EDUCATION_SUBTITLE: PAGE_DESCRIPTIONS.ABOUT_EDUCATION_SUBTITLE,
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
      "These days I'm architecting cloud-native systems with TypeScript and Node.js, while diving deep into AWS CloudFormation and Terraform. I regularly use AI tools and models to enhance my development workflow. I'm also pioneering some really cool generative AI features that are changing how people interact with our internal platforms.",
  },
  {
    role: 'System Admin Engineer II',
    company: 'Twitch',
    period: 'Jul 2023 - Aug 2025',
    description:
      'I spent these years automating everything I could get my hands on with Terraform, Python, and TypeScript. Became the go-to person for Okta identity management and built systems that could scale without breaking a sweat.',
  },
  {
    role: 'IT Support Engineer II',
    company: 'Twitch',
    period: 'Apr 2021 - Jul 2023',
    description:
      'Got promoted to handle the tough technical escalations nobody else wanted to touch. Started my automation journey here and discovered I love teaching others. This is where I really got comfortable with Okta and learned how to write docs people actually want to read.',
  },
  {
    role: 'IT Support Engineer I',
    company: 'Twitch',
    period: 'May 2018 - Apr 2021',
    description:
      'My first role at Twitch! Started with the classics - troubleshooting, ticket management, and making friends with the coffee machine. This is where I built my foundation in enterprise systems and figured out how things really work behind the scenes.',
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
