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
        'accent-warm': 'var(--color-accent-warm)',
        navy: 'var(--color-navy)',
        'navy-light': 'var(--color-navy-light)',
        'navy-accent': 'var(--color-navy-accent)',
        'electric-cyan': 'var(--color-electric-cyan)',
        'safety-orange': 'var(--color-safety-orange)',
        cream: 'var(--color-cream)',
        silver: 'var(--color-silver)',
        // Legacy color mappings for backward compatibility
        'slate-light': 'var(--color-cream)',
        'slate-dark': 'var(--color-silver)',
        'blue-accent': 'var(--color-electric-cyan)',
        'cyan-accent': 'var(--color-electric-cyan)',
        primary: {
          DEFAULT: 'var(--color-electric-cyan)',
          foreground: 'var(--color-navy)',
        },
        secondary: {
          DEFAULT: 'var(--color-navy-accent)',
          foreground: 'var(--color-cream)',
        },
        muted: {
          DEFAULT: 'var(--color-navy-light)',
          foreground: 'var(--color-silver)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        accent: ['var(--font-accent)'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.3s ease-out both',
        'slide-in-top': 'slideInFromTop 0.5s ease-out',
        'slide-in-right': 'slideInFromRight 0.3s ease-in-out',
        'slide-out-right': 'slideOutToRight 0.3s ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        slideInFromTop: {
          from: { transform: 'translateY(-100px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        slideInFromRight: {
          from: { transform: 'translateX(100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutToRight: {
          from: { transform: 'translateX(0)', opacity: '1' },
          to: { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      spacing: {
        'screen-minus-header': 'calc(100vh - 4rem)',
      },
      backdropBlur: {
        glass: '16px',
        'glass-mobile': '6px',
        'glass-light': '4px',
      },
    },
  },
  plugins: [],
};

export default config;
