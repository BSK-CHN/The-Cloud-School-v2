import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  Clock,
  Cloud,
  Cpu,
  GraduationCap,
  Layers,
  LineChart,
  MapPin,
  MonitorCog,
  Network,
  Phone,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Workflow,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { LeadForm } from "@/components/lead-form";
import { WorkshopCard } from "@/components/workshop-card";
import { ContactForm } from "@/components/contact-form";
import { Faq } from "@/components/faq";
import {
  ADDRESS,
  EMAIL,
  EMAIL_HREF,
  MAPS_LINK,
  MAP_EMBED,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_LINK,
  WORKSHOPS,
} from "@/lib/constants";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main">
        <Hero />
        <CareerTransformation />
        <FlagshipProgram />
        <WhyUs />
        <Workshops />
        <Roadmaps />
        <Trainer />
        <Testimonials />
        <Consultation />
        <Contact />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- CAREER TRANSFORMATION ---------------- */

function CareerTransformation() {
  const cards = [
    { from: "VMware Administrator", to: "Cloud Engineer", icon: Layers },
    { from: "Network Engineer", to: "Cloud Engineer", icon: Network },
    { from: "Windows Administrator", to: "Cloud Engineer", icon: MonitorCog },
    { from: "Linux Administrator", to: "DevOps Engineer", icon: Cpu },
    { from: "M365 Administrator", to: "Cloud Engineer", icon: Cloud },
    { from: "IT Support Engineer", to: "Cloud Engineer", icon: Users },
  ];
  return (
    <Section
      id="transform"
      eyebrow="Career transformation"
      title="From where you are, to where the industry is going"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ from, to, icon: Icon }) => (
          <div
            key={from}
            className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-card p-6 transition hover:-translate-y-1 hover:border-ember/40 hover:shadow-[0_20px_50px_-20px_rgba(217,119,6,0.35)]"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-ember/10 blur-2xl transition group-hover:bg-ember/25" />
            <div className="relative">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-foreground/5 text-foreground/70">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                From
              </div>
              <div className="mt-1 font-display text-xl">{from}</div>
              <div className="my-3 flex items-center gap-2 text-ember">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-ember/50" />
                <ArrowRight className="h-4 w-4" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">To</div>
              <div className="mt-1 font-display text-2xl">{to}</div>
              <a
                href="#roadmaps"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition hover:text-ember"
              >
                View roadmap <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- FLAGSHIP PROGRAM ---------------- */

function FlagshipProgram() {
  const modules = [
    "Artificial Intelligence",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Terraform",
    "GitHub",
    "CI/CD",
    "Monitoring",
    "Linux",
    "Networking",
    "Real Projects",
    "Resume",
    "Interview",
    "Career Mentoring",
  ];
  return (
    <Section id="program" eyebrow="Flagship program">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <h2 className="text-balance font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            AI-Assisted Cloud Engineering Program
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-muted-foreground">
            A single, comprehensive program that takes you from your current IT role to a
            Cloud/DevOps Engineer — with AI woven into every module, not bolted on.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#consultation"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Book free career consultation{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition hover:bg-foreground/5"
            >
              Ask on WhatsApp
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Course fee shared during your free consultation call.
          </p>
        </div>
        <div className="relative rounded-3xl border border-foreground/10 bg-card p-2">
          <div className="rounded-2xl bg-gradient-to-br from-foreground/[0.03] to-ember/[0.06] p-6 sm:p-8">
            <div className="mb-5 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-ember/15 px-3 py-1 text-xs font-medium text-ember">
                <Sparkles className="h-3 w-3" /> 16 modules
              </span>
              <span className="text-xs text-muted-foreground">Includes</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {modules.map((m) => (
                <div
                  key={m}
                  className="flex items-center gap-2 rounded-xl border border-foreground/8 bg-background/60 px-3 py-2 text-sm backdrop-blur"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-ember" strokeWidth={3} />
                  <span className="truncate">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- WHY US ---------------- */

function WhyUs() {
  const items = [
    {
      icon: Trophy,
      title: "25+ Years Industry Experience",
      body: "Learn from a veteran who's built real enterprise cloud systems.",
    },
    {
      icon: Workflow,
      title: "Hands-on Practical Training",
      body: "Every concept practiced on live AWS, Azure and GCP consoles.",
    },
    {
      icon: Rocket,
      title: "Real-Time Projects",
      body: "Ship production-grade projects you can talk about in interviews.",
    },
    {
      icon: Sparkles,
      title: "AI-Assisted Learning",
      body: "Use AI to accelerate every step — from labs to interview prep.",
    },
    {
      icon: Briefcase,
      title: "Interview Preparation",
      body: "Structured rounds — scenario, whiteboard, behavioural.",
    },
    {
      icon: GraduationCap,
      title: "Resume Preparation",
      body: "Cloud-role-tuned resumes that pass ATS and hiring filters.",
    },
    {
      icon: Users,
      title: "Mock Interviews",
      body: "Realistic mocks with detailed, honest feedback.",
    },
    {
      icon: LineChart,
      title: "Career Guidance",
      body: "One-on-one guidance tailored to your background.",
    },
    {
      icon: ShieldCheck,
      title: "Small Batch Size",
      body: "Personalised attention — you're never just a number.",
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      body: "Weekend and weekday batches designed for working professionals.",
    },
    {
      icon: Check,
      title: "Certificate",
      body: "Course completion certificate + guidance for AWS / Azure certs.",
    },
  ];
  return (
    <Section
      eyebrow="Why The Cloud School"
      title="Built for working IT professionals, not tourists"
      muted
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-2xl border border-foreground/10 bg-card p-6 transition hover:border-ember/40"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-ember/12 text-ember">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-4 font-display text-lg">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- WORKSHOPS ---------------- */

function Workshops() {
  return (
    <Section
      id="workshops"
      eyebrow="Weekend AI workshops"
      title="Two hours. One skill. Every weekend."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WORKSHOPS.map((w) => (
          <WorkshopCard key={w.title} title={w.title} price={w.price} />
        ))}
      </div>
    </Section>
  );
}

/* ---------------- ROADMAPS ---------------- */

function Roadmaps() {
  const roads: { from: string; steps: string[] }[] = [
    { from: "Network Engineer", steps: ["Cloud Engineer", "Solution Architect"] },
    { from: "VMware Administrator", steps: ["Cloud Engineer", "Cloud Architect"] },
    { from: "Windows Administrator", steps: ["Cloud Engineer", "DevOps Engineer"] },
    { from: "Linux Administrator", steps: ["DevOps Engineer", "Platform Engineer"] },
  ];
  return (
    <Section
      id="roadmaps"
      eyebrow="Career roadmaps"
      title="Your path from admin to architect"
      muted
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {roads.map((r) => (
          <div key={r.from} className="rounded-3xl border border-foreground/10 bg-card p-6 sm:p-8">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Starting point
            </div>
            <div className="mt-1 font-display text-2xl">{r.from}</div>
            <div className="mt-6 space-y-3">
              {r.steps.map((s, idx) => (
                <div key={s} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-px bg-ember/40" />
                    <div className="grid h-8 w-8 place-items-center rounded-full border border-ember/40 bg-ember/10 text-ember">
                      <ArrowRight className="h-4 w-4 rotate-90" />
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl border border-foreground/10 bg-background/60 px-4 py-3">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Step {idx + 1}
                    </div>
                    <div className="font-display text-lg">{s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- TRAINER ---------------- */

function Trainer() {
  const skills = [
    "AWS",
    "VMware",
    "Cloud",
    "Infrastructure",
    "Solution Architecture",
    "Enterprise Consulting",
  ];
  return (
    <Section id="trainer" eyebrow="Meet your trainer">
      <div className="grid gap-10 rounded-3xl border border-foreground/10 bg-gradient-to-br from-card to-background p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
        <div className="relative mx-auto">
          <div className="grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-ember to-[oklch(0.45_0.14_35)] font-display text-6xl text-cream shadow-[0_20px_60px_-20px_rgba(217,119,6,0.5)]">
            BSK
          </div>
          <div className="absolute -bottom-2 -right-2 rounded-full border-4 border-background bg-ember px-3 py-1 text-xs font-medium text-cream">
            25+ years
          </div>
        </div>
        <div>
          <h3 className="font-display text-4xl tracking-tight">Senthil Kumar</h3>
          <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
            Founder · Lead Trainer
          </p>
          <p className="mt-5 max-w-2xl text-pretty text-muted-foreground">
            Two and a half decades designing and running enterprise infrastructure — from
            virtualization and networking to multi-cloud architectures. Now teaching the next
            generation of Indian IT professionals how to make that same leap, faster, with AI.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-foreground/15 bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

function Testimonials() {
  const items = [
    {
      name: "Rahul V.",
      role: "Network Engineer → Cloud Engineer",
      body: "The AI-assisted labs made complex AWS services click. Cleared my interview in 3 months.",
    },
    {
      name: "Priya S.",
      role: "Windows Admin → DevOps Engineer",
      body: "Senthil sir's mentoring is unmatched. The mock interviews were the real turning point.",
    },
    {
      name: "Karthik M.",
      role: "VMware Admin → Cloud Architect",
      body: "Real projects, small batch, honest feedback. Best decision I made for my career.",
    },
  ];
  return (
    <Section eyebrow="Student success" title="Careers changed. Roles upgraded." muted>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl border border-foreground/10 bg-card p-6"
          >
            <blockquote className="flex-1 text-pretty text-foreground/85">
              <span className="font-display text-4xl leading-none text-ember">"</span>
              {t.body}
            </blockquote>
            <figcaption className="mt-6 border-t border-foreground/10 pt-4">
              <div className="font-medium">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- CONSULTATION ---------------- */

function Consultation() {
  return (
    <Section
      id="consultation"
      eyebrow="Free career consultation"
      title="A 30-minute call. Zero commitment."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-3xl border border-foreground/10 bg-gradient-to-br from-ember/10 via-card to-card p-8 sm:p-10">
          <p className="text-pretty text-muted-foreground">
            Tell us a bit about your background. We'll map a realistic path from your current role
            into Cloud, DevOps or AI — and share the program details and fee on the call.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Personalised roadmap based on your experience",
              "Honest assessment — not a sales pitch",
              "Fee, timing and batch details shared on the call",
              "Reply within 24 hours",
            ].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" strokeWidth={3} />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-2 text-sm">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-3 text-foreground/80 hover:text-ember"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a
              href={EMAIL_HREF}
              className="flex items-center gap-3 text-foreground/80 hover:text-ember"
            >
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
          </div>
        </div>
        <LeadForm />
      </div>
    </Section>
  );
}

/* ---------------- CONTACT ---------------- */

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Visit us"
      title="6, Manickavasagar Street Pallikaranai, Chennai"
      muted
    >
      <div className="grid gap-4 md:grid-cols-3">
        <ContactCard
          icon={MapPin}
          title="Location"
          body={ADDRESS}
          href={MAPS_LINK}
          hrefLabel="Open in Google Maps"
        />
        <ContactCard
          icon={Phone}
          title="Call"
          body={PHONE_DISPLAY}
          href={PHONE_HREF}
          hrefLabel="Call now"
        />
        <ContactCard
          icon={Mail}
          title="Email"
          body={EMAIL}
          href={EMAIL_HREF}
          hrefLabel="Send email"
        />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="overflow-hidden rounded-3xl border border-foreground/10">
          <iframe
            title="Map showing The Cloud School location"
            src={MAP_EMBED}
            className="h-[380px] w-full grayscale-[0.4]"
            loading="lazy"
          />
        </div>
        <div className="rounded-3xl border border-foreground/10 bg-card p-6 sm:p-8">
          <h3 className="font-display text-xl">Business hours</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex justify-between">
              <span>Monday – Saturday</span>
              <span className="text-foreground">9:00 – 20:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span className="text-foreground">By appointment</span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Get directions or message us — we usually reply within a few hours.
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Directions <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2 text-sm font-medium text-[#128C4A] transition hover:bg-[#25D366]/20"
            >
              Chat <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <ContactForm />
      </div>
    </Section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  body,
  href,
  hrefLabel,
}: {
  icon: typeof MapPin;
  title: string;
  body: string;
  href: string;
  hrefLabel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col rounded-3xl border border-foreground/10 bg-card p-6 transition hover:-translate-y-1 hover:border-ember/40"
    >
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-ember/12 text-ember">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
      <div className="mt-1 font-display text-xl">{body}</div>
      <div className="mt-6 inline-flex items-center gap-1 text-sm text-foreground/70 group-hover:text-ember">
        {hrefLabel} <ArrowUpRight className="h-4 w-4" />
      </div>
    </a>
  );
}

/* ---------------- FAQ ---------------- */

function FaqSection() {
  return (
    <Section eyebrow="FAQ" title="Questions, answered" muted>
      <Faq />
    </Section>
  );
}
