import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";

import { getServerSupabase } from "@/lib/supabase/server";
import { notifyConsultation } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { isTurnstileEnabled, verifyTurnstile } from "@/lib/turnstile";
import { ConsultationSchema, isSpam, type ConsultationInput } from "@/lib/validations";

/**
 * Persist a free-consultation enquiry and notify both parties.
 * Validation runs via the server-fn validator (zod). Spam (honeypot)
 * is accepted but silently dropped — bots get no feedback.
 *
 * Abuse protection (audit H1): per-IP rate limit + optional Turnstile
 * (enforced only when TURNSTILE_SECRET_KEY is configured).
 */
export const submitConsultation = createServerFn({ method: "POST" })
  .validator((d: unknown) => ConsultationSchema.parse(d))
  .handler(async ({ data }) => {
    const input = data as ConsultationInput;

    const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
    if (!rateLimit(`consult:${ip}`, 8, 60_000)) {
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
      experience: input.experience,
      current_role_name: input.current,
      target_role_name: input.target,
      preferred_time: input.preferredTime,
      message: input.message,
      status: "new",
    });

    if (error) {
      console.error("Consultation insert failed:", error.message);
      throw new Error("Could not save your request. Please call us or try again.");
    }

    await notifyConsultation({
      name: input.name,
      phone: input.phone,
      email: input.email,
      experience: input.experience,
      current: input.current,
      target: input.target,
      preferredTime: input.preferredTime,
    });

    return { ok: true } as const;
  });
