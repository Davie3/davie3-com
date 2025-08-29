import type { JSX } from 'react';
import type { Metadata } from 'next';

import { SKILLS, EXPERIENCES } from '@/constants/personal';
import { PAGE_METADATA } from '@/constants/page-metadata';

export const metadata: Metadata = PAGE_METADATA.ABOUT;

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
          My career is a story of progression, starting from hands-on IT support
          and network administration, where I built a strong foundation in
          managing robust infrastructures. This experience paved the way for a
          transition into system administration, where I honed my skills in
          automation, cloud technologies, and enterprise-level systems
          management using tools like Terraform and Okta. Today, as a Systems
          Development Engineer, I leverage that deep technical background to
          design and build scalable, cloud-native software solutions with a
          focus on Node.js, TypeScript, and Generative AI, turning complex
          engineering challenges into elegant and efficient systems.
        </p>
        {/* <p>
        I am a seasoned IT professional with a deep background in system and
          network administration, software development, and technical support.
          With extensive experience managing both Windows and Linux
          environments, I specialize in building and maintaining robust,
          scalable IT infrastructures. My recent focus has been on leveraging
          modern cloud technologies, including AWS, Terraform, and Okta, to
          drive efficiency and security in enterprise systems.
        </p> */}
      </section>

      <section id="skills" className="mt-12">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
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
          {EXPERIENCES.map((exp) => (
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
