import {
  ArrowRight,
  Boxes,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  MessageCircle,
  Server,
  Sparkles,
} from "lucide-react";

import { WHATSAPP_LINK } from "@/lib/constants";

function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-ember-soft/40 blur-[100px] animate-drift" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-foreground/10 blur-[120px] animate-drift" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      >
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-foreground/25" />
      </svg>
    </div>
  );
}

function HeroArchitecture() {
  const services = [
    { icon: Cloud, label: "AWS", pos: "top-6 left-[10%]", delay: "0s" },
    { icon: Server, label: "EC2", pos: "top-24 right-[12%]", delay: "1s" },
    { icon: Database, label: "RDS", pos: "top-[45%] left-[6%]", delay: "2s" },
    { icon: Boxes, label: "Kubernetes", pos: "top-[55%] right-[8%]", delay: "0.5s" },
    { icon: GitBranch, label: "CI/CD", pos: "bottom-8 left-[18%]", delay: "1.5s" },
    { icon: Sparkles, label: "AI", pos: "bottom-12 right-[22%]", delay: "0.8s" },
  ];
  return (
    <div className="relative mx-auto mt-20 h-[420px] w-full max-w-5xl">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid h-32 w-32 place-items-center rounded-3xl glass animate-pulse-ring">
          <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-ember/20 to-transparent" />
          <div className="relative flex flex-col items-center gap-1">
            <Cpu className="h-8 w-8 text-ember" strokeWidth={1.5} />
            <span className="text-[10px] font-medium uppercase tracking-widest">Cloud + AI</span>
          </div>
        </div>
      </div>
      <svg
        className="absolute inset-0 h-full w-full text-foreground/15"
        viewBox="0 0 800 400"
        fill="none"
      >
        <ellipse cx="400" cy="200" rx="360" ry="160" stroke="currentColor" strokeDasharray="4 6" />
        <ellipse cx="400" cy="200" rx="260" ry="110" stroke="currentColor" strokeDasharray="2 6" />
      </svg>
      {services.map(({ icon: Icon, label, pos, delay }) => (
        <div
          key={label}
          className={`absolute ${pos} hidden animate-float-slow sm:block`}
          style={{ animationDelay: delay }}
        >
          <div className="flex items-center gap-2 rounded-2xl border border-foreground/10 bg-background/80 px-3 py-2 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)] backdrop-blur">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-ember/15 text-ember">
              <Icon className="h-4 w-4" strokeWidth={2} />
            </div>
            <span className="text-xs font-medium">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      <HeroBackdrop />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
            AI-Assisted Cloud Engineering Program
          </span>
          <h1 className="mt-6 text-balance font-display text-[44px] leading-[1.02] tracking-[-0.03em] sm:text-6xl md:text-7xl">
            Become a{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Cloud Engineer</span>
              <span className="absolute inset-x-0 -bottom-1 -z-0 h-3 bg-ember/30 sm:h-4" />
            </span>{" "}
            <span className="text-muted-foreground">with</span>{" "}
            <span className="bg-gradient-to-br from-ember to-[oklch(0.55_0.19_35)] bg-clip-text text-transparent">
              AI
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Practical, hands-on training for experienced IT professionals ready to transition into
            Cloud, DevOps and AI careers. Taught by a 25+ year industry veteran.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#consultation"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition hover:opacity-90"
            >
              Start your career
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-6 py-3 text-sm font-medium backdrop-blur transition hover:bg-foreground/5"
            >
              Book free consultation
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3 text-sm font-medium text-[#128C4A] transition hover:bg-[#25D366]/20"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <div className="mt-14">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Designed for
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {[
                "VMware Administrators",
                "Network Engineers",
                "Windows Administrators",
                "Linux Administrators",
                "M365 Administrators",
                "IT Support Engineers",
                "Freshers",
              ].map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-foreground/10 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground/75 backdrop-blur"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
        <HeroArchitecture />
      </div>
    </section>
  );
}
