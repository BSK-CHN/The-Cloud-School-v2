import { z } from "zod";

/**
 * Shared field rules. Phone accepts Indian formats (+91 / 0-prefixed / 10 digits).
 * Email uses zod's built-in check.
 */
const phone = z
  .string()
  .trim()
  .min(8, "Enter a valid phone number")
  .max(20, "Phone number too long")
  .regex(/^[+]?[\d\s()-]{8,20}$/, "Enter a valid phone number");

const email = z.string().trim().min(3).max(120).email("Enter a valid email");

/**
 * Honeypot: bots fill every field. A real user never sees / fills `company`.
 * If it is non-empty we treat the submission as spam and silently succeed
 * (so bots don't learn they were caught).
 */
const honeypot = z.object({ company: z.string().max(0).optional() }).optional();

export const ConsultationSchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your name").max(80),
    phone,
    email,
    experience: z.string().trim().min(1, "Required").max(40),
    current: z.string().trim().min(1, "Required").max(80),
    target: z.string().trim().min(1, "Required").max(80),
    preferredTime: z.string().trim().max(80).optional().default(""),
    message: z.string().trim().max(2000).optional().default(""),
    company: z.string().max(0).optional(),
    turnstileToken: z.string().min(1).optional(),
  })
  .strip();

export const WorkshopSchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your name").max(80),
    phone,
    email,
    workshop: z.string().trim().min(2, "Select a workshop").max(120),
    company: z.string().max(0).optional(),
    turnstileToken: z.string().min(1).optional(),
  })
  .strip();

export const ContactSchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your name").max(80),
    phone,
    email,
    subject: z.string().trim().max(120).optional().default(""),
    message: z.string().trim().min(5, "Please add a message").max(2000),
    company: z.string().max(0).optional(),
    turnstileToken: z.string().min(1).optional(),
  })
  .strip();

export type ConsultationInput = z.infer<typeof ConsultationSchema>;
export type WorkshopInput = z.infer<typeof WorkshopSchema>;
export type ContactInput = z.infer<typeof ContactSchema>;

/** Honeypot guard shared by all forms. */
export function isSpam(input: unknown): boolean {
  if (input && typeof input === "object" && "company" in input) {
    const v = (input as { company?: unknown }).company;
    return typeof v === "string" && v.length > 0;
  }
  return false;
}
