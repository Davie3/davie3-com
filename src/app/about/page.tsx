import type { JSX } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import {
  EXPERIENCES,
  EDUCATION,
  ABOUT_CONTENT,
  SKILLS,
} from '@/constants/about-page';
import { PAGE_METADATA } from '@/lib/config/site-metadata';
import { SOCIAL_LINKS_DATA } from '@/lib/config/social-config';
import { getSocialIcon } from '@/utils/social-icons';

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
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">👨‍💻</span>
                <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                  David Griffin
                </h1>
              </div>
              <p className="text-slate-dark">{ABOUT_CONTENT.HERO_SUBTITLE}</p>
            </div>
            <div className="flex justify-center sm:justify-end">
              <Image
                src="/images/profile_square.png"
                alt="David Griffin"
                width={112}
                height={112}
                className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border-2 border-slate-dark/20 shadow-lg"
              />
            </div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-slate-light">
            {ABOUT_CONTENT.CAREER_JOURNEY}
          </p>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-slate-dark/20">
            <h3 className="text-lg font-semibold text-slate-light mb-4">
              Connect with me
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SOCIAL_LINKS_DATA.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-navy-accent/50 hover:bg-navy-accent/80 text-slate-light hover:text-blue-accent rounded-full transition-all duration-300 hover:scale-105"
                >
                  {getSocialIcon(link.iconName, 20)}
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            Skills & Technologies
          </h2>
          <p className="text-slate-dark">{ABOUT_CONTENT.SKILLS_SUBTITLE}</p>
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
          <p className="text-slate-dark">{ABOUT_CONTENT.EXPERIENCE_SUBTITLE}</p>
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
          <p className="text-slate-dark">{ABOUT_CONTENT.EDUCATION_SUBTITLE}</p>
        </div>

        <div className="space-y-6">
          {EDUCATION.map((edu) => (
            <div key={edu.institution} className="card p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-accent to-blue-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-navy font-bold text-lg">
                    {edu.emoji}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-light">
                    {edu.degree}
                  </h3>
                  <p className="text-cyan-accent font-medium mt-1">
                    {edu.institution}
                  </p>
                  <span className="text-sm text-slate-dark bg-navy-accent px-3 py-1 rounded-full inline-block mt-2">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
