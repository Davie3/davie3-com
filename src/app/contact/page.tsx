import type { Metadata } from 'next';
import type { JSX } from 'react';
import ContactForm from '@/components/forms/contact-form';
import { PAGE_METADATA } from '@/constants/config/site-metadata';
import { CONTACT_PAGE, PAGE_DESCRIPTIONS } from '@/constants/shared';

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
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-safety-orange to-electric-cyan" />
            <span className="font-accent text-sm tracking-widest uppercase text-silver">
              {CONTACT_PAGE.SECTION_LABEL}
            </span>
          </div>
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-none text-cream mb-6">
            {CONTACT_PAGE.HEADING}
          </h1>
          <p className="text-2xl text-electric-cyan font-semibold mb-6">
            {PAGE_DESCRIPTIONS.CONTACT_HERO_SUBTITLE}
          </p>
          <p className="text-xl leading-relaxed text-silver">
            {PAGE_DESCRIPTIONS.CONTACT_PAGE_INTRO}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section>
        <div className="mb-8 border-l-4 border-safety-orange pl-6">
          <span className="font-accent text-sm tracking-wider uppercase text-silver">
            {CONTACT_PAGE.FORM_SECTION_LABEL}
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-cream mt-2 mb-3">
            {CONTACT_PAGE.FORM_HEADING}
          </h2>
          <p className="text-silver leading-relaxed">
            {PAGE_DESCRIPTIONS.CONTACT_FORM_HELP}
          </p>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
