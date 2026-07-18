import { createServerClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

import { getServerEnv } from "@/lib/env";

type Cookie = { name: string; value: string };

function parseCookies(header: string | null): Cookie[] {
  if (!header) return [];
  return header.split(";").map((pair) => {
    const idx = pair.indexOf("=");
    const name = pair.slice(0, idx).trim();
    const value = pair.slice(idx + 1).trim();
    return { name, value };
  });
}

/**
 * Build a Supabase client bound to a server Request's cookies so we can read
 * the current admin session during a route loader. Read-only: we never set
 * cookies inside a loader.
 */
export function getServerSupabaseFromRequest(request: Request): SupabaseClient {
  const env = getServerEnv();
  return createServerClient(env.supabaseUrl, env.supabaseAnonKey, {
    cookies: {
      getAll: () => parseCookies(request.headers.get("cookie")),
      setAll: () => {},
    },
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

/**
 * Returns the authenticated admin user, or null if not logged in / invalid.
 * Used by the /admin loader to gate the dashboard.
 */
export async function getAdminUser(request: Request) {
  try {
    const supabase = getServerSupabaseFromRequest(request);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch {
    return null;
  }
}
