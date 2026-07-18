import { Cloud } from "lucide-react";

import { cn } from "@/lib/utils";

/** Brand logo mark — used in navbar and footer. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground",
        className,
      )}
    >
      <Cloud className="h-4.5 w-4.5" strokeWidth={2} />
      <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-ember shadow-[0_0_0_3px_var(--color-background)]" />
    </div>
  );
}
