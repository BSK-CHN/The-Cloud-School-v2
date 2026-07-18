import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { getServerEnv } from "@/lib/env";

/**
 * Server-only Supabase client using the SERVICE ROLE key.
 *
 * This key bypasses Row Level Security and must NEVER reach the browser.
 * Use it for trusted server writes (leads, registrations, consultations)
 * and for read queries inside protected loaders (admin dashboard).
 */
let cached: SupabaseClient | undefined;

export function getServerSupabase(): SupabaseClient {
  const env = getServerEnv();
  if (!cached) {
    cached = createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
  }
  return cached;
}
