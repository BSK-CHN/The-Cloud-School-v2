import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitWorkshop } from "@/fns/workshop";
import { useTurnstile } from "@/hooks/use-turnstile";
import { WorkshopSchema, type WorkshopInput } from "@/lib/validations";

/**
 * Workshop card that expands into a functional registration form.
 * On submit it calls the server fn (persists + notifies) and shows success.
 */
export function WorkshopCard({ title, price }: { title: string; price: string }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<WorkshopInput>({
    resolver: zodResolver(WorkshopSchema),
    defaultValues: { name: "", phone: "", email: "", workshop: title, company: "" },
  });

  const ts = useTurnstile();

  const onSubmit = handleSubmit(async (values) => {
    setError(null);
    try {
      const turnstileToken = await ts.execute();
      await submitWorkshop({ data: { ...values, turnstileToken } });
      setDone(true);
      reset();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not register. Try again.");
    }
  });

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-foreground/10 bg-card p-6 transition hover:-translate-y-1">
      <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-ember/10 blur-2xl transition group-hover:bg-ember/25" />
      <div className="relative">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          <Sparkles className="h-3 w-3 text-ember" /> Workshop
        </div>
        <h3 className="mt-3 font-display text-2xl leading-tight">{title}</h3>
      </div>

      <div className="relative mt-8 flex items-end justify-between">
        <div>
          <div className="font-display text-3xl">{price}</div>
          <div className="text-xs text-muted-foreground">2 hours · live</div>
        </div>
        {!open && !done && (
          <Button size="sm" onClick={() => setOpen(true)}>
            Book seat <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        )}
      </div>

      {open && !done && (
        <form
          onSubmit={onSubmit}
          noValidate
          className="relative mt-6 space-y-3 border-t border-foreground/10 pt-5"
        >
          <Field label="Name" error={errors.name?.message}>
            <Input {...register("name")} placeholder="Your full name" />
          </Field>
          <Field label="Phone" error={errors.phone?.message}>
            <Input {...register("phone")} placeholder="+91" inputMode="tel" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <Input {...register("email")} type="email" placeholder="you@work.com" />
          </Field>
          <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
            <input {...register("company")} tabIndex={-1} autoComplete="off" />
          </div>
          <div ref={ts.containerRef} aria-hidden className="hidden" />
          {error && (
            <p role="alert" className="text-xs text-destructive">
              {error}
            </p>
          )}
          <div className="flex gap-2">
            <Button type="submit" size="sm" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Confirm"}
            </Button>
            <Button type="button" size="sm" variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </form>
      )}

      {done && (
        <div className="relative mt-6 flex items-center gap-2 border-t border-foreground/10 pt-5 text-sm text-ember">
          <Check className="h-4 w-4" strokeWidth={3} /> Seat booked — we'll confirm by email.
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
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
