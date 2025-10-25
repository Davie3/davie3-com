import type { Metadata } from 'next';
import type { JSX } from 'react';
import { PAGE_LAST_MODIFIED } from '@/constants/site-metadata';
import { createPacificDate } from '@/lib/utils/date-utils';

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
              Last updated:{' '}
              {createPacificDate(PAGE_LAST_MODIFIED.PRIVACY).toLocaleDateString(
                'en-US',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                },
              )}
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
                I use privacy-focused analytics tools, including Vercel
                Analytics and Cloudflare Web Analytics, to understand how
                visitors interact with my website. These services collect:
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
              <ul className="list-disc list-inside text-slate-light space-y-2 mb-6 ml-4">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your subject line</li>
                <li>The message content you provide</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                CAPTCHA Verification Data
              </h3>
              <p className="text-slate-light leading-relaxed mb-4">
                My contact form uses Cloudflare Turnstile for bot protection.
                This service may collect:
              </p>
              <ul className="list-disc list-inside text-slate-light space-y-2 mb-6 ml-4">
                <li>IP address for verification purposes</li>
                <li>Browser and device information</li>
                <li>Behavioral data to distinguish humans from bots</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                Portfolio Data
              </h3>
              <p className="text-slate-light leading-relaxed mb-4">
                My portfolio page displays public information from my GitHub
                repositories, including:
              </p>
              <ul className="list-disc list-inside text-slate-light space-y-2 mb-6 ml-4">
                <li>Repository names and descriptions</li>
                <li>Programming languages used</li>
                <li>Star and fork counts</li>
                <li>Repository sizes and metadata</li>
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
                  <strong>Portfolio Data:</strong> To showcase my work and
                  technical projects to visitors
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
                Vercel Analytics & Speed Insights
              </h3>
              <p className="text-slate-light leading-relaxed mb-4">
                I also use Vercel Analytics and Speed Insights for performance
                monitoring and to understand user engagement. Like Cloudflare
                Analytics, Vercel&apos;s tools are privacy-friendly, do not use
                cookies for tracking, and anonymize visitor data. All data is
                processed in compliance with GDPR.
              </p>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                Email Processing
              </h3>
              <p className="text-slate-light leading-relaxed mb-4">
                Contact form submissions are processed through SendGrid, a
                third-party email service provider. SendGrid processes your
                contact information to deliver emails and may collect technical
                data such as IP addresses and email engagement metrics. SendGrid
                operates under their own privacy policy and maintains GDPR
                compliance.
              </p>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                GitHub API
              </h3>
              <p className="text-slate-light leading-relaxed mb-4">
                My portfolio page fetches public repository data from
                GitHub&apos;s API to display my projects. This data is publicly
                available and does not require authentication. GitHub may log
                API requests including IP addresses and user agents for their
                own analytics and rate limiting purposes.
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
                  <strong>Analytics Data:</strong> Retained by Vercel and
                  Cloudflare according to their respective data retention
                  policies
                </li>
                <li>
                  <strong>Contact Form Data:</strong> Stored in my email inbox
                  as needed for record-keeping and potential future reference
                </li>
                <li>
                  <strong>Portfolio Data:</strong> Cached for 1 hour, then
                  refreshed from GitHub API
                </li>
                <li>
                  <strong>GitHub API Data:</strong> Not retained locally; data
                  is fetched fresh from GitHub&apos;s public API
                </li>
                <li>
                  <strong>CAPTCHA Data:</strong> Retained by Cloudflare
                  Turnstile according to their data retention policy
                </li>
                <li>
                  <strong>Email Processing Data:</strong> Retained by SendGrid
                  according to their data retention policy
                </li>
                <li>
                  <strong>Server Logs:</strong> Retained by Vercel and
                  Cloudflare according to their respective data retention
                  policies
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-accent">
                Your Rights
              </h2>
              <p className="text-slate-light leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                Data I Control
              </h3>
              <p className="text-slate-light leading-relaxed mb-4">
                For data I directly collect and control (contact form
                submissions):
              </p>
              <ul className="list-disc list-inside text-slate-light space-y-2 mb-6 ml-4">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                Third-Party Services
              </h3>
              <p className="text-slate-light leading-relaxed mb-4">
                For data processed by third-party services (analytics, email,
                hosting), you&apos;ll need to contact those services directly:
              </p>
              <ul className="list-disc list-inside text-slate-light space-y-2 ml-4">
                <li>
                  <strong>Analytics Data:</strong> Contact Vercel or Cloudflare
                  directly for data access/deletion requests
                </li>
                <li>
                  <strong>Email Data:</strong> Contact SendGrid for
                  email-related data requests
                </li>
                <li>
                  <strong>CAPTCHA Data:</strong> Contact Cloudflare for
                  Turnstile data requests
                </li>
                <li>
                  <strong>GitHub Data:</strong> Contact GitHub directly for
                  repository data requests
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-accent">
                Cookies
              </h2>
              <p className="text-slate-light leading-relaxed mb-4">
                My website uses minimal cookies for essential functionality
                only. Specifically:
              </p>
              <ul className="list-disc list-inside text-slate-light space-y-2 mb-4 ml-4">
                <li>No tracking cookies or third-party advertising cookies</li>
                <li>
                  No analytics cookies (Vercel and Cloudflare analytics are
                  cookie-free)
                </li>
                <li>No social media tracking pixels</li>
                <li>No persistent user identification cookies</li>
              </ul>
              <p className="text-slate-light leading-relaxed">
                Any cookies that may be set are for essential website
                functionality only and do not track users across sessions or
                websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-accent">
                Security
              </h2>
              <p className="text-slate-light leading-relaxed mb-4">
                I implement comprehensive security measures to protect your
                personal information:
              </p>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                Technical Security Measures
              </h3>
              <ul className="list-disc list-inside text-slate-light space-y-2 mb-6 ml-4">
                <li>
                  <strong>HTTPS Everywhere:</strong> All data transmission is
                  encrypted using TLS/SSL with HSTS headers
                </li>
                <li>
                  <strong>Content Security Policy (CSP):</strong> Strict CSP
                  headers prevent XSS attacks and unauthorized script execution
                </li>
                <li>
                  <strong>Input Sanitization:</strong> All user inputs are
                  sanitized using multiple layers of XSS protection
                </li>
                <li>
                  <strong>Security Headers:</strong> X-Frame-Options,
                  X-Content-Type-Options, and other security headers protect
                  against common attacks
                </li>
                <li>
                  <strong>CAPTCHA Protection:</strong> Cloudflare Turnstile
                  prevents automated attacks and spam
                </li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                Data Protection
              </h3>
              <ul className="list-disc list-inside text-slate-light space-y-2 ml-4">
                <li>Contact form data is processed server-side only</li>
                <li>No client-side storage of personal information</li>
                <li>Environment variables are validated using Zod schemas</li>
                <li>
                  API endpoints have strict input validation and rate limiting
                </li>
              </ul>

              <p className="text-slate-light leading-relaxed mt-4">
                While I implement these security measures, no method of
                transmission over the internet is 100% secure. I cannot
                guarantee absolute security but strive to use industry best
                practices.
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
