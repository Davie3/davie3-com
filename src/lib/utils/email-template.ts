import { readFileSync } from 'fs';
import { join } from 'path';

import type { ContactFormTemplateData } from '@/types/email-types';

/**
 * Renders the contact form email template with provided data.
 */
export const renderContactFormTemplate = (
  data: ContactFormTemplateData,
): string => {
  const templatePath = join(
    process.cwd(),
    'src/templates/email/contact-form.html',
  );
  const template = readFileSync(templatePath, 'utf-8');

  return template
    .replace(/\{\{name\}\}/g, data.name)
    .replace(/\{\{email\}\}/g, data.email)
    .replace(/\{\{subject\}\}/g, data.subject)
    .replace(/\{\{message\}\}/g, data.message)
    .replace(/\{\{timestamp\}\}/g, data.timestamp)
    .replace(/\{\{ipAddress\}\}/g, data.ipAddress)
    .replace(/\{\{userAgent\}\}/g, data.userAgent)
    .replace(/\{\{isoTimestamp\}\}/g, data.isoTimestamp);
};

/**
 * Generates the contact form email text version.
 */
export const generateContactFormText = (
  data: ContactFormTemplateData,
): string => {
  return `
CONTACT FORM SUBMISSION
═══════════════════════

👤 Name: ${data.name}
📧 Email: ${data.email}
📝 Subject: ${data.subject}
🕒 Received: ${data.timestamp}
🌐 IP: ${data.ipAddress}
🖥️ User Agent: ${data.userAgent}

MESSAGE:
────────
${data.message}

═══════════════════════
Reply directly to this email to respond to ${data.name}.
  `.trim();
};
