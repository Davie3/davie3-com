# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Response Guidelines

**Optimize for low token usage while maintaining quality:**

- Be concise and direct - avoid preamble, explanations, or summaries unless asked
- Use Task tool for file searches to reduce context consumption
- Read only essential files - don't speculatively read multiple files
- Batch independent tool calls in single messages when possible
- Skip verbose confirmations - brief task completion notes suffice

## Project Overview

Next.js 15 personal website using TypeScript, React 19, Tailwind CSS 4, and Framer Motion. Deployed on Vercel with Cloudflare CDN and security features.

## Common Commands

### Development

```bash
npm run dev                # Start dev server with Turbopack
npm run build             # Full production build (includes format, lint, type-check)
npm run start             # Start production server
```

### Code Quality

```bash
npm run lint              # Run ESLint
npm run type-check        # TypeScript type checking (no emit)
npm run format            # Format all files with Prettier
npm run format:check      # Check formatting without changes
npm run fix               # Run format + lint --fix
```

### Pre-commit

- Husky automatically runs lint-staged on commit
- lint-staged formats and lints staged files

## Architecture Overview

### Environment Variables (src/env.ts)

- Central validation using Zod schema
- Server-side: TURNSTILE*SECRET_KEY, SENDGRID*\* keys
- Client-side: NEXT_PUBLIC_TURNSTILE_SITE_KEY
- ENABLE_ANALYTICS flag for analytics control
- All env vars must be validated through env.ts

### Configuration System (src/lib/config/)

- `redirect-config.ts` - URL mappings imported by next.config.ts
- `seo-config.ts` - SEO and metadata configuration
- `site-metadata.ts` - Site-wide metadata constants
- `github-config.ts` - GitHub API configuration (revalidation intervals)
- `social-config.ts` - Social media links
- `navigation-config.ts` - Navigation structure
- `animation-config.ts` - Framer Motion animation presets

### Security Architecture

- **CSP Headers**: Defined in next.config.ts with strict defaults
- **Input Sanitization**: Two-layer approach (sanitize-html + xss)
  - Contact form sanitizes all user input before email send
  - Function: `sanitizeInput()` in src/app/api/contact/route.ts
- **Cloudflare Turnstile**: CAPTCHA protection on contact form
  - Widget: src/components/ui/turnstile-widget.tsx
  - Validation: Server-side in contact API route
- **Security Headers**: Configured in vercel.json
  - X-Content-Type-Options, X-Frame-Options, HSTS, etc.

### Contact Form Flow

1. Client submits form with Turnstile token
2. API route verifies Turnstile with Cloudflare
3. Input sanitization (two-pass: sanitize-html → xss)
4. Email template generation (HTML + text)
5. SendGrid API sends email
6. Located in: src/app/api/contact/route.ts

### Type System Organization

- **src/types/**: Centralized type definitions
  - `api-types.ts` - GitHub API, ApiError structures
  - `component-types.ts` - Component props
  - `form-types.ts` - Form validation types
  - `personal-types.ts` - Domain-specific types
  - `social-types.ts` - Social media types
- Types are separate from implementation
- Prefer `type` over `interface` per coding standards

### Constants Organization

- **src/constants/**: Application-wide constants
- Use UPPER_SNAKE_CASE naming
- Apply `as const` for immutability
- Constants reference each other to avoid duplication
- Organized by domain (urls, social, personal, forms, github, metadata)

### Component Organization

Components follow strict structure:

1. Type imports with `type` keyword
2. Internal constants (or extract if >3)
3. Component props type definition
4. Framer Motion variants (if animated)
5. Component function

Component categories:

- **src/components/layout/**: Header, footer, navigation, sidebars
- **src/components/ui/**: Reusable UI components (buttons, backgrounds, loading)
- **src/components/forms/**: Form components with validation
- **src/components/analytics/**: Analytics integration
- **src/components/seo/**: Structured data, metadata

### Styling System

- Tailwind CSS 4 with custom color system via CSS variables
- Variables defined in src/app/globals.css
- Use `var(--color-*)` for theme colors
- Custom animations defined in tailwind.config.ts
- Framer Motion for component animations
- Glass morphism effects with backdrop blur utilities

### API Client Pattern

- Centralized in src/lib/api-client.ts
- Standardized error handling via `handleApiError()`
- GitHub repo fetching with ISR (revalidation)
- Generic `apiClient<T>()` wrapper for type-safe fetches

### Utility Organization (src/lib/utils/)

- `async-utils.ts` - Async helpers
- `class-utils.ts` - Tailwind class utilities (cn)
- `date-utils.ts` - Date formatting
- `email-template.ts` - Email template generation
- `environment.ts` - Environment detection
- `string-utils.ts` - String manipulation
- `validation-utils.ts` - Validation helpers

### File Naming Conventions

- **Always use kebab-case**: component-name.tsx, utility-name.ts
- Component files: descriptive names (animated-background.tsx)
- No index.ts barrel exports in components
- Configuration files end with -config.ts
- Type files end with -types.ts
- Utility files end with -utils.ts

### TypeScript Standards

- Use `type` over `interface` (except when extensibility required)
- Always declare function parameter and return types
- Avoid `any` - use `unknown` or proper typing
- Zod for runtime validation (env, forms, API)
- Export inferred types: `z.infer<typeof schema>`
- Import types with `type` keyword: `import type { Foo } from 'bar'`

### Import Order

1. React and Next.js
2. Third-party libraries
3. Internal utilities and hooks
4. Components
5. Types (with `type` keyword)
6. Constants

### Animation Patterns

- Framer Motion variants defined as constants
- Use ANIMATION_DURATIONS constants
- Prefer declarative animations over imperative
- AnimatedBackground component uses Web Animations API for stars

### Deployment Configuration

- **vercel.json**: Function timeouts, caching headers, security headers
- **next.config.ts**: CSP, redirects (from redirect-config), image optimization
- API routes have 10s max duration
- Static assets cached with immutable headers
- API routes bypass cache

### Git and Commits

- Conventional commits: feat:, fix:, docs:, refactor:
- Pre-commit hooks run format + lint via husky/lint-staged
- First line under 50 characters
- Present tense: "Add feature" not "Added feature"
