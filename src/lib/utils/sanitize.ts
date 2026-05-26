import sanitizeHtml from 'sanitize-html';
import xss from 'xss';

/**
 * Sanitizes user input to prevent XSS attacks and HTML injection.
 *
 * Two-pass defense: first strip all HTML via sanitize-html (no tags, attributes,
 * or URL schemes permitted), then run the result through xss as defense-in-depth.
 *
 * @param input - The string to sanitize
 * @returns Sanitized string safe for use in emails and responses
 */
export function sanitizeInput(input: string): string {
  // First pass: strip all HTML tags
  const htmlStripped = sanitizeHtml(input, {
    allowedTags: [], // No HTML tags allowed
    allowedAttributes: {}, // No attributes allowed
    disallowedTagsMode: 'discard', // Remove disallowed tags entirely
    allowedSchemes: [], // No URL schemes allowed
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: [],
    allowProtocolRelative: false,
    enforceHtmlBoundary: false,
  });

  // Second pass: additional XSS protection
  return xss(htmlStripped, {
    allowList: {}, // No tags allowed
    stripIgnoreTag: true,
    stripIgnoreTagBody: ['script'],
  }).trim();
}
