import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/logo";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";

/** Sticky top navigation with scroll-aware glass background. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full border px-3 py-2 transition-all sm:px-5",
            scrolled
              ? "glass border-foreground/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)]"
              : "border-transparent",
          )}
        >
          <a
            href="#top"
            className="flex min-w-0 items-center gap-2.5"
            aria-label="The Cloud School — home"
          >
            <LogoMark />
            <div className="min-w-0 leading-tight">
              <div className="truncate font-display text-[15px] font-medium tracking-tight">
                The Cloud School
              </div>
              <div className="hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
                AI · Cloud · DevOps
              </div>
            </div>
          </a>
          <nav className="flex items-center gap-1" aria-label="Primary">
            <div className="hidden items-center gap-1 pr-2 md:flex">
              {NAV_LINKS.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full px-3 py-1.5 text-sm text-foreground/70 transition hover:bg-foreground/5 hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
            <a
              href="#consultation"
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Book consultation
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex shrink-0 items-center rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-2 text-sm font-medium text-[#128C4A] transition hover:bg-[#25D366]/20"
              aria-label="Chat with trainer on WhatsApp"
            >
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden" aria-hidden>
                WA
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
