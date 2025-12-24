import { Mail } from 'lucide-react';
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
      {/* Hero Section - Editorial */}
      <section className="relative mb-16">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px w-12 bg-safety-orange" />
              <span className="font-accent text-sm tracking-wider uppercase text-silver">
                {CONTACT_PAGE.SECTION_LABEL}
              </span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-tight text-cream mb-3">
              {CONTACT_PAGE.HEADING}
            </h1>
            <p className="text-xl text-electric-cyan font-semibold mb-4">
              {PAGE_DESCRIPTIONS.CONTACT_HERO_SUBTITLE}
            </p>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-silver max-w-2xl">
            {PAGE_DESCRIPTIONS.CONTACT_PAGE_INTRO}
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="border-l-4 border-safety-orange pl-8">
        <div className="mb-8">
          <span className="font-accent text-sm tracking-wider uppercase text-silver">
            {CONTACT_PAGE.FORM_SECTION_LABEL}
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-cream mt-2 mb-3">
            {CONTACT_PAGE.FORM_HEADING}
          </h2>
          <p className="text-silver">{PAGE_DESCRIPTIONS.CONTACT_FORM_HELP}</p>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
