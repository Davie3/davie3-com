import type { Metadata } from 'next';
import Image from 'next/image';
import type { JSX } from 'react';
import {
  EXPERIENCES,
  EDUCATION,
  ABOUT_CONTENT,
  SKILLS,
} from '@/constants/about-page';
import { PAGE_METADATA } from '@/constants/config/site-metadata';
import { SOCIAL_LINKS_DATA } from '@/constants/config/social-config';
import { getSocialIcon } from '@/utils/social-icons';

export const metadata: Metadata = PAGE_METADATA.ABOUT;

/**
 * Renders the about page, showcasing professional experience and skills.
 * Design: Editorial layout with vertical rhythm and strategic orange accents
 *
 * @returns The rendered about page.
 */
export default function AboutPage(): JSX.Element {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-24">
      {/* Hero Section - Editorial style */}
      <section className="relative mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left - Image */}
          <div className="md:col-span-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-electric-cyan/10 transform rotate-2" />
              <Image
                src="/images/profile_square.webp"
                alt="David Griffin"
                width={300}
                height={300}
                className="relative z-10 w-full border-2 border-electric-cyan/30 shadow-lg"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>

          {/* Right - Title and intro */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-12 bg-safety-orange" />
                <span className="font-accent text-sm tracking-wider uppercase text-silver">
                  About
                </span>
              </div>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-tight text-cream mb-2">
                David Griffin
              </h1>
              <p className="text-xl text-electric-cyan font-semibold">
                {ABOUT_CONTENT.HERO_SUBTITLE}
              </p>
            </div>

            <p className="text-lg md:text-xl leading-relaxed text-silver">
              {ABOUT_CONTENT.CAREER_JOURNEY}
            </p>

            {/* Social Links - Inline style */}
            <div className="flex flex-wrap gap-4 pt-4">
              {SOCIAL_LINKS_DATA.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-electric-cyan/30 text-cream hover:border-electric-cyan hover:text-electric-cyan transition-all duration-300"
                >
                  {getSocialIcon(link.iconName, 18)}
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Tag cloud style */}
      <section
        id="skills"
        className="mb-24 border-l-4 border-safety-orange pl-8"
      >
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-accent text-sm tracking-wider uppercase text-silver">
              Skills
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-cream mb-2">
            Technologies
          </h2>
          <p className="text-silver">{ABOUT_CONTENT.SKILLS_SUBTITLE}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill, index) => (
            <span
              key={skill}
              className="px-4 py-2 bg-navy-accent/50 border border-electric-cyan/20 text-cream hover:border-electric-cyan hover:text-electric-cyan transition-all duration-300 text-sm md:text-base font-medium"
              style={{ animationDelay: `${(index * 50).toString()}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience Section - Timeline style */}
      <section id="experience" className="mb-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-safety-orange" />
            <span className="font-accent text-sm tracking-wider uppercase text-silver">
              Experience
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-cream mb-2">
            Work History
          </h2>
          <p className="text-silver">{ABOUT_CONTENT.EXPERIENCE_SUBTITLE}</p>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={`${exp.company}-${index.toString()}`}
              className="relative pl-8 border-l-2 border-electric-cyan/30"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-safety-orange rounded-full border-4 border-navy" />

              <div className="space-y-3">
                <div>
                  <span className="inline-block px-3 py-1 bg-navy-accent/50 border border-electric-cyan/20 text-silver text-sm mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display text-cream leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-electric-cyan font-semibold text-lg mt-1">
                    {exp.company}
                  </p>
                </div>
                <p className="text-silver leading-relaxed text-lg">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="border-l-4 border-safety-orange pl-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-accent text-sm tracking-wider uppercase text-silver">
              Education
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-cream mb-2">
            Academic Background
          </h2>
          <p className="text-silver">{ABOUT_CONTENT.EDUCATION_SUBTITLE}</p>
        </div>

        <div className="space-y-8">
          {EDUCATION.map((edu) => (
            <div key={edu.institution} className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-safety-orange/20 border-2 border-safety-orange flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{edu.emoji}</span>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-navy-accent/50 border border-electric-cyan/20 text-silver text-sm">
                    {edu.period}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-display text-cream leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-electric-cyan font-semibold text-lg mt-1">
                  {edu.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
