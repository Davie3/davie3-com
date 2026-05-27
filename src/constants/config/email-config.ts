export const EMAIL_CONFIG = {
  CONTACT_FORM: {
    SUBJECT_TEMPLATE: (subject: string, name: string) => `[davie3.com] ${subject} — ${name}`,

    TEXT_TEMPLATE: {
      HEADER: 'New message from your contact form',
      DIVIDER: '─'.repeat(40),
      MESSAGE_DIVIDER: '─'.repeat(8),
      LABELS: {
        NAME: 'Name:',
        EMAIL: 'Email:',
        SUBJECT: 'Subject:',
        RECEIVED: 'Received:',
        MESSAGE: 'Message:',
      },
      FOOTER_TEMPLATE: (name: string) => `Reply directly to this email to respond to ${name}.`,
      SIGNATURE: 'Sent from the davie3.com contact form',
    },
  },
} as const;
