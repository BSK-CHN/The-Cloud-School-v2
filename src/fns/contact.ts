import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";

import { getServerEnv } from "@/lib/env";
import { getServerSupabase } from "@/lib/supabase/server";
import { rateLimit } from "@/lib/rate-limit";
import { isTurnstileEnabled, verifyTurnstile } from "@/lib/turnstile";
import { ContactSchema, isSpam, type ContactInput } from "@/lib/validations";

/**
 * General contact form. Saves as a consultation-style enquiry (status
 * "contact") and notifies the administrator. Reuses the consultations
 * table to avoid an extra table for the MVP.
 *
 * Abuse protection (audit H1): per-IP rate limit + optional Turnstile
 * (enforced only when TURNSTILE_SECRET_KEY is configured).
 */
export const submitContact = createServerFn({ method: "POST" })
  .validator((d: unknown) => ContactSchema.parse(d))
  .handler(async ({ data }) => {
    const input = data as ContactInput;

    const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
    if (!rateLimit(`contact:${ip}`, 8, 60_000)) {
      throw new Error("Too many requests. Please try again in a minute.");
    }

    if (isSpam(input)) {
      return { ok: true, spam: true } as const;
    }

    if (isTurnstileEnabled() && !(await verifyTurnstile(input.turnstileToken))) {
      throw new Error("Verification failed. Please try again.");
    }

    const supabase = getServerSupabase();
    const { error } = await supabase.from("consultations").insert({
      name: input.name,
      phone: input.phone,
      email: input.email,
      current_role_name: input.subject || "General enquiry",
      target_role_name: "—",
      experience: "—",
      message: input.message,
      status: "contact",
    });

    if (error) {
      console.error("Contact insert failed:", error.message);
      throw new Error("Could not send your message. Please email us directly.");
    }

    try {
      const { Resend } = await import("resend");
      const resend = new Resend(getServerEnv().resendApiKey);
      await resend.emails.send({
        from: getServerEnv().resendFrom,
        to: getServerEnv().adminEmail,
        replyTo: input.email,
        subject: `Contact message: ${input.subject || input.name}`,
        html: `<h2>New contact message</h2><p><b>From:</b> ${input.name} (${input.email}, ${input.phone})</p><p>${input.message.replace(/</g, "&lt;")}</p>`,
      });
    } catch (e) {
      console.error("Contact admin email failed:", e);
    }

    return { ok: true } as const;
  });
