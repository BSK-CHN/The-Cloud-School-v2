import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitConsultation } from "@/fns/consultation";
import { useTurnstile } from "@/hooks/use-turnstile";
import { ConsultationSchema, type ConsultationInput } from "@/lib/validations";

/**
 * Functional free-consultation form.
 * - Validated client-side (zod) and server-side (same schema).
 * - Honeypot `company` field is visually hidden and never shown to humans.
 * - On success shows a confirmation; on failure shows the error message.
 */
export function LeadForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationInput>({
    resolver: zodResolver(ConsultationSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      experience: "",
      current: "",
      target: "",
      preferredTime: "",
      message: "",
      company: "",
    },
  });

  const ts = useTurnstile();

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    try {
      const turnstileToken = await ts.execute();
      await submitConsultation({ data: { ...values, turnstileToken } });
      setDone(true);
      reset();
    } catch (e) {
      setServerError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  });

  if (done) {
    return (
      <div className="grid h-full min-h-[420px] place-items-center rounded-3xl border border-foreground/10 bg-card p-8 text-center sm:p-10">
        <div>
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ember/15 text-ember">
            <Check className="h-6 w-6" strokeWidth={3} />
          </div>
          <h3 className="mt-4 font-display text-2xl">Thanks — we'll be in touch.</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Our trainer will call you within 24 hours. Prefer instant? Ping us on WhatsApp.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-foreground/10 bg-card p-8 sm:p-10"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <Input {...register("name")} placeholder="Your full name" autoComplete="name" />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <Input {...register("phone")} placeholder="+91" inputMode="tel" autoComplete="tel" />
        </Field>
        <Field label="Email" error={errors.email?.message} className="sm:col-span-2">
          <Input
            {...register("email")}
            type="email"
            placeholder="you@work.com"
            autoComplete="email"
          />
        </Field>
        <Field label="Experience" error={errors.experience?.message}>
          <Input {...register("experience")} placeholder="e.g. 6 years" />
        </Field>
        <Field label="Current role" error={errors.current?.message}>
          <Input {...register("current")} placeholder="Windows Administrator" />
        </Field>
        <Field label="Target role" error={errors.target?.message}>
          <Input {...register("target")} placeholder="Cloud Engineer" />
        </Field>
        <Field label="Preferred time" error={errors.preferredTime?.message}>
          <Input {...register("preferredTime")} placeholder="Weekend / Evening" />
        </Field>
        <Field
          label="Anything else? (optional)"
          error={errors.message?.message}
          className="sm:col-span-2"
        >
          <Textarea {...register("message")} placeholder="Tell us about your goals" rows={3} />
        </Field>
      </div>

      {/* Honeypot: hidden from users, tempting to bots */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input {...register("company")} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div ref={ts.containerRef} aria-hidden className="hidden" />

      {serverError && (
        <p
          role="alert"
          className="mt-4 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Book my free consultation <ArrowRightIcon />
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We reply within 24 hours. No spam, ever.
      </p>
    </form>
  );
}

function ArrowRightIcon() {
  return (
    <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">→</span>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </Label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
