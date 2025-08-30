import type { JSX } from 'react';
import type { Metadata } from 'next';

import { SKILLS, EXPERIENCES } from '@/constants/personal-info';
import { PAGE_METADATA } from '@/lib/config/site-metadata';

export const metadata: Metadata = PAGE_METADATA.ABOUT;

/**
 * Renders the about page, showcasing professional experience and skills.
 *
 * @returns The rendered about page.
 */
export default function AboutPage(): JSX.Element {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-24">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-accent/5 via-purple-accent/5 to-cyan-accent/5 rounded-3xl" />
        <div className="relative glass rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-accent to-purple-accent rounded-full flex items-center justify-center">
              <span className="text-navy font-bold text-xl">DG</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                About Me
              </h1>
              <p className="text-slate-dark mt-1">My journey in technology</p>
            </div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-slate-light">
            My career is a story of progression, starting from hands-on IT
            support and network administration, where I built a strong
            foundation in managing robust infrastructures. This experience paved
            the way for a transition into system administration, where I honed
            my skills in automation, cloud technologies, and enterprise-level
            systems management using tools like Terraform and Okta. Today, as a
            Systems Development Engineer, I leverage that deep technical
            background to design and build scalable, cloud-native software
            solutions with a focus on Node.js, TypeScript, and Generative AI,
            turning complex engineering challenges into elegant and efficient
            systems.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            Skills & Technologies
          </h2>
          <p className="text-slate-dark">Technologies I work with and love</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill, index) => (
            <div
              key={skill}
              className="card p-4 text-center group cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-sm md:text-base font-medium text-slate-light group-hover:text-blue-accent transition-colors duration-300">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            Work Experience
          </h2>
          <p className="text-slate-dark">My professional journey</p>
        </div>

        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="card p-6 md:p-8 group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-light group-hover:text-blue-accent transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-cyan-accent font-medium mt-1">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-slate-dark bg-navy-accent px-3 py-1 rounded-full mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-light leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            Education
          </h2>
          <p className="text-slate-dark">Academic foundation</p>
        </div>

        <div className="card p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-accent to-blue-accent rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-navy font-bold text-lg">🎓</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-light">
                Associate of Science, Computer Science
              </h3>
              <p className="text-cyan-accent font-medium mt-1">
                Finger Lakes Community College
              </p>
              <span className="text-sm text-slate-dark bg-navy-accent px-3 py-1 rounded-full inline-block mt-2">
                2010 - 2013
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
