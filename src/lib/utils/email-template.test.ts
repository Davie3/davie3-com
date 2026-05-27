import { describe, expect, it } from 'vitest';

import { generateContactFormText, renderContactFormTemplate } from './email-template';

import type { ContactFormTemplateData } from '@/types/email-types';

const data: ContactFormTemplateData = {
  name: 'Grace Hopper',
  email: 'grace@example.com',
  subject: 'Nanoseconds',
  message: 'Line one\nLine two',
  timestamp: 'Monday, January 1, 2024 at 9:00 AM',
};

describe('renderContactFormTemplate', () => {
  it('interpolates all fields into the HTML template', () => {
    const html = renderContactFormTemplate(data);
    expect(html).toContain('Grace Hopper');
    expect(html).toContain('grace@example.com');
    expect(html).toContain('Nanoseconds');
    expect(html).toContain(data.timestamp);
  });

  it('converts message newlines to <br> tags', () => {
    const html = renderContactFormTemplate(data);
    expect(html).toContain('Line one<br>Line two');
  });

  it('leaves no unreplaced placeholders', () => {
    const html = renderContactFormTemplate(data);
    expect(html).not.toMatch(/\{\{\w+\}\}/);
  });

  it('inserts special $-patterns literally (no replacement-pattern expansion)', () => {
    // `$&`, `$$`, etc. in user input must not be treated as regex replacement
    // patterns — otherwise they expand to the matched placeholder text.
    const html = renderContactFormTemplate({
      ...data,
      name: '$&',
      subject: 'cost $$ today',
      message: "weird $' and $` chars",
    });
    expect(html).not.toContain('{{name}}');
    expect(html).not.toContain('{{subject}}');
    expect(html).not.toContain('{{message}}');
    // The `&` in `$&` is escaped, so the literal value lands as `$&amp;`.
    expect(html).toContain('$&amp;');
    expect(html).toContain('cost $$ today');
  });

  it('HTML-escapes interpolated values at the HTML boundary', () => {
    const html = renderContactFormTemplate({
      ...data,
      name: 'Tom & Jerry',
      message: 'a < b & c',
    });
    expect(html).toContain('Tom &amp; Jerry');
    expect(html).toContain('a &lt; b &amp; c');
    // The raw, unescaped form must not leak into the markup.
    expect(html).not.toContain('Tom & Jerry');
  });
});

describe('generateContactFormText', () => {
  it('includes all fields in the plain-text version', () => {
    const text = generateContactFormText(data);
    expect(text).toContain('Grace Hopper');
    expect(text).toContain('grace@example.com');
    expect(text).toContain('Nanoseconds');
    expect(text).toContain('Line one');
    expect(text).toContain(data.timestamp);
  });

  it('does NOT HTML-escape the plain-text version', () => {
    const text = generateContactFormText({ ...data, name: 'Tom & Jerry' });
    expect(text).toContain('Tom & Jerry');
    expect(text).not.toContain('Tom &amp; Jerry');
  });
});
