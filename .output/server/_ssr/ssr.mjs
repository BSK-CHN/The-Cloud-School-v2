import process from "node:process";
//#region node_modules/.nitro/vite/services/ssr/index.js
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
/**
* Centralised environment access.
*
* - Server secrets are read from `process.env` and validated once at startup.
*   These MUST never be prefixed with `VITE_` (that would expose them to the client).
* - Public/client values are read from `import.meta.env` and MUST be prefixed
*   with `VITE_` so Vite inlines them into the browser bundle.
*/
var required = (v, name) => {
	if (!v || v.trim() === "") throw new Error(`Missing required environment variable: ${name}`);
	return v;
};
/**
* Read + validate server-only secrets. Throws if a required value is absent.
* `RESEND_FROM` is required (no sandbox default): sending from
* `onboarding@resend.dev` silently fails in production — see audit C2.
*/
function getServerEnv() {
	return {
		supabaseUrl: required(process.env.SUPABASE_URL, "SUPABASE_URL"),
		supabaseAnonKey: required(process.env.SUPABASE_ANON_KEY, "SUPABASE_ANON_KEY"),
		supabaseServiceRoleKey: required(process.env.SUPABASE_SERVICE_ROLE_KEY, "SUPABASE_SERVICE_ROLE_KEY"),
		resendApiKey: required(process.env.RESEND_API_KEY, "RESEND_API_KEY"),
		resendFrom: required(process.env.RESEND_FROM, "RESEND_FROM"),
		adminEmail: required(process.env.ADMIN_EMAIL, "ADMIN_EMAIL"),
		siteUrl: required(process.env.SITE_URL, "SITE_URL").replace(/\/$/, ""),
		whatsappNumber: process.env.WHATSAPP_NUMBER ?? "919840991965"
	};
}
/**
* Fail-fast environment check, called once at server bootstrap (see audit C1).
* If any required variable is missing or empty, throws a single, clear error
* listing ALL of them — so a misconfigured deploy surfaces immediately in logs
* instead of failing cryptically on the first form submission.
*/
function assertServerEnv() {
	const missing = [
		"SUPABASE_URL",
		"SUPABASE_ANON_KEY",
		"SUPABASE_SERVICE_ROLE_KEY",
		"RESEND_API_KEY",
		"RESEND_FROM",
		"ADMIN_EMAIL",
		"SITE_URL"
	].filter((name) => !process.env[name] || process.env[name].trim() === "");
	if (missing.length > 0) throw new Error(`[env] Missing required environment variables: ${missing.join(", ")}. Set these in your deployment platform (Cloudflare / Lovable dashboard) before launch.`);
}
/** Public, client-safe config (only VITE_-prefixed values). */
function getClientEnv() {
	return {
		supabaseUrl: "",
		supabaseAnonKey: "",
		siteUrl: "http://localhost:3000".replace(/\/$/, ""),
		ga4Id: "",
		gscId: "",
		whatsappNumber: "919840991965"
	};
}
assertServerEnv();
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-CcnRrtxx.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default, getServerEnv as n, renderErrorPage as r, getClientEnv as t };
