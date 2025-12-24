import type { Metadata } from 'next';
import type { JSX } from 'react';
import { PAGE_LAST_MODIFIED } from '@/constants/site-metadata';
import { createPacificDate } from '@/lib/utils/date-utils';

export const metadata: Metadata = {
  title: 'Privacy Policy | David Griffin',
  description:
    'Privacy policy for davie3.com - Learn how I collect, use, and protect your personal information.',
};

export default function PrivacyPage(): JSX.Element {
  return (
    <div className="bg-navy text-slate-light">
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
                Cloudflare Turnstile (Bot Protection) Data
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
              <p className="text-slate-light leading-relaxed mb-6">
                The table below outlines how long different types of data are
                retained, who controls that retention, and links to relevant
                privacy policies for more details.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-slate-light border-collapse">
                  <thead>
                    <tr className="border-b border-slate-dark">
                      <th className="py-3 px-4 font-semibold text-purple-accent">
                        Service
                      </th>
                      <th className="py-3 px-4 font-semibold text-purple-accent">
                        Data Processed
                      </th>
                      <th className="py-3 px-4 font-semibold text-purple-accent">
                        Retention Period
                      </th>
                      <th className="py-3 px-4 font-semibold text-purple-accent">
                        Privacy Policy
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-dark/50">
                      <td className="py-3 px-4">Vercel Analytics</td>
                      <td className="py-3 px-4">Usage data (anonymized)</td>
                      <td className="py-3 px-4">Per Vercel&apos;s policy</td>
                      <td className="py-3 px-4">
                        <a
                          href="https://vercel.com/legal/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-accent hover:text-purple-accent transition-colors underline"
                        >
                          Vercel Privacy Policy
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-dark/50">
                      <td className="py-3 px-4">Cloudflare Web Analytics</td>
                      <td className="py-3 px-4">Usage data (anonymized)</td>
                      <td className="py-3 px-4">
                        Per Cloudflare&apos;s policy
                      </td>
                      <td className="py-3 px-4">
                        <a
                          href="https://www.cloudflare.com/privacypolicy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-accent hover:text-purple-accent transition-colors underline"
                        >
                          Cloudflare Privacy Policy
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-dark/50">
                      <td className="py-3 px-4">Cloudflare Turnstile</td>
                      <td className="py-3 px-4">Bot detection data</td>
                      <td className="py-3 px-4">
                        Ephemeral (not stored by me)
                      </td>
                      <td className="py-3 px-4">
                        <a
                          href="https://www.cloudflare.com/privacypolicy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-accent hover:text-purple-accent transition-colors underline"
                        >
                          Cloudflare Privacy Policy
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-dark/50">
                      <td className="py-3 px-4">SendGrid (Twilio)</td>
                      <td className="py-3 px-4">
                        Email address, message content
                      </td>
                      <td className="py-3 px-4">Per SendGrid&apos;s policy</td>
                      <td className="py-3 px-4">
                        <a
                          href="https://www.twilio.com/legal/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-accent hover:text-purple-accent transition-colors underline"
                        >
                          Twilio Privacy Policy
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-dark/50">
                      <td className="py-3 px-4">GitHub API</td>
                      <td className="py-3 px-4">Public repository data</td>
                      <td className="py-3 px-4">
                        1 hour cache, then refreshed
                      </td>
                      <td className="py-3 px-4">
                        <a
                          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-accent hover:text-purple-accent transition-colors underline"
                        >
                          GitHub Privacy Policy
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-dark/50">
                      <td className="py-3 px-4">Contact Form (My Site)</td>
                      <td className="py-3 px-4">Name, email, message</td>
                      <td className="py-3 px-4">
                        Stored in email inbox indefinitely
                      </td>
                      <td className="py-3 px-4 text-slate-dark">
                        N/A (Contact me to request deletion)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Server Logs</td>
                      <td className="py-3 px-4">Access logs, IP addresses</td>
                      <td className="py-3 px-4">
                        Per Vercel and Cloudflare policies
                      </td>
                      <td className="py-3 px-4">
                        <a
                          href="https://vercel.com/legal/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-accent hover:text-purple-accent transition-colors underline"
                        >
                          Vercel
                        </a>
                        {' | '}
                        <a
                          href="https://www.cloudflare.com/privacypolicy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-accent hover:text-purple-accent transition-colors underline"
                        >
                          Cloudflare
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                  <strong>Cloudflare Turnstile Data:</strong> Contact Cloudflare
                  for data requests
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
                My website does not use cookies for analytics or advertising.
                However, a single strictly necessary cookie may be set by our
                security provider:
              </p>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                Cloudflare Security Cookie
              </h3>
              <p className="text-slate-light leading-relaxed mb-4">
                Cloudflare Turnstile (my bot protection service) may set a
                cookie named <code className="text-blue-accent">__cf_bm</code>{' '}
                to help distinguish between human visitors and automated
                traffic. This cookie is:
              </p>
              <ul className="list-disc list-inside text-slate-light space-y-2 mb-6 ml-4">
                <li>
                  <strong>Strictly necessary</strong> for protecting my contact
                  form from spam and abuse
                </li>
                <li>
                  <strong>Exempt from consent requirements</strong> under
                  privacy regulations (ePrivacy Directive, GDPR)
                </li>
                <li>
                  <strong>Short-lived</strong> and expires after a brief period
                </li>
                <li>
                  <strong>Security-focused</strong> and does not track users
                  across websites
                </li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                What I Don&apos;t Use
              </h3>
              <ul className="list-disc list-inside text-slate-light space-y-2 ml-4">
                <li>No tracking cookies or third-party advertising cookies</li>
                <li>
                  No analytics cookies (Vercel and Cloudflare analytics are
                  cookie-free)
                </li>
                <li>No social media tracking pixels</li>
                <li>No persistent user identification cookies</li>
              </ul>
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
                  <strong>Bot Protection:</strong> Cloudflare Turnstile prevents
                  automated attacks and spam
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
                International Data Transfers
              </h2>
              <p className="text-slate-light leading-relaxed mb-4">
                My website uses third-party services that may process your data
                in countries outside your own, including the United States and
                European Union. These international data transfers are necessary
                to provide the services described in this policy.
              </p>

              <h3 className="text-xl font-medium mb-3 text-purple-accent">
                Data Protection Safeguards
              </h3>
              <p className="text-slate-light leading-relaxed mb-4">
                All third-party services I use maintain appropriate safeguards
                for international data transfers:
              </p>
              <ul className="list-disc list-inside text-slate-light space-y-2 mb-4 ml-4">
                <li>
                  <strong>Vercel:</strong> Uses Standard Contractual Clauses
                  (SCCs) approved by the European Commission for GDPR compliance
                </li>
                <li>
                  <strong>Cloudflare:</strong> Operates globally with data
                  processing agreements and SCCs for GDPR compliance
                </li>
                <li>
                  <strong>SendGrid (Twilio):</strong> Maintains GDPR compliance
                  through SCCs and Privacy Shield frameworks
                </li>
              </ul>
              <p className="text-slate-light leading-relaxed">
                These safeguards ensure that your data receives the same level
                of protection regardless of where it is processed. For more
                details about how each service handles international transfers,
                please refer to the Privacy Policy links in the Data Retention
                table above.
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
