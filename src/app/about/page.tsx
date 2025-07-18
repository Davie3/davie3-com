import type { JSX } from 'react';

const skills = [
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
];

const experiences = [
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
      'Managed the company’s Windows Server domain, provided comprehensive technical support, and designed and implemented a disaster recovery plan. Led server migration and virtualization projects.',
  },
];

/**
 * Renders the about page, showcasing professional experience and skills.
 *
 * @returns The rendered about page.
 */
export default function AboutPage(): JSX.Element {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-24">
      <section id="about">
        <h1 className="text-4xl font-bold text-primary">About Me</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          I am a seasoned IT professional with a deep background in system and
          network administration, software development, and technical support.
          With extensive experience managing both Windows and Linux
          environments, I specialize in building and maintaining robust,
          scalable IT infrastructures. My recent focus has been on leveraging
          modern cloud technologies, including AWS, Terraform, and Okta, to
          drive efficiency and security in enterprise systems.
        </p>
      </section>

      <section id="skills" className="mt-12">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="experience" className="mt-12">
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <div className="mt-4 space-y-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="flex flex-col">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-md text-muted-foreground">
                {exp.company} | {exp.period}
              </p>
              <p className="mt-2 text-base">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="mt-12">
        <h2 className="text-3xl font-bold">Education</h2>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">
            Associate of Science, Computer Science
          </h3>
          <p className="text-md text-muted-foreground">
            Finger Lakes Community College | 2010 - 2013
          </p>
        </div>
      </section>
    </main>
  );
}
