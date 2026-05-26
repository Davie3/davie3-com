import { describe, expect, it } from 'vitest';

import { CONTACT_FORM_SCHEMA } from './form-types';

const valid = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  confirmEmail: 'ada@example.com',
  subject: 'Hello there',
  message: 'This is a message that is comfortably long enough to pass validation.',
};

describe('CONTACT_FORM_SCHEMA', () => {
  it('accepts a fully valid submission', () => {
    const result = CONTACT_FORM_SCHEMA.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it('rejects mismatched email confirmation on the confirmEmail path', () => {
    const result = CONTACT_FORM_SCHEMA.safeParse({
      ...valid,
      confirmEmail: 'someone-else@example.com',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.path).toContain('confirmEmail');
    }
  });

  it('rejects an invalid email address', () => {
    const result = CONTACT_FORM_SCHEMA.safeParse({
      ...valid,
      email: 'not-an-email',
      confirmEmail: 'not-an-email',
    });
    expect(result.success).toBe(false);
  });

  it('rejects a name below the minimum length', () => {
    const result = CONTACT_FORM_SCHEMA.safeParse({ ...valid, name: 'A' });
    expect(result.success).toBe(false);
  });

  it('rejects a subject below the minimum length', () => {
    const result = CONTACT_FORM_SCHEMA.safeParse({ ...valid, subject: 'Hi' });
    expect(result.success).toBe(false);
  });

  it('rejects a message below the minimum length', () => {
    const result = CONTACT_FORM_SCHEMA.safeParse({ ...valid, message: 'too short' });
    expect(result.success).toBe(false);
  });
});
