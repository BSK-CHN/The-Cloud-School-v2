import { createBrowserClient } from "@supabase/ssr";

import { getClientEnv } from "@/lib/env";

/**
 * Browser Supabase client (ANON key) used for Admin authentication only.
 * The anon key is safe to expose; RLS still protects the data. Sessions
 * are managed by Supabase (cookies) — no manual token handling.
 */
export function getBrowserSupabase() {
  const env = getClientEnv();
  return createBrowserClient(env.supabaseUrl, env.supabaseAnonKey);
}
