export const EMAIL_CONFIG = {
  CONTACT_FORM: {
    SUBJECT_TEMPLATE: (subject: string, name: string) => `💬 Contact: ${subject} - from ${name}`,

    TEXT_TEMPLATE: {
      HEADER: 'CONTACT FORM SUBMISSION',
      DIVIDER: '═'.repeat(23),
      MESSAGE_DIVIDER: '─'.repeat(8),
      LABELS: {
        NAME: '👤 Name:',
        EMAIL: '📧 Email:',
        SUBJECT: '📝 Subject:',
        RECEIVED: '🕒 Received:',
        MESSAGE: 'MESSAGE:',
      },
      FOOTER_TEMPLATE: (name: string) => `Reply directly to this email to respond to ${name}.`,
    },
  },
} as const;
