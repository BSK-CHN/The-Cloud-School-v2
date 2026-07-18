import { n as getServerEnv } from "./ssr.mjs";
import { r as createClient } from "../_libs/@supabase/ssr+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/server-8eKJVEFT.js
/**
* Server-only Supabase client using the SERVICE ROLE key.
*
* This key bypasses Row Level Security and must NEVER reach the browser.
* Use it for trusted server writes (leads, registrations, consultations)
* and for read queries inside protected loaders (admin dashboard).
*/
var cached;
function getServerSupabase() {
	const env = getServerEnv();
	if (!cached) cached = createClient(env.supabaseUrl, env.supabaseServiceRoleKey, { auth: {
		autoRefreshToken: false,
		persistSession: false
	} });
	return cached;
}
//#endregion
export { getServerSupabase as t };
