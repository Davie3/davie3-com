import type { Metadata } from 'next';
import type { JSX } from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy | David Griffin',
  description:
    'Privacy policy for davie3.com - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-navy text-slate-light">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-accent to-purple-accent bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-slate-dark text-lg">
              {/* TODO: Update this date whenever the privacy policy content is modified */}
              Last updated: September 1, 2025
            </p>
          </header>

          <div className="glass rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-accent">
                Introduction
              </h2>
              <p className="text-slate-light leading-relaxed">
                This Privacy Policy describes how I, David Griffin, collect,
                use, and protect your information when you visit my website
                (davie3.com). I am committed to protecting your privacy and
                being transparent about my data practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-accent">
                Information I Collect
              </h2>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                Analytics Data
              </h3>
              <p className="text-slate-light leading-relaxed mb-4">
                I use Cloudflare Web Analytics to understand how visitors
                interact with my website. This service collects:
              </p>
              <ul className="list-disc list-inside text-slate-light space-y-2 mb-6 ml-4">
                <li>Page views and navigation patterns</li>
                <li>Browser type and version</li>
                <li>Operating system information</li>
                <li>Geographic location (country/region level only)</li>
                <li>Referrer information (which site brought you here)</li>
                <li>Device type (desktop, mobile, tablet)</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                Contact Form Data
              </h3>
              <p className="text-slate-light leading-relaxed mb-4">
                When you use my contact form, I collect:
              </p>
              <ul className="list-disc list-inside text-slate-light space-y-2 ml-4">
                <li>Your name</li>
                <li>Your email address</li>
                <li>The message content you provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-accent">
                How I Use Your Information
              </h2>
              <ul className="list-disc list-inside text-slate-light space-y-2 ml-4">
                <li>
                  <strong>Analytics Data:</strong> To understand website usage
                  patterns and improve user experience
                </li>
                <li>
                  <strong>Contact Information:</strong> To respond to your
                  inquiries and communicate with you
                </li>
                <li>
                  <strong>Technical Data:</strong> To ensure website
                  functionality and security
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-accent">
                Third-Party Services
              </h2>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                Cloudflare Analytics
              </h3>
              <p className="text-slate-light leading-relaxed mb-4">
                I use Cloudflare Web Analytics, which is privacy-focused and
                does not use cookies or track individual users across websites.
                Cloudflare processes data in accordance with their privacy
                policy and GDPR compliance standards.
              </p>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                Hosting & CDN
              </h3>
              <p className="text-slate-light leading-relaxed">
                My website is hosted on Vercel and fronted by Cloudflare CDN.
                These services may collect standard web server logs including IP
                addresses, user agents, and access times for security and
                performance purposes. Both services process data in accordance
                with their respective privacy policies and GDPR compliance
                standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-accent">
                Data Retention
              </h2>
              <ul className="list-disc list-inside text-slate-light space-y-2 ml-4">
                <li>
                  <strong>Analytics Data:</strong> Retained by Cloudflare
                  according to their data retention policies
                </li>
                <li>
                  <strong>Contact Form Data:</strong> Retained for as long as
                  necessary to respond to your inquiry, typically up to 2 years
                </li>
                <li>
                  <strong>Server Logs:</strong> Typically retained for 30-90
                  days for security purposes
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-accent">
                Your Rights
              </h2>
              <p className="text-slate-light leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-light space-y-2 ml-4">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-accent">
                Cookies
              </h2>
              <p className="text-slate-light leading-relaxed">
                My website uses minimal cookies for essential functionality.
                Cloudflare Analytics does not use cookies and is designed to be
                privacy-preserving. I do not use tracking cookies or third-party
                advertising cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-accent">
                Security
              </h2>
              <p className="text-slate-light leading-relaxed">
                I implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-accent">
                Changes to This Policy
              </h2>
              <p className="text-slate-light leading-relaxed">
                I may update this Privacy Policy from time to time. I will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-accent">
                Contact Me
              </h2>
              <p className="text-slate-light leading-relaxed">
                If you have any questions about this Privacy Policy or wish to
                exercise your rights, please contact me through my{' '}
                <a
                  href="/contact"
                  className="text-blue-accent hover:text-purple-accent transition-colors underline"
                >
                  contact form
                </a>{' '}
                or reach out via my social media channels.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
