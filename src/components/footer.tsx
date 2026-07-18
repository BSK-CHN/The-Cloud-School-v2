import { LogoMark } from "@/components/logo";
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_LINK } from "@/lib/constants";

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-foreground/80 transition hover:text-ember">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <LogoMark />
              <span className="font-display text-lg">The Cloud School</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              AI-assisted Cloud, DevOps and AWS training — built for working IT professionals in
              Chennai.
            </p>
          </div>
          <FooterCol
            title="Program"
            links={[
              ["AI-Assisted Cloud Engineering", "#program"],
              ["Weekend Workshops", "#workshops"],
              ["Career Roadmaps", "#roadmaps"],
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              ["Trainer", "#trainer"],
              ["Consultation", "#consultation"],
              ["Contact", "#contact"],
            ]}
          />
          <FooterCol
            title="Reach out"
            links={[
              [PHONE_DISPLAY, PHONE_HREF],
              [EMAIL, EMAIL_HREF],
              ["WhatsApp", WHATSAPP_LINK],
            ]}
          />
        </div>
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-foreground/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>
            © {new Date().getFullYear()} The Cloud School. 6, Manickavasagar Street Pallikaranai,
            Chennai.
          </div>
          <div>Transforming careers with AI + Cloud + DevOps.</div>
        </div>
      </div>
    </footer>
  );
}
