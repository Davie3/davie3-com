# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> 🧭 **Core principle:**
> Claude is the planner — Pal is the thinker.

Claude’s role is to:

1. Outline and refine plans.
2. Hand off “thinking” or execution steps to Pal via MCP.
3. Maintain short, efficient memory using Sequential Thinking.

---

## 🔌 Required MCP Servers

| Server                           | Package                                            | Purpose                                                                       |
| -------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------- |
| **`server-sequential-thinking`** | `@modelcontextprotocol/server-sequential-thinking` | Keeps stepwise memory compact and outside Claude’s token window.              |
| **`server-pal`**                 | `@beehiveinnovations/pal-mcp-server`               | Executes deep reasoning, code reviews, or heavy analysis delegated by Claude. |

---

## ⚙️ Setup

```
npm install \
  @modelcontextprotocol/server-sequential-thinking \
  @beehiveinnovations/pal-mcp-server
```

Claude should **verify** both servers are registered before continuing.
If not, return an MCP setup message with instructions.

---

## 🧠 Operating Rules

### 1. Planning vs. Thinking

- **Claude (Planner):**
  - Breaks tasks into clear, executable steps.
  - Keeps context lightweight.
  - Calls Pal for any step requiring long reasoning, code search, or analysis.

- **Pal (Thinker):**
  - Performs the reasoning behind Claude’s plan.
  - Can run tools, evaluate code, or conduct deep multi-step thought.
  - Returns concise, actionable results for Claude to integrate.

Claude should always:

> Plan → Send to Pal → Review → Integrate results.

---

### 2. Sequential Thinking Usage

- Use the **Sequential Thinking MCP** to:
  - Log plans and reasoning steps incrementally.
  - Retrieve or update only what’s needed for the next step.
  - Avoid repeating entire context in prompts.

This keeps token usage minimal and reasoning traceable.

---

### 3. Delegation Guidelines

| Task Type                                 | Who Handles It      | Notes                             |
| ----------------------------------------- | ------------------- | --------------------------------- |
| High-level planning, summaries            | Claude              | Short reasoning, minimal context. |
| Deep analysis, code evaluation, debugging | Pal                 | Automatically offload to Pal.     |
| Multi-step reasoning chains               | Pal                 | Pal executes, Claude reviews.     |
| Context recall / step continuity          | Sequential Thinking | Keeps context compact.            |

---

### 4. Example Flow

```
User: Optimize this function.

Claude: (plan)
1. Analyze performance issues.
2. Ask Pal to benchmark alternatives.
3. Integrate Pal’s findings and rewrite function.

Claude → Pal: “Think deeply about this function’s complexity.”
Pal → Claude: Returns optimized solution.
Claude: Integrates and summarizes final output.
```

---

### 5. Behavior Summary

✅ Claude focuses on **short, strategic prompts**.
✅ Pal handles **thinking-heavy** or **context-expensive** operations.
✅ Sequential Thinking ensures **long-running memory efficiency**.
✅ Never duplicate large context or file contents unless necessary.

---

### 6. Fallback

If Pal or Sequential Thinking MCPs are unavailable:

- Run only minimal reasoning locally.
- Notify the user that deeper “thinking” delegation requires the missing MCP.

# Project Specific

## Response Guidelines

**Optimize for low token usage while maintaining quality:**

- Be concise and direct - avoid preamble, explanations, or summaries unless asked
- Use Task tool for file searches to reduce context consumption
- Read only essential files - don't speculatively read multiple files
- Batch independent tool calls in single messages when possible
- Skip verbose confirmations - brief task completion notes suffice

## Project Overview

Next.js 16 personal website using TypeScript, React 19, Tailwind CSS 4, and Framer Motion. Deployed on Vercel with Cloudflare CDN and security features.

### Runtime Requirements

- **Node.js**: 22.x
- **npm**: >=10.0.0

These are enforced in package.json via engines field.

### Dependency Management

**CI/CD-First Strategy**: Vercel CI/CD pipeline is the primary quality and safety gate for dependency updates.

**Version Strategy:**

- **Next.js Ecosystem (Exact Pinning)**: `next` and `eslint-config-next` use exact versions due to potential breaking changes in minor releases
- **All Other Dependencies (Caret Ranges)**: Use `^x.y.z` to allow automatic patch and minor updates
  - React/React-DOM: `^19.2.1` for rapid security patches
  - Prettier: `^3.7.4` for formatting updates
  - Type definitions: `^x.y.z` (no runtime impact)
  - Libraries: `^x.y.z` (default)

**Rationale:**

- **Security Speed**: Dependabot demonstrated 2+ day delay on critical CVE; caret ranges enable immediate patch updates via `npm install`
- **Reproducibility**: `package-lock.json` (always committed) ensures identical versions across environments
- **Stability**: Next.js pinning prevents unintended framework changes requiring migration effort
- **CI/CD Safety Net**: Build pipeline catches regressions (format, lint, type-check, build)

**Security Monitoring:**

- npm audit before commits
- Manual monitoring of security advisories for React, Next.js
- Subscribe to framework security mailing lists
- Review CVE databases periodically

**Lock File Discipline:**

- `package-lock.json` must always be committed
- Run `npm install` to update lock file when pulling changes
- Caret ranges control WHEN versions update, not reproducibility

**Action**: When adding/updating dependencies:

