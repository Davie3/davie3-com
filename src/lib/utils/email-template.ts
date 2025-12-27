import { readFileSync } from 'fs';
import { join } from 'path';

import { EMAIL_CONFIG } from '@/constants/config/email-config';

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
  const { TEXT_TEMPLATE } = EMAIL_CONFIG.CONTACT_FORM;

  return `
${TEXT_TEMPLATE.HEADER}
${TEXT_TEMPLATE.DIVIDER}

${TEXT_TEMPLATE.LABELS.NAME} ${data.name}
${TEXT_TEMPLATE.LABELS.EMAIL} ${data.email}
${TEXT_TEMPLATE.LABELS.SUBJECT} ${data.subject}
${TEXT_TEMPLATE.LABELS.RECEIVED} ${data.timestamp}

${TEXT_TEMPLATE.LABELS.MESSAGE}
${TEXT_TEMPLATE.MESSAGE_DIVIDER}
${data.message}

${TEXT_TEMPLATE.DIVIDER}
${TEXT_TEMPLATE.FOOTER_TEMPLATE(data.name)}
  `.trim();
};
