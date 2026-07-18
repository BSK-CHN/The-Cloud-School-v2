import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";

import { getServerSupabase } from "@/lib/supabase/server";
import { notifyWorkshop } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { isTurnstileEnabled, verifyTurnstile } from "@/lib/turnstile";
import { isSpam, WorkshopSchema, type WorkshopInput } from "@/lib/validations";

export const submitWorkshop = createServerFn({ method: "POST" })
  .validator((d: unknown) => WorkshopSchema.parse(d))
  .handler(async ({ data }) => {
    const input = data as WorkshopInput;

    const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
    if (!rateLimit(`workshop:${ip}`, 8, 60_000)) {
      throw new Error("Too many requests. Please try again in a minute.");
    }

    if (isSpam(input)) {
      return { ok: true, spam: true } as const;
    }

    if (isTurnstileEnabled() && !(await verifyTurnstile(input.turnstileToken))) {
      throw new Error("Verification failed. Please try again.");
    }

    const supabase = getServerSupabase();
    const { error } = await supabase.from("workshop_registrations").insert({
      name: input.name,
      phone: input.phone,
      email: input.email,
      workshop: input.workshop,
      amount_inr: 199,
      status: "registered",
    });

    if (error) {
      console.error("Workshop insert failed:", error.message);
      throw new Error("Could not complete registration. Please try again.");
    }

    await notifyWorkshop({
      name: input.name,
      phone: input.phone,
      email: input.email,
      workshop: input.workshop,
    });

    return { ok: true } as const;
  });
