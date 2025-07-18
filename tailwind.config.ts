import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        'foreground-dark': 'var(--color-foreground-dark)',
        accent: 'var(--color-accent)',
        navy: 'var(--color-navy)',
        'navy-light': 'var(--color-navy-light)',
        'slate-light': 'var(--color-slate-light)',
        'slate-dark': 'var(--color-slate-dark)',
        'blue-accent': 'var(--color-blue-accent)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};

export default config;
