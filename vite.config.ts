/**
 * Official TanStack Start + Nitro build configuration (Vercel deploy target).
 *
 * This composes the same plugins the framework expects, without the Lovable
 * sandbox wrapper. On Vercel the build runs with NO Cloudflare/Lovable
 * assumptions: Nitro targets the `vercel` preset and emits the Vercel Build
 * Output API format (`.vercel/output`).
 *
 * - `tanstackStart`: file-based routing, SSR framework, and our custom server
 *   entry (`src/server.ts`) which runs the env fail-fast check at startup.
 * - `nitro`: bundles the SSR server. `vercel.functions.env` declares the exact
 *   env vars the serverless function receives — when the `env` array is
 *   present, Vercel injects ONLY those vars into the function's process.env,
 *   so every var read at runtime (see src/lib/env.ts) must be listed here.
 * - `tailwindcss` / `vite-tsconfig-paths` / `@vitejs/plugin-react`: the standard
 *   toolchain (Tailwind v4, `@` path alias, React Fast Refresh).
 */
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  css: {
    transformer: "lightningcss",
  },
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`,
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
    ],
    ignoreOutdatedRequests: true,
  },
  plugins: [
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts
      // (our SSR error wrapper + env fail-fast at bootstrap).
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    nitro({
      preset: "vercel",
      // Explicitly tell Vercel which environment variables the serverless
      // function needs. Nitro's vercel preset spreads `vercel.functions` into
      // the function's .vc-config.json, and Vercel's contract is: when the
      // `env` array is present it injects ONLY those vars into the function's
      // process.env. Without this, custom vars are not reliably delivered to
      // the Build Output API function even when set in the dashboard — causing
      // the "[env] Missing required environment variables" 500 on every request.
      vercel: {
        functions: {
          env: [
            "SUPABASE_URL",
            "SUPABASE_ANON_KEY",
            "SUPABASE_SERVICE_ROLE_KEY",
            "ADMIN_EMAIL",
            "SITE_URL",
            "RESEND_API_KEY",
            "RESEND_FROM",
            "WHATSAPP_NUMBER",
            "TURNSTILE_SECRET_KEY",
          ],
        },
      },
    }),
    viteReact(),
  ],
  server: {
    host: true,
    port: 8080,
  },
});
