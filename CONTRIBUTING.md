# Contributing to Davie3.com

## Overview

This is David Griffin's personal website built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4. The site showcases his work as a software developer, content creator, and gamer.

## Development Setup

### Prerequisites

- Node.js v22+
- npm (included with Node.js)

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Format code
npm run format

# Build for production
npm run build
```

## Project Architecture

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React, React Icons
- **Email**: SendGrid integration

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
├── constants/             # Application constants
│   ├── animation.ts       # Animation configurations
│   ├── forms.ts           # Form schemas and messages
│   ├── github.ts          # GitHub API configuration
│   ├── metadata.ts        # Site metadata
│   ├── navigation.ts      # Navigation links
│   ├── personal.ts        # Personal information
│   ├── social.ts          # Social media links
│   └── urls.ts            # URL constants
├── hooks/                 # Custom React hooks
│   └── use-lock-body.ts   # Body scroll lock hook
├── lib/                   # Utility functions and configurations
│   ├── api.ts             # API client functions
│   ├── fonts.ts           # Font configurations
│   ├── utils.ts           # General utilities (cn, formatDate, etc.)
│   └── validations.ts     # Zod schemas and validation helpers
├── types/                 # TypeScript type definitions
│   ├── api.ts             # API-related types
│   ├── components.ts      # Component prop types
│   ├── forms.ts           # Form and validation types
│   ├── index.ts           # Main type exports
│   └── personal.ts        # Personal/domain-specific types
└── env.ts                 # Environment variable validation
```

## Coding Standards

### TypeScript Guidelines

- Use `type` over `interface` for most cases
- Always declare function parameter and return types
- Avoid `any` - use proper typing or `unknown`
- Use zod for runtime validation and type inference

### Component Patterns

- Use function declarations: `export function ComponentName()`
- Extract constants to separate files when >3 per component
- Use descriptive prop types with optional properties
- Implement proper error boundaries

### File Naming

- Use kebab-case for all files: `animated-background.tsx`
- Component files end with `.tsx`
- Utility files end with `.ts`
- Constants files: `component-name.constants.ts`

### Styling

- Use Tailwind CSS utilities over custom CSS
- Group classes logically: layout, spacing, colors, typography
- Use CSS custom properties for theme values
- Implement responsive design with mobile-first approach

## Code Quality

### Linting and Formatting

- ESLint enforces code quality (extends Next.js config)
- Prettier handles code formatting
- Husky runs pre-commit hooks with lint-staged
- All code must pass linting before commits

### Performance

- Use `React.memo` for expensive re-renders
- Implement proper `useMemo` and `useCallback` usage
- Lazy load components when appropriate
- Optimize images and assets

### Accessibility

- Use semantic HTML elements
- Implement proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios

## Development Workflow

### Git Workflow

- Use conventional commit messages: `feat:`, `fix:`, `docs:`
- Keep commits focused and atomic
- Write descriptive commit messages
- Rebase feature branches before merging

### Branch Naming

- Feature branches: `feature/component-name`
- Bug fixes: `fix/issue-description`
- Documentation: `docs/update-description`

### Pull Request Process

1. Create feature branch from main
2. Implement changes following coding standards
3. Add tests for new functionality
4. Update documentation if needed
5. Ensure all checks pass (lint, format, build)
6. Create pull request with clear description

## Environment Variables

Required environment variables (see `.env.local`):

```
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_TO_EMAIL=your_email@example.com
SENDGRID_FROM_EMAIL=noreply@yourdomain.com
```

## Component Development

### Creating New Components

1. Create component file in `src/components/`
2. Use TypeScript with proper prop types
3. Implement responsive design
4. Add animations with Framer Motion if needed
5. Export component with named export

### Component Template

```typescript
'use client'; // Only if client-side features needed

import { type ComponentProps } from 'react';
import { motion, type Variants } from 'framer-motion';

type ComponentNameProps = {
  title: string;
  variant?: 'default' | 'highlighted';
  className?: string;
};

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function ComponentName({
  title,
  variant = 'default',
  className = ''
}: ComponentNameProps) {
  return (
    <motion.div
      className={`base-styles ${className}`}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {title}
    </motion.div>
  );
}
```

## Testing

### Testing Strategy

- Unit tests for utility functions
- Component tests for user interactions
- Integration tests for API routes
- E2E tests for critical user flows

### Testing Guidelines

- Test behavior, not implementation
- Use semantic queries in component tests
- Mock external dependencies
- Test error states and edge cases

## Deployment

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server locally
npm start
```

### Environment Setup

- Ensure all environment variables are configured
- Test email functionality with SendGrid
- Verify all external links and integrations

## Performance Monitoring

### Core Web Vitals

- Monitor Largest Contentful Paint (LCP)
- Track First Input Delay (FID)
- Measure Cumulative Layout Shift (CLS)

### Optimization Checklist

- [ ] Images optimized and properly sized
- [ ] Fonts loaded efficiently
- [ ] JavaScript bundles analyzed and optimized
- [ ] CSS purged of unused styles
- [ ] API routes optimized for performance

## Troubleshooting

### Common Issues

- **Build failures**: Check TypeScript errors and missing dependencies
- **Styling issues**: Verify Tailwind CSS configuration and purging
- **Animation problems**: Check Framer Motion component structure
- **Email not sending**: Verify SendGrid API key and configuration

### Debug Tools

- Next.js built-in debugging
- React Developer Tools
- Tailwind CSS IntelliSense
- TypeScript error reporting

## Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### Project Links

- **Website**: [davie3.com](https://davie3.com)
- **GitHub**: [github.com/davie3](https://github.com/davie3)
- **LinkedIn**: [linkedin.com/in/davie3](https://linkedin.com/in/davie3)

## Contact

For questions about contributing to this project, reach out to David Griffin:

- Email: Contact form on website
- GitHub: [@davie3](https://github.com/davie3)
- LinkedIn: [David Griffin](https://linkedin.com/in/davie3)
