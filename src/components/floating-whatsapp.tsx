import { MessageCircle } from "lucide-react";

import { WHATSAPP_LINK } from "@/lib/constants";

/** Persistent floating WhatsApp CTA. */
export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with the trainer on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.7)] transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
        <MessageCircle className="h-5 w-5" />
      </span>
      <span className="hidden pr-1 text-sm font-medium sm:inline">Chat with us</span>
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/70" />
      </span>
    </a>
  );
}
