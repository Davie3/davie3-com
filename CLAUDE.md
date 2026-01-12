# CLAUDE.md

Guidance for Claude Code when working with this repository.

> **Core Principle:** Claude plans, Pal thinks.

## MCP Servers Required

| Server                  | Package                                            | Purpose                                      |
| ----------------------- | -------------------------------------------------- | -------------------------------------------- |
| **sequential-thinking** | `@modelcontextprotocol/server-sequential-thinking` | Compact stepwise memory outside token window |
| **pal**                 | `@beehiveinnovations/pal-mcp-server`               | Deep reasoning, code reviews, heavy analysis |

Verify both servers are active before proceeding. If missing, notify user.

## Workflow

**Planning → Delegation → Integration**

1. **Claude (Planner):** Break tasks into executable steps, keep context lightweight
2. **Pal (Thinker):** Execute deep reasoning, code analysis, multi-step thought
3. **Sequential Thinking:** Track progress incrementally, avoid context duplication

### Delegation Rules

| Task Type                         | Handler             | Notes                           |
| --------------------------------- | ------------------- | ------------------------------- |
| High-level planning, summaries    | Claude              | Short reasoning                 |
| Deep analysis, debugging, reviews | Pal                 | Offload automatically           |
| Multi-step reasoning chains       | Pal                 | Pal executes, Claude integrates |
| Context recall, step continuity   | Sequential Thinking | Minimal context                 |

## Response Guidelines

**Optimize for low tokens without sacrificing quality:**

- Be concise and direct
- Use Task tool for file searches
- Read only essential files
- Batch independent tool calls
- Skip verbose confirmations

## Project Overview

**WHAT:** Next.js 16 personal website
**WHY:** Modern web presence with strong performance and security
**HOW:** TypeScript + React 19 + Tailwind CSS 4 + Framer Motion

### Tech Stack

- **Runtime:** Node.js 24.x, npm >=10.0.0
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode, zero `any` usage)
- **Styling:** Tailwind CSS 4, Framer Motion
- **Deployment:** Vercel + Cloudflare CDN
- **Quality:** ESLint (strictTypeChecked), Prettier, Husky pre-commit hooks

### Key Commands

```bash
npm run dev   # Dev server with Turbopack
npm run build # Full production build (format → lint → type-check → build)
npm run fix   # Format + lint --fix
```

### Architecture Pointers

For detailed architecture, read:

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Complete architecture reference
- **[README.md](./README.md)** - Known issues and roadmap

Key locations:

- `src/env.ts` - Environment variable validation (Zod)
- `src/types/` - Type definitions (\*-types.ts files)
- `src/constants/config/` - Configuration files
- `src/components/` - Component library (layout, ui, forms, analytics)
- `src/app/` - Next.js pages and API routes

### Critical Standards

**TypeScript:**

- Prefer `type` over `interface` (ESLint enforced)
- Use `import type { }` for type-only imports
- Zod for runtime validation (env, forms, API responses)
- Type inference via `z.infer<typeof Schema>`

**Components:**

- Server components by default (90%+ of codebase)
- `'use client'` only for interactivity
- kebab-case file naming
- Follow import order: React/Next → Libraries → Utils → Components → Types → Constants

**Styling:**

- Tailwind utility classes via `cn()` helper
- CSS variables for theming
- Framer Motion for animations
- Respect `prefers-reduced-motion`

**Git:**

- Conventional commits (`feat:`, `fix:`, `docs:`, `refactor:`)
- Pre-commit hooks auto-format and lint
- Co-author AI contributions: `Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>`

### Dependency Management

- **Next.js ecosystem:** Exact versions (breaking changes in minors)
- **All others:** Caret ranges (`^x.y.z`) for immediate security patches
- Always commit `package-lock.json`
- CI/CD validates compatibility
