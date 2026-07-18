# AGENTS.md

Production web app for **The Cloud School** — a TanStack Start (React) + Nitro
single-page/server-rendered site.

## Deployment

- **Target: Vercel.** Nitro builds to the Vercel Build Output API format
  (`.vercel/output`) using the `vercel` preset (see `vite.config.ts`).
- Serverless function env vars are declared in `vite.config.ts` under
  `nitro.vercel.functions.env` — keep that list in sync with
  `src/lib/env.ts`. All other config lives in Vercel project settings.
- The custom server entry is `src/server.ts` (SSR error wrapper + env
  fail-fast at bootstrap).

## Conventions

- Stack: TypeScript, React 19, Tailwind v4, TanStack Router/Query/Start.
- Path alias `@` → `src/`.
- Server-only code lives under `src/lib/**` and must not be imported by
  client components (enforced by `importProtection`).
