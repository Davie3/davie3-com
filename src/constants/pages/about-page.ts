/**
 * About page constants
 * Content, data, and configuration specific to the about page
 */

import { PAGE_DESCRIPTIONS, TECHNOLOGIES } from '@/constants/shared';

import type { Education } from '@/types/personal-types';

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
      "These days I'm architecting cloud-native systems with TypeScript and Node.js, diving deep into AWS CloudFormation and Terraform. I'm pioneering generative AI features that are transforming how people interact with our internal platforms, and I regularly leverage AI tools to enhance my development workflow. I also manage high-level identity systems in Okta to deliver seamless and secure experiences for Twitch employees.",
  },
  {
    role: 'System Admin Engineer II',
    company: 'Twitch',
    period: 'Jul 2023 - Aug 2025',
    description:
      'I spent these years automating everything I could get my hands on with Terraform, Python, and Okta Workflows. I became the go-to person for Okta identity management, focusing on SSO integrations and building automated workflows for user provisioning and lifecycle management that significantly reduced manual work across the team.',
  },
  {
    role: 'IT Support Engineer II',
    company: 'Twitch',
    period: 'Apr 2021 - Jul 2023',
    description:
      'I got promoted to handle the tough technical escalations. I overhauled the IT onboarding process for new employees, streamlining the experience and improving workflows with our HR partners. I joined the project to migrate our applications from the old IDP to Okta—this is where I really got comfortable with Okta. I started my automation journey here, discovered I love teaching others, and learned how to write docs people actually want to read.',
  },
  {
    role: 'IT Support Engineer I',
    company: 'Twitch',
    period: 'May 2018 - Apr 2021',
    description:
      'My first role at Twitch! Troubleshooting, ticket management, imaging, turning computers on and off. This is where I built my foundation in enterprise systems and figured out how things really work behind the scenes.',
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
