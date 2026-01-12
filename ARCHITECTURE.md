# Architecture Documentation

Detailed architecture reference for this Next.js personal website.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript with strict mode
- **UI:** React 19, Tailwind CSS 4, Framer Motion
- **Deployment:** Vercel with Cloudflare CDN
- **Analytics:** Cloudflare Web Analytics, Vercel Analytics & Speed Insights

## Runtime Requirements

- Node.js: 24.x
- npm: >=10.0.0

Enforced via `engines` field in package.json.

## Common Commands

### Development

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Full production build (format:check → lint → type-check → build)
npm run start        # Start production server
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking (no emit)
npm run format       # Format all files with Prettier
npm run format:check # Check formatting without changes
npm run fix          # Run format + lint --fix
```

## Dependency Management

### Version Strategy

- **Next.js Ecosystem:** Exact pinning (`next`, `eslint-config-next`)
- **All Other Dependencies:** Caret ranges (`^x.y.z`)

### Rationale

- **Security:** Immediate patch updates without waiting for Dependabot
- **Reproducibility:** `package-lock.json` ensures consistency
- **Stability:** Next.js pinning prevents breaking changes
- **Safety:** CI/CD pipeline catches regressions

### Lock File Discipline

- Always commit `package-lock.json`
- Run `npm install` after pulling changes
- CI/CD validates compatibility

## File Organization

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/contact/       # Contact form API route
│   └── [page]/            # Page routes with layout.tsx, page.tsx, etc.
├── components/
│   ├── analytics/         # Analytics providers
│   ├── forms/             # Form components with validation
│   ├── layout/            # Header, footer, navigation, sidebars
│   ├── seo/               # Structured data, metadata
│   └── ui/                # Reusable UI components
├── constants/
│   ├── config/            # Configuration files (*-config.ts)
│   └── pages/             # Page-specific constants
├── hooks/                 # Custom React hooks
├── lib/
│   └── utils/             # Utility functions (*-utils.ts)
├── types/                 # TypeScript type definitions (*-types.ts)
└── env.ts                 # Environment variable validation
```

## Key Architectural Patterns

### Environment Variables

Location: `src/env.ts`

- Zod validation for all environment variables
- Separate server/client schemas
- Build-time validation prevents runtime errors
- Type-safe access via `getServerEnv()` and `getClientEnv()`

### Configuration System

Location: `src/constants/config/`

- Centralized configuration files
- Type-safe with TypeScript
- Organized by domain (SEO, GitHub, social, navigation, animation)
- Referenced throughout application

### Type System

Location: `src/types/`

- **Prefer `type` over `interface`** (enforced by ESLint)
- Comprehensive Zod schemas for runtime validation
- Type inference via `z.infer<typeof Schema>`
- Domain-separated type files
- Use `readonly` for immutability

### Component Structure

Standard order:

1. `'use client'` directive (when needed)
2. React/Next.js imports
3. Third-party library imports
4. Internal utilities and hooks
5. Components
6. Type imports (with `type` keyword)
7. Constants
8. Component props type
9. Framer Motion variants (if animated)
10. Component function

### Naming Conventions

- **Files:** kebab-case (component-name.tsx, utility-name.ts)
- **Components:** PascalCase
- **Functions:** camelCase
- **Constants:** UPPER_SNAKE_CASE
- **Config files:** \*-config.ts
- **Type files:** \*-types.ts
- **Utility files:** \*-utils.ts

## Security Architecture

### Input Sanitization

Location: `src/app/api/contact/route.ts`

Two-layer approach:

1. `sanitize-html` - Remove dangerous HTML
2. `xss` - Additional XSS protection

Applied to all user input before email send.

### CAPTCHA Protection

- Cloudflare Turnstile on contact form
- Client widget: `src/components/ui/turnstile-widget.tsx`
- Server validation in API route

### Security Headers

Configured in:

- `next.config.ts` - CSP headers
- `vercel.json` - Additional security headers (X-Frame-Options, HSTS, etc.)

### Content Security Policy

Strict CSP with nonces for inline scripts and styles. Configured in `next.config.ts`.

## Data Fetching Patterns

### Server Components (Preferred)

```typescript
export default async function Page() {
  const data = await fetchData(); // Direct async
  return <main>{/* render */}</main>;
}
```

### ISR (Incremental Static Regeneration)

Example: GitHub API integration in `src/app/portfolio/page.tsx`

```typescript
const response = await fetch(GITHUB_API, {
  next: {
    revalidate: 3600, // 1 hour
    tags: ['github-repos'],
  },
});
```

### Error Handling

- Error boundaries via `error.tsx`
- Loading states via `loading.tsx`
- Graceful degradation (return empty arrays on failure)

## Styling System

### Tailwind CSS 4

- CSS variables for theming (defined in `globals.css`)
- Custom color system (navy, electric-cyan, safety-orange, cream)
- Glass morphism via `.glass` utility class
- Custom animations in `tailwind.config.ts`

### Framer Motion

- Variant-based animations
- Centralized configs in `animation-config.ts`
- Respects `prefers-reduced-motion`

### Class Utilities

Use `cn()` from `class-utils.ts` for conditional class merging (clsx + tailwind-merge).

## Performance Optimizations

### Server/Client Boundaries

- 90%+ server components
- Client components only for interactivity
- Dynamic imports for heavy components

### Canvas Rendering

`AnimatedBackground` component:

- Sprite-based rendering (pre-rendered stars)
- Viewport culling
- `requestAnimationFrame` for 60fps
- Layer-based parallax scrolling

### Image Optimization

- Next.js Image component
- WebP format
- Responsive sizes attribute
- Lazy loading by default

## TypeScript Standards

- **Strict mode enabled**
- **Zero `any` usage** (use `unknown` instead)
- **Type-only imports:** `import type { Foo } from 'bar'`
- **Zod for runtime validation** (env, forms, API responses)
- **RO-RO pattern** for functions with multiple parameters

## Import Order

1. React and Next.js
2. Third-party libraries
3. Internal utilities and hooks
4. Components
5. Types (with `type` keyword)
6. Constants

## Git Conventions

- Conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`
- Pre-commit hooks (format + lint via husky/lint-staged)
- First line <50 characters
- Present tense: "Add feature" not "Added feature"
- Co-authored commits include: `Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>`

## Deployment

### Vercel Configuration

Location: `vercel.json`

- Function timeouts (10s for API routes)
- Caching headers
- Security headers

### Next.js Configuration

Location: `next.config.ts`

- CSP headers
- Redirects (from `redirect-config.ts`)
- Image optimization
- Experimental features (View Transitions API)

### Build Process

```bash
npm run build
```

Executes:

1. Clean Next.js cache
2. Format check (Prettier)
3. Lint (ESLint)
4. Type check (TypeScript)
5. Build (Next.js production build)

CI/CD pipeline on Vercel runs this automatically.

## Contact Form Flow

1. Client submits form with Turnstile token
2. API route validates Turnstile with Cloudflare
3. Two-layer input sanitization (sanitize-html → xss)
4. Email template generation (HTML + plain text)
5. SendGrid API sends email
6. Success/error response to client

## Analytics Architecture

Dual analytics setup:

- **Cloudflare Web Analytics** - Privacy-focused, no cookies
- **Vercel Analytics & Speed Insights** - Performance monitoring

Controlled by `NEXT_PUBLIC_ENABLE_ANALYTICS` environment variable.

Graceful degradation when blocked by browser extensions:

- Error handlers suppress console errors
- No impact on user experience
