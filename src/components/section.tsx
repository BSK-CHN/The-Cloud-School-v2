import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Canonical section wrapper used across the site. Extracted from the original
 * inline `Section()` so every section shares spacing, the eyebrow/title header,
 * and the optional muted background.
 */
export function Section({
  id,
  eyebrow,
  title,
  children,
  muted = false,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  muted?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-28", muted ? "bg-secondary/40" : "", className)}
    >
      <div className="mx-auto max-w-7xl px-4">
        {(eyebrow || title) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && (
              <div className="text-xs font-medium uppercase tracking-[0.24em] text-ember">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-3 text-balance font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
