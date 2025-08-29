import type { Experience } from '@/types/personal';

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
  'Node.js',
  'TypeScript',
  'React.js',
  'Generative AI',
  'Terraform',
  'AWS CloudFormation',
  'Amazon Web Services (AWS)',
  'Okta',
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
    role: 'IT Support Engineer I & II',
    company: 'Twitch',
    period: 'May 2018 - Jul 2023',
    description:
      'Provided foundational IT support, growing into a senior role responsible for technical escalations, process automation, and mentoring. Developed skills in Okta, ITIL, and technical writing.',
  },
  {
    role: 'Network Technician',
    company: 'Velociter Wireless, Inc.',
    period: 'Nov 2015 - May 2018',
    description:
      'Managed network infrastructure for a wireless ISP, providing on-site and remote support. Maintained monitoring systems and deployed both Linux and Windows servers in a VMware environment.',
  },
  {
    role: 'IT Consultant',
    company: 'Parsons Pipe Organ Builders',
    period: 'Apr 2011 - Apr 2016',
    description:
      'Oversaw the entire IT infrastructure, including Windows Server administration, disaster recovery planning, and technical support for all hardware and software needs.',
  },
] as const;
