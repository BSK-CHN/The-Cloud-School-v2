import { n as getServerEnv } from "./ssr.mjs";
import { t as getServerSupabase } from "./server-8eKJVEFT.mjs";
import { t as getRequestIP$1 } from "./request-response-Cjsdkqjy.mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { i as verifyTurnstile, n as isTurnstileEnabled, r as rateLimit, t as createServerRpc } from "./turnstile-CBK9Q1kx.mjs";
import { i as isSpam, n as ContactSchema } from "./validations-XDGyLUuA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CRkWYdeu.js
/**
* General contact form. Saves as a consultation-style enquiry (status
* "contact") and notifies the administrator. Reuses the consultations
* table to avoid an extra table for the MVP.
*
* Abuse protection (audit H1): per-IP rate limit + optional Turnstile
* (enforced only when TURNSTILE_SECRET_KEY is configured).
*/
var submitContact_createServerFn_handler = createServerRpc({
	id: "c068662c9c1a513f3d5b10451290b0fe8bd96c4d9086d5412fdc88fe35ce8029",
	name: "submitContact",
	filename: "src/fns/contact.ts"
}, (opts) => submitContact.__executeServer(opts));
var submitContact = createServerFn({ method: "POST" }).validator((d) => ContactSchema.parse(d)).handler(submitContact_createServerFn_handler, async ({ data }) => {
	const input = data;
	if (!rateLimit(`contact:${getRequestIP$1({ xForwardedFor: true }) ?? "unknown"}`, 8, 6e4)) throw new Error("Too many requests. Please try again in a minute.");
	if (isSpam(input)) return {
		ok: true,
		spam: true
	};
	if (isTurnstileEnabled() && !await verifyTurnstile(input.turnstileToken)) throw new Error("Verification failed. Please try again.");
	const { error } = await getServerSupabase().from("consultations").insert({
		name: input.name,
		phone: input.phone,
		email: input.email,
		current_role_name: input.subject || "General enquiry",
		target_role_name: "—",
		experience: "—",
		message: input.message,
		status: "contact"
	});
	if (error) {
		console.error("Contact insert failed:", error.message);
		throw new Error("Could not send your message. Please email us directly.");
	}
	try {
		const { Resend } = await import("../_libs/resend+standardwebhooks.mjs").then((n) => n.n);
		await new Resend(getServerEnv().resendApiKey).emails.send({
			from: getServerEnv().resendFrom,
			to: getServerEnv().adminEmail,
			replyTo: input.email,
			subject: `Contact message: ${input.subject || input.name}`,
			html: `<h2>New contact message</h2><p><b>From:</b> ${input.name} (${input.email}, ${input.phone})</p><p>${input.message.replace(/</g, "&lt;")}</p>`
		});
	} catch (e) {
		console.error("Contact admin email failed:", e);
	}
	return { ok: true };
});
//#endregion
export { submitContact_createServerFn_handler };
