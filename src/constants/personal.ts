/**
 * Personal information constants for David Griffin's website.
 */
export const PERSONAL_INFO = {
  FULL_NAME: 'David Griffin',
  TITLE: 'Software Engineer',
  DESCRIPTION:
    'I build and scale resilient, high-performance software systems. With a passion for elegant code and innovative solutions, I transform complex challenges into seamless user experiences.',
  TWITTER_HANDLE: '@itsdavie3',
} as const;

export const SKILLS = [
  'SaaS',
  'Okta',
  'Terraform',
  'AWS CDK',
  'TypeScript',
  'Amazon Web Services (AWS)',
  'ITIL',
  'System Administration',
  'Network Engineering',
  'Software Development',
] as const;

export type Experience = {
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly description: string;
};

export const EXPERIENCES: readonly Experience[] = [
  {
    role: 'System Admin Engineer II',
    company: 'Twitch',
    period: '2018 - Present',
    description:
      'Promoted through various IT engineering roles, currently managing high-level IT systems. My work involves extensive use of SaaS platforms, Okta for identity management, Terraform for infrastructure as code, and AWS CDK with TypeScript for cloud solutions.',
  },
  {
    role: 'Network Technician',
    company: 'Velociter Wireless, Inc.',
    period: '2015 - 2018',
    description:
      'Provided technical support for a Wireless Internet Provider, maintained network infrastructure, managed monitoring systems, and deployed Linux and Windows systems via VMware ESXi.',
  },
  {
    role: 'IT Consultant',
    company: 'Parsons Pipe Organ Builders',
    period: '2011 - 2016',
    description:
      "Managed the company's Windows Server domain, provided comprehensive technical support, and designed and implemented a disaster recovery plan. Led server migration and virtualization projects.",
  },
] as const;