- Use exact versions only for Next.js ecosystem (`next`, `eslint-config-next`)
- Use caret ranges (`^x.y.z`) for all other packages
- Always commit updated `package-lock.json`
- Rely on CI/CD to validate compatibility

## Common Commands

### Development

```bash
npm run dev                # Start dev server with Turbopack
npm run build             # Full production build (cleans cache, runs format:check, lint, type-check, then builds)
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

### Configuration System (src/constants/config/)

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
  - `api-types.ts` - GitHub API response types, Zod schemas
  - `component-types.ts` - Component prop types
  - `config-types.ts` - Configuration object types
  - `email-types.ts` - Email template types
  - `form-types.ts` - Form validation types
  - `personal-types.ts` - Domain-specific types (Experience, Skill, etc.)
  - `social-types.ts` - Social media types
  - `url-types.ts` - URL mapping types
- Types are separate from implementation
- Prefer `type` over `interface` per coding standards
- All types should be `readonly` where appropriate

### Constants Organization

- **src/constants/**: Application-wide constants
- Use UPPER_SNAKE_CASE naming
- Apply `as const` for immutability
- Constants reference each other to avoid duplication
- Organized by domain:
  - `urls.ts` - External URLs and internal routes
  - `site-metadata.ts` - Site metadata for SEO
  - `shared.ts` - Shared constants across pages
  - `about-page.ts` - About page specific constants
  - `ui-components.ts` - UI component constants
- Extract constants to separate files when >3 constants per component

### Component Organization

Components follow strict structure:

1. `'use client'` directive (only when needed)
2. React and Next.js imports
3. Third-party library imports
4. Internal utilities and hooks
5. Components
6. Type imports (with `type` keyword)
7. Constants (extract to separate file if >3 constants)
8. Component props type definition
9. Framer Motion variants (if animated)
10. Component function

Component categories:

- **src/components/layout/**: Header, footer, navigation, sidebars (app-header, app-footer, nav-link, left-sidebar, right-sidebar, client-mobile-nav)
- **src/components/ui/**: Reusable UI components (animated-background, turnstile-widget, loading-skeleton, page-wrapper, client-layout)
- **src/components/forms/**: Form components with validation (contact-form)
- **src/components/analytics/**: Dual analytics setup (Vercel Analytics + Speed Insights, Cloudflare Web Analytics)
- **src/components/seo/**: Structured data, metadata (structured-data)

### Styling System

- Tailwind CSS 4 with custom color system via CSS variables
- Variables defined in src/app/globals.css
- Use semantic color names from Tailwind config (background, foreground, accent, navy, slate-light, etc.)
- Glass morphism effects via `.glass` utility class (backdrop-blur + bg-opacity)
- Custom animations defined in tailwind.config.ts (fade-in-up, slide-in-top, slide-in-right, slide-out-right)
- Framer Motion for interactive component animations
- Use `cn()` utility from class-utils.ts for conditional class merging

### API Integration Pattern

- GitHub API integration in src/app/portfolio/page.tsx
- Direct fetch with Next.js ISR (Incremental Static Regeneration)
- Zod schema validation via GITHUB_REPO_SCHEMA
- Revalidation interval configured in github-config.ts (3600s = 1 hour)
- Error handling returns empty array on failure (graceful degradation)

### Utility Organization (src/lib/utils/)

- `class-utils.ts` - Tailwind class utilities (cn function using clsx + tailwind-merge)
- `date-utils.ts` - Date formatting utilities
- `email-template.ts` - Email template generation (HTML + plain text)
- `environment.ts` - Environment detection helpers

### File Naming Conventions

- **Always use kebab-case**: component-name.tsx, utility-name.ts
- Component files: descriptive names (animated-background.tsx, contact-form.tsx)
- No index.ts barrel exports in components
- Configuration files end with -config.ts (in src/constants/config/)
- Type files end with -types.ts (in src/types/)
- Utility files end with -utils.ts (in src/lib/utils/)
- Page files: page.tsx, layout.tsx, loading.tsx, error.tsx, not-found.tsx

### TypeScript Standards

- **Prefer `type` over `interface`**: Use `type` for all type definitions including component props, data structures, and unions. This promotes consistency (you need `type` for unions/tuples anyway) and immutability (no declaration merging). Automatically enforced by ESLint (`@typescript-eslint/consistent-type-definitions`). Use `interface` only when you need declaration merging (rare, typically for augmenting third-party modules).
- Always declare function parameter and return types
- Avoid `any` - use `unknown` or proper typing
- Zod for runtime validation (env, forms, API responses)
- Export inferred types: `z.infer<typeof schema>`
- Import types with `type` keyword: `import type { Foo } from 'bar'`
- Use RO-RO pattern (Receive Object, Return Object) for functions with multiple parameters

### Import Order

1. React and Next.js
2. Third-party libraries
3. Internal utilities and hooks
4. Components
5. Types (with `type` keyword)
6. Constants

### Animation Patterns

- Framer Motion variants defined as constants before component
- Animation configurations in src/constants/config/animation-config.ts
- Custom Tailwind animations defined in tailwind.config.ts
- Prefer declarative animations over imperative
- AnimatedBackground component uses Web Animations API for star field effect
- Use staggered animations for list items via `animationDelay` inline styles

### View Transitions

- Uses experimental View Transitions API for smooth page transitions
- Browser support varies - degrades gracefully in unsupported browsers

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
