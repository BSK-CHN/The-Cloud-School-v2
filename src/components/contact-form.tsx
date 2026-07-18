import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/fns/contact";
import { useTurnstile } from "@/hooks/use-turnstile";
import { ContactSchema, type ContactInput } from "@/lib/validations";

/** General "message us" form used in the Contact section. */
export function ContactForm() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", phone: "", email: "", subject: "", message: "", company: "" },
  });

  const ts = useTurnstile();

  const onSubmit = handleSubmit(async (values) => {
    setError(null);
    try {
      const turnstileToken = await ts.execute();
      await submitContact({ data: { ...values, turnstileToken } });
      setDone(true);
      reset();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not send. Try again.");
    }
  });

  if (done) {
    return (
      <div className="grid h-full place-items-center rounded-3xl border border-foreground/10 bg-card p-8 text-center">
        <div>
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-ember/15 text-ember">
            <Check className="h-5 w-5" strokeWidth={3} />
          </div>
          <h3 className="mt-3 font-display text-xl">Message sent!</h3>
          <p className="mt-1 text-sm text-muted-foreground">We'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-foreground/10 bg-card p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Name
          </Label>
          <Input {...register("name")} placeholder="Your name" />
          {errors.name && (
            <p role="alert" className="mt-1 text-xs text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Phone
          </Label>
          <Input {...register("phone")} placeholder="+91" inputMode="tel" />
          {errors.phone && (
            <p role="alert" className="mt-1 text-xs text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <Label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Email
          </Label>
          <Input {...register("email")} type="email" placeholder="you@work.com" />
          {errors.email && (
            <p role="alert" className="mt-1 text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <Label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Message
          </Label>
          <Textarea {...register("message")} rows={4} placeholder="How can we help?" />
          {errors.message && (
            <p role="alert" className="mt-1 text-xs text-destructive">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <input {...register("company")} tabIndex={-1} autoComplete="off" />
      </div>
      <div ref={ts.containerRef} aria-hidden className="hidden" />
      {error && (
        <p role="alert" className="mt-3 text-sm text-destructive">
          {error}
        </p>
      )}
      <Button type="submit" className="mt-4 w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send message"}
      </Button>
    </form>
  );
}
