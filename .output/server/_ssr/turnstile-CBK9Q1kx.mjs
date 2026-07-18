import { i as TSS_SERVER_FUNCTION } from "./esm-Dova13aH.mjs";
import process from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/turnstile-CBK9Q1kx.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var WINDOW_MS = 6e4;
var MAX_PER_WINDOW = 8;
var buckets = /* @__PURE__ */ new Map();
/**
* Returns true if the identifier is still within its allowance, false if the
* limit is exhausted. Uses a fixed window that resets after `windowMs`.
*/
function rateLimit(identifier, limit = MAX_PER_WINDOW, windowMs = WINDOW_MS) {
	const now = Date.now();
	const existing = buckets.get(identifier);
	if (!existing || existing.resetsAt <= now) {
		buckets.set(identifier, {
			count: 1,
			resetsAt: now + windowMs
		});
		return true;
	}
	if (existing.count >= limit) return false;
	existing.count += 1;
	return true;
}
var SITEVERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
/** True when a Turnstile secret is configured and enforcement is active. */
function isTurnstileEnabled() {
	return !!process.env.TURNSTILE_SECRET_KEY;
}
/**
* Verify a Turnstile token against Cloudflare.
* - Disabled (no secret)  -> allow (dev / not configured).
* - Enabled, no token     -> reject.
* - Enabled, token present -> verify via the siteverify endpoint.
* Fails closed on any verification error.
*/
async function verifyTurnstile(token) {
	const secret = process.env.TURNSTILE_SECRET_KEY;
	if (!secret) return true;
	if (!token) return false;
	try {
		return (await (await fetch(SITEVERIFY, {
			method: "POST",
			headers: { "content-type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams({
				secret,
				response: token
			}).toString()
		})).json()).success === true;
	} catch {
		return false;
	}
}
//#endregion
export { verifyTurnstile as i, isTurnstileEnabled as n, rateLimit as r, createServerRpc as t };
