import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/validations-XDGyLUuA.js
/**
* Shared field rules. Phone accepts Indian formats (+91 / 0-prefixed / 10 digits).
* Email uses zod's built-in check.
*/
var phone = stringType().trim().min(8, "Enter a valid phone number").max(20, "Phone number too long").regex(/^[+]?[\d\s()-]{8,20}$/, "Enter a valid phone number");
var email = stringType().trim().min(3).max(120).email("Enter a valid email");
objectType({ company: stringType().max(0).optional() }).optional();
var ConsultationSchema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(80),
	phone,
	email,
	experience: stringType().trim().min(1, "Required").max(40),
	current: stringType().trim().min(1, "Required").max(80),
	target: stringType().trim().min(1, "Required").max(80),
	preferredTime: stringType().trim().max(80).optional().default(""),
	message: stringType().trim().max(2e3).optional().default(""),
	company: stringType().max(0).optional(),
	turnstileToken: stringType().min(1).optional()
}).strip();
var WorkshopSchema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(80),
	phone,
	email,
	workshop: stringType().trim().min(2, "Select a workshop").max(120),
	company: stringType().max(0).optional(),
	turnstileToken: stringType().min(1).optional()
}).strip();
var ContactSchema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(80),
	phone,
	email,
	subject: stringType().trim().max(120).optional().default(""),
	message: stringType().trim().min(5, "Please add a message").max(2e3),
	company: stringType().max(0).optional(),
	turnstileToken: stringType().min(1).optional()
}).strip();
/** Honeypot guard shared by all forms. */
function isSpam(input) {
	if (input && typeof input === "object" && "company" in input) {
		const v = input.company;
		return typeof v === "string" && v.length > 0;
	}
	return false;
}
//#endregion
export { isSpam as i, ContactSchema as n, WorkshopSchema as r, ConsultationSchema as t };
