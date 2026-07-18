// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Deploy target. Honored on Vercel (no Lovable sandbox env present); ignored
  // inside the Lovable sandbox, which always forces cloudflare-module.
  nitro: {
    preset: "vercel",
    // Explicitly tell Vercel which environment variables the serverless
    // function needs. Nitro's vercel preset spreads `vercel.functions` into
    // the function's .vc-config.json, and Vercel's contract is: when the
    // `env` array is present it injects ONLY those vars into the function's
    // process.env. Without this, custom vars are not reliably delivered to the
    // Build Output API function even when set in the dashboard — causing the
    // "[env] Missing required environment variables" 500 on every request.
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
  },
});
