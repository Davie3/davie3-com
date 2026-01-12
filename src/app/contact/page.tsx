import ContactForm from '@/components/forms/contact-form';
import { BorderedSection } from '@/components/ui/bordered-section';
import { SectionHeader } from '@/components/ui/section-header';
import { PAGE_METADATA } from '@/constants/config/site-metadata';
import { CONTACT_PAGE, CONTACT_CONTENT } from '@/constants/pages/contact-page';

import type { Metadata } from 'next';
import type { JSX } from 'react';

export const metadata: Metadata = PAGE_METADATA.CONTACT;

/**
 * Renders the contact page with modern design and functional contact form.
 * Design: Midnight Industrial - Editorial layout with bold typography
 *
 * @returns The rendered contact page.
 */
export default function ContactPage(): JSX.Element {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-16">
      {/* Enhanced Hero Section */}
      <section className="mb-16">
        <div className="max-w-3xl">
          <SectionHeader
            label={CONTACT_PAGE.SECTION_LABEL}
            heading={CONTACT_PAGE.HEADING}
            headingLevel="h1"
            className="mb-6"
          />
          <p className="text-electric-cyan mb-6 text-2xl font-semibold">
            {CONTACT_CONTENT.HERO_SUBTITLE}
          </p>
          <p className="text-silver text-xl leading-relaxed">{CONTACT_CONTENT.PAGE_INTRO}</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <BorderedSection
        label={CONTACT_PAGE.FORM_SECTION_LABEL}
        heading={CONTACT_PAGE.FORM_HEADING}
        headingLevel="h2"
        className="mb-8"
      >
        <p className="text-silver mb-8 leading-relaxed">{CONTACT_CONTENT.FORM_HELP}</p>
        <ContactForm />
      </BorderedSection>
    </main>
  );
}
