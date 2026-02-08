import Image from 'next/image';

import { BorderedSection } from '@/components/ui/bordered-section';
import { SectionHeader } from '@/components/ui/section-header';
import { PAGE_STAGGER_DELAYS } from '@/constants/config/animation-config';
import { PAGE_METADATA } from '@/constants/config/site-metadata';
import { SOCIAL_LINKS_DATA } from '@/constants/config/social-config';
import { EXPERIENCES, EDUCATION, ABOUT_CONTENT, SKILLS } from '@/constants/pages/about-page';
import { getSocialIcon } from '@/utils/social-icons';

import type { Metadata } from 'next';
import type { JSX } from 'react';

export const metadata: Metadata = PAGE_METADATA.ABOUT;

/**
 * Renders the about page, showcasing professional experience and skills.
 * Design: Editorial layout with vertical rhythm and strategic orange accents
 *
 * @returns The rendered about page.
 */
export default function AboutPage(): JSX.Element {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16">
      {/* Hero Section - Editorial style */}
      <section className="relative mb-24">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left - Image */}
          <div className="md:col-span-1">
            <div className="relative">
              <div className="bg-electric-cyan/10 absolute -inset-2 rotate-2 transform" />
              <Image
                src="/images/profile_square.webp"
                alt="David Griffin"
                width={300}
                height={300}
                className="border-electric-cyan/30 relative z-10 w-full border-2 shadow-lg"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>

          {/* Right - Title and intro */}
          <div className="space-y-6 md:col-span-2">
            <div>
              <SectionHeader
                label="About"
                heading="David Griffin"
                headingLevel="h1"
                className="mb-2"
              />
              <p className="text-electric-cyan text-xl font-semibold">
                {ABOUT_CONTENT.HERO_SUBTITLE}
              </p>
            </div>

            <p className="text-silver text-lg leading-relaxed md:text-xl">
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
                  className="border-electric-cyan/30 text-cream hover:border-electric-cyan hover:text-electric-cyan flex items-center gap-2 border px-4 py-2 transition-all duration-300"
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
      <BorderedSection label="Skills" heading="Technologies" headingLevel="h2" className="mb-24">
        <p className="text-silver mb-8">{ABOUT_CONTENT.SKILLS_SUBTITLE}</p>

        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill, index) => (
            <span
              key={skill}
              className="animate-stagger-fade-in bg-navy-accent/50 border-electric-cyan/20 text-cream hover:border-electric-cyan hover:text-electric-cyan border px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(0,212,255,0.2)] md:text-base"
              style={{
                animationDelay: `${(index * PAGE_STAGGER_DELAYS.ABOUT_SKILLS).toString()}ms`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </BorderedSection>

      {/* Experience Section - Timeline style */}
      <section id="experience" className="mb-24">
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-3">
            <div className="bg-safety-orange h-px w-12" />
            <span className="section-label">Experience</span>
          </div>
          <h2 className="font-display text-cream mb-2 text-3xl leading-tight md:text-4xl">
            Work History
          </h2>
          <p className="text-silver">{ABOUT_CONTENT.EXPERIENCE_SUBTITLE}</p>
        </div>

        <div className="timeline-track relative space-y-12">
          {EXPERIENCES.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}-${exp.period}`}
              className="timeline-entry relative border-l-2 border-[rgba(0,212,255,0.25)] pl-8"
            >
              {/* Timeline dot with glow */}
              <div className="border-navy bg-safety-orange absolute top-0 -left-[9px] h-4 w-4 rounded-full border-4 shadow-[0_0_8px_rgba(255,107,53,0.4)]" />

              <div className="space-y-3">
                <div>
                  <span className="bg-navy-accent/50 border-electric-cyan/20 text-silver mb-3 inline-block border px-3 py-1 text-sm">
                    {exp.period}
                  </span>
                  <h3 className="font-display text-cream text-2xl leading-tight md:text-3xl">
                    {exp.role}
                  </h3>
                  <p className="text-electric-cyan mt-1 text-lg font-semibold">{exp.company}</p>
                </div>
                <p className="text-silver text-lg leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <BorderedSection label="Education" heading="Academic Background" headingLevel="h2">
        <p className="text-silver mb-8">{ABOUT_CONTENT.EDUCATION_SUBTITLE}</p>

        <div className="space-y-8">
          {EDUCATION.map((edu) => (
            <div key={edu.institution} className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="bg-safety-orange/20 flex h-12 w-12 flex-shrink-0 items-center justify-center">
                  <span className="text-2xl">{edu.emoji}</span>
                </div>
                <div>
                  <span className="bg-navy-accent/50 border-electric-cyan/20 text-silver inline-block border px-3 py-1 text-sm">
                    {edu.period}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-cream text-2xl leading-tight md:text-3xl">
                  {edu.degree}
                </h3>
                <p className="text-electric-cyan mt-1 text-lg font-semibold">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </BorderedSection>
    </main>
  );
}
