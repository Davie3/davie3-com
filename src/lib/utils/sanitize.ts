import { decode } from 'entities';
import sanitizeHtml from 'sanitize-html';

/**
 * Strips all HTML/script content from user input and returns clean **plain text**.
 *
 * sanitize-html removes every tag, attribute, and URL scheme; we then decode the
 * HTML entities it emits (e.g. `&amp;` -> `&`) back to raw characters. Decoding is
 * safe because the dangerous structure (tags/scripts) has already been discarded —
 * so the result cannot reintroduce markup.
 *
 * Use this for plain-text sinks where HTML escaping would corrupt the value:
 * email headers (`subject`, `replyTo`) and the plain-text email body.
 * `o'neill@example.com` and `Tom & Jerry` survive unchanged; `<script>` is removed.
 *
 * @param input - The string to sanitize
 * @returns Clean plain-text string with markup removed
 */
export function sanitizeToPlainText(input: string): string {
  const stripped = sanitizeHtml(input, {
    allowedTags: [], // No HTML tags allowed
    allowedAttributes: {}, // No attributes allowed
    disallowedTagsMode: 'discard', // Remove disallowed tags entirely
    allowedSchemes: [], // No URL schemes allowed
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: [],
    allowProtocolRelative: false,
    enforceHtmlBoundary: false,
  });

  return decode(stripped).trim();
}

/**
 * Escapes a plain-text string for safe interpolation into HTML.
 *
 * Apply this only at the HTML boundary (i.e. when injecting a sanitized value
 * into the HTML email template), so that characters like `&`, `<`, and quotes
 * render literally instead of being interpreted as markup.
 *
 * @param input - Plain-text string (should already be run through {@link sanitizeToPlainText})
 * @returns HTML-escaped string
 */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
