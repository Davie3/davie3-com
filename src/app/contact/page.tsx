import { Mail } from 'lucide-react';
import type { Metadata } from 'next';
import type { JSX } from 'react';
import ContactForm from '@/components/forms/contact-form';
import { PAGE_DESCRIPTIONS } from '@/constants/shared';
import { PAGE_METADATA } from '@/lib/config/site-metadata';

export const metadata: Metadata = PAGE_METADATA.CONTACT;

/**
 * Renders the contact page with modern design and functional contact form.
 *
 * @returns The rendered contact page.
 */
export default function ContactPage(): JSX.Element {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-24">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-accent/5 via-purple-accent/5 to-cyan-accent/5 rounded-3xl" />
        <div className="relative glass rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-accent to-purple-accent rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-navy" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                Get In Touch
              </h1>
              <p className="text-slate-dark mt-1">
                {PAGE_DESCRIPTIONS.CONTACT_HERO_SUBTITLE}
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-slate-light">
            {PAGE_DESCRIPTIONS.CONTACT_PAGE_INTRO}
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            Send a Message
          </h2>
          <p className="text-slate-dark">
            {PAGE_DESCRIPTIONS.CONTACT_FORM_HELP}
          </p>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
