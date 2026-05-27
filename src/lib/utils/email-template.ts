import { readFileSync } from 'fs';
import { join } from 'path';

import { EMAIL_CONFIG } from '@/constants/config/email-config';
import { escapeHtml } from '@/lib/utils/sanitize';

import type { ContactFormTemplateData } from '@/types/email-types';

/**
 * Renders the contact form email template with provided data.
 *
 * Values arrive as clean plain text (markup already stripped upstream), so we
 * HTML-escape each one here — at the HTML boundary — before interpolating it
 * into the template. The message is escaped first, then its newlines become
 * `<br>` tags (escaping after would neutralize the breaks).
 */
export const renderContactFormTemplate = (data: ContactFormTemplateData): string => {
  const templatePath = join(process.cwd(), 'src/templates/email/contact-form.html');
  const template = readFileSync(templatePath, 'utf-8');

  // Escape, then convert newlines to HTML breaks for proper email display.
  const messageWithBreaks = escapeHtml(data.message).replace(/\n/g, '<br>');

  // Use function replacements: string replacements would interpret `$&`, `$$`,
  // etc. in the (user-supplied) value as special patterns. Callbacks insert the
  // string literally.
  //
  // The message lands in a `white-space: pre-wrap` block, so the template's own
  // indentation around the `{{message}}` placeholder would render as visible
  // whitespace. Consume that surrounding whitespace in the match (the formatter
  // keeps the placeholder on its own indented line) so only the sender's text
  // — and its internal breaks — survives.
  return template
    .replace(/\{\{name\}\}/g, () => escapeHtml(data.name))
    .replace(/\{\{email\}\}/g, () => escapeHtml(data.email))
    .replace(/\{\{subject\}\}/g, () => escapeHtml(data.subject))
    .replace(/>\s*\{\{message\}\}\s*<\/div>/, () => `>${messageWithBreaks}</div>`)
    .replace(/\{\{timestamp\}\}/g, () => escapeHtml(data.timestamp));
};

/**
 * Generates the contact form email text version.
 */
export const generateContactFormText = (data: ContactFormTemplateData): string => {
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
${TEXT_TEMPLATE.SIGNATURE}
  `.trim();
};
