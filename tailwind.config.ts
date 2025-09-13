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
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-background': 'var(--gradient-background)',
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
