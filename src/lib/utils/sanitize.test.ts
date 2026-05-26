import { describe, expect, it } from 'vitest';

import { sanitizeInput } from './sanitize';

describe('sanitizeInput', () => {
  it('leaves plain text untouched (aside from trimming)', () => {
    expect(sanitizeInput('  Hello world  ')).toBe('Hello world');
  });

  it('strips HTML tags but keeps their text content', () => {
    expect(sanitizeInput('<b>bold</b> text')).toBe('bold text');
  });

  it('removes script tags and their contents', () => {
    const result = sanitizeInput('<script>alert("xss")</script>safe');
    expect(result).not.toContain('<script');
    expect(result).not.toContain('alert');
    expect(result).toContain('safe');
  });

  it('neutralizes an img onerror payload', () => {
    const result = sanitizeInput('<img src=x onerror="alert(1)">');
    expect(result).not.toContain('onerror');
    expect(result).not.toContain('<img');
  });

  it('strips anchor tags while preserving link text', () => {
    const result = sanitizeInput('<a href="javascript:alert(1)">click</a>');
    expect(result).not.toContain('javascript:');
    expect(result).not.toContain('<a');
    expect(result).toContain('click');
  });
});
