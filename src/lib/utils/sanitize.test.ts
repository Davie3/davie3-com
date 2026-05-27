import { describe, expect, it } from 'vitest';

import { escapeHtml, sanitizeToPlainText } from './sanitize';

describe('sanitizeToPlainText', () => {
  it('leaves plain text untouched (aside from trimming)', () => {
    expect(sanitizeToPlainText('  Hello world  ')).toBe('Hello world');
  });

  it('strips HTML tags but keeps their text content', () => {
    expect(sanitizeToPlainText('<b>bold</b> text')).toBe('bold text');
  });

  it('removes script tags and their contents', () => {
    const result = sanitizeToPlainText('<script>alert("xss")</script>safe');
    expect(result).not.toContain('<script');
    expect(result).not.toContain('alert');
    expect(result).toContain('safe');
  });

  it('neutralizes an img onerror payload', () => {
    const result = sanitizeToPlainText('<img src=x onerror="alert(1)">hello');
    expect(result).not.toContain('onerror');
    expect(result).not.toContain('<img');
    expect(result).toContain('hello');
  });

  it('strips anchor tags while preserving link text', () => {
    const result = sanitizeToPlainText('<a href="javascript:alert(1)">click</a>');
    expect(result).not.toContain('<a');
    expect(result).toContain('click');
  });

  // Regression: plain-text fields (email/subject) must not be HTML-escaped,
  // or SMTP headers and the plain-text body get corrupted.
  it('preserves apostrophes in email addresses', () => {
    expect(sanitizeToPlainText("o'neill@example.com")).toBe("o'neill@example.com");
  });

  it('preserves ampersands as raw characters, not entities', () => {
    expect(sanitizeToPlainText("Tom & Jerry's plan")).toBe("Tom & Jerry's plan");
  });

  it('preserves double quotes', () => {
    expect(sanitizeToPlainText('Q3 "review" notes')).toBe('Q3 "review" notes');
  });
});

describe('escapeHtml', () => {
  it('escapes HTML-significant characters', () => {
    expect(escapeHtml('a & b < c > d')).toBe('a &amp; b &lt; c &gt; d');
  });

  it('escapes quotes and apostrophes', () => {
    expect(escapeHtml(`"x" 'y'`)).toBe('&quot;x&quot; &#39;y&#39;');
  });

  it('leaves plain text unchanged', () => {
    expect(escapeHtml('hello world')).toBe('hello world');
  });
});
