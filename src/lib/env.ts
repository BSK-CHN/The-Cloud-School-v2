/**
 * Centralised environment access.
 *
 * - Server secrets are read from `process.env` and validated once at startup.
 *   These MUST never be prefixed with `VITE_` (that would expose them to the client).
 * - Public/client values are read from `import.meta.env` and MUST be prefixed
 *   with `VITE_` so Vite (via the `vercel.functions.env` contract) inlines them
 *   into the browser bundle.
 */

const required = (v: string | undefined, name: string): string => {
  if (!v || v.trim() === "") {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return v;
};

/**
 * Read + validate server-only secrets. Throws if a required value is absent.
 * `RESEND_FROM` is required (no sandbox default): sending from
 * `onboarding@resend.dev` silently fails in production — see audit C2.
 */
export function getServerEnv() {
  return {
    supabaseUrl: required(process.env.SUPABASE_URL, "SUPABASE_URL"),
    supabaseAnonKey: required(process.env.SUPABASE_ANON_KEY, "SUPABASE_ANON_KEY"),
    supabaseServiceRoleKey: required(
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      "SUPABASE_SERVICE_ROLE_KEY",
    ),
    // Resend is OPTIONAL: the site boots and saves leads without it; notify*()
    // in src/lib/email.ts skips sending when these are empty (see audit C2 fix).
    resendApiKey: process.env.RESEND_API_KEY ?? "",
    resendFrom: process.env.RESEND_FROM ?? "",
    adminEmail: required(process.env.ADMIN_EMAIL, "ADMIN_EMAIL"),
    siteUrl: required(process.env.SITE_URL, "SITE_URL").replace(/\/$/, ""),
    whatsappNumber: process.env.WHATSAPP_NUMBER ?? "919840991965",
  };
}

/**
 * Fail-fast environment check, called once at server bootstrap (see audit C1).
 * If any required variable is missing or empty, throws a single, clear error
 * listing ALL of them — so a misconfigured deploy surfaces immediately in logs
 * instead of failing cryptically on the first form submission.
 */
export function assertServerEnv(): void {
  const requiredVars = [
    "SUPABASE_URL",
    "SUPABASE_ANON_KEY",
    "SUPABASE_SERVICE_ROLE_KEY",
    "ADMIN_EMAIL",
    "SITE_URL",
  ];
  const missing = requiredVars.filter(
    (name) => !process.env[name] || process.env[name]!.trim() === "",
  );
  if (missing.length > 0) {
    // Diagnostic: this runs at ESM module-evaluation (cold-start INIT phase),
    // where Nitro/unenv's buffered console can be discarded when the module
    // load throws. Write synchronously to raw stderr (fd 2) so the line is
    // guaranteed into the log pipe BEFORE the throw. Logs KEY NAMES only.
    try {
      const fs = require("node:fs");
      fs.writeSync(
        2,
        `[env] process.env has ${Object.keys(process.env).length} keys: ` +
          Object.keys(process.env).join(", ") +
          "\n",
      );
    } catch {
      // If require/fs is unavailable, fall back to console (best effort).
      console.error(
        `[env] process.env has ${Object.keys(process.env).length} keys: ` +
          Object.keys(process.env).join(", "),
      );
    }
    throw new Error(
      `[env] Missing required environment variables: ${missing.join(", ")}. ` +
        `Set these in your Vercel project (Project Settings → Environment Variables) before launch.`,
    );
  }
}

/**
 * Email-only env. Kept separate from getServerEnv() so that loading the
 * email module never requires unrelated secrets (e.g. Supabase). Read
 * lazily inside notify* functions, never at module top-level.
 */
export function getEmailEnv() {
  return {
    resendApiKey: required(process.env.RESEND_API_KEY, "RESEND_API_KEY"),
    adminEmail: required(process.env.ADMIN_EMAIL, "ADMIN_EMAIL"),
    siteUrl: (process.env.SITE_URL ?? "").replace(/\/$/, ""),
  };
}

/** Public, client-safe config (only VITE_-prefixed values). */
export function getClientEnv() {
  return {
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? "",
    supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? "",
    siteUrl: (import.meta.env.VITE_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
    ga4Id: import.meta.env.VITE_GA4_ID ?? "",
    gscId: import.meta.env.VITE_GSC_ID ?? "",
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER ?? "919840991965",
  };
}
