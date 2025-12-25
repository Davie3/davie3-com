import type { Metadata } from 'next';
import type { JSX } from 'react';
import { BorderedSection } from '@/components/ui/bordered-section';
import ContactForm from '@/components/forms/contact-form';
import { SectionHeader } from '@/components/ui/section-header';
import { PAGE_METADATA } from '@/constants/config/site-metadata';
import { CONTACT_PAGE, CONTACT_CONTENT } from '@/constants/pages/contact-page';

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
          <p className="text-2xl text-electric-cyan font-semibold mb-6">
            {CONTACT_CONTENT.HERO_SUBTITLE}
          </p>
          <p className="text-xl leading-relaxed text-silver">
            {CONTACT_CONTENT.PAGE_INTRO}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <BorderedSection
        label={CONTACT_PAGE.FORM_SECTION_LABEL}
        heading={CONTACT_PAGE.FORM_HEADING}
        headingLevel="h2"
        className="mb-8"
      >
        <p className="text-silver leading-relaxed mb-8">
          {CONTACT_CONTENT.FORM_HELP}
        </p>
        <ContactForm />
      </BorderedSection>
    </main>
  );
}
