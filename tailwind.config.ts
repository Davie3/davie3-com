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
        'navy-accent': 'var(--color-navy-accent)',
        'slate-light': 'var(--color-slate-light)',
        'slate-dark': 'var(--color-slate-dark)',
        'blue-accent': 'var(--color-blue-accent)',
        'purple-accent': 'var(--color-purple-accent)',
        'cyan-accent': 'var(--color-cyan-accent)',
        primary: {
          DEFAULT: 'var(--color-blue-accent)',
          foreground: 'var(--color-navy)',
        },
        secondary: {
          DEFAULT: 'var(--color-navy-accent)',
          foreground: 'var(--color-slate-light)',
        },
        muted: {
          DEFAULT: 'var(--color-navy-light)',
          foreground: 'var(--color-slate-dark)',
        },
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
