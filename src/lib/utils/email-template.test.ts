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
});
