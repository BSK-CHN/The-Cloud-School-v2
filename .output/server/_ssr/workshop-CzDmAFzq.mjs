import { t as getServerSupabase } from "./server-8eKJVEFT.mjs";
import { t as getRequestIP$1 } from "./request-response-Cjsdkqjy.mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { i as verifyTurnstile, n as isTurnstileEnabled, r as rateLimit, t as createServerRpc } from "./turnstile-CBK9Q1kx.mjs";
import { n as notifyWorkshop } from "./email-pwtdYqxW.mjs";
import { i as isSpam, r as WorkshopSchema } from "./validations-XDGyLUuA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/workshop-CzDmAFzq.js
var submitWorkshop_createServerFn_handler = createServerRpc({
	id: "df4735ae4d7feabce25275ff4d6022c5143259955c86e4168d84c41c5145e5dd",
	name: "submitWorkshop",
	filename: "src/fns/workshop.ts"
}, (opts) => submitWorkshop.__executeServer(opts));
var submitWorkshop = createServerFn({ method: "POST" }).validator((d) => WorkshopSchema.parse(d)).handler(submitWorkshop_createServerFn_handler, async ({ data }) => {
	const input = data;
	if (!rateLimit(`workshop:${getRequestIP$1({ xForwardedFor: true }) ?? "unknown"}`, 8, 6e4)) throw new Error("Too many requests. Please try again in a minute.");
	if (isSpam(input)) return {
		ok: true,
		spam: true
	};
	if (isTurnstileEnabled() && !await verifyTurnstile(input.turnstileToken)) throw new Error("Verification failed. Please try again.");
	const { error } = await getServerSupabase().from("workshop_registrations").insert({
		name: input.name,
		phone: input.phone,
		email: input.email,
		workshop: input.workshop,
		amount_inr: 199,
		status: "registered"
	});
	if (error) {
		console.error("Workshop insert failed:", error.message);
		throw new Error("Could not complete registration. Please try again.");
	}
	await notifyWorkshop({
		name: input.name,
		phone: input.phone,
		email: input.email,
		workshop: input.workshop
	});
	return { ok: true };
});
//#endregion
export { submitWorkshop_createServerFn_handler };
