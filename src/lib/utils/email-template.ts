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

  // Convert newlines to HTML breaks for proper email display
  const messageWithBreaks = data.message.replace(/\n/g, '<br>');

  return template
    .replace(/\{\{name\}\}/g, data.name)
    .replace(/\{\{email\}\}/g, data.email)
    .replace(/\{\{subject\}\}/g, data.subject)
    .replace(/\{\{message\}\}/g, messageWithBreaks)
    .replace(/\{\{timestamp\}\}/g, data.timestamp);
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

MESSAGE:
────────
${data.message}

═══════════════════════
Reply directly to this email to respond to ${data.name}.
  `.trim();
};
