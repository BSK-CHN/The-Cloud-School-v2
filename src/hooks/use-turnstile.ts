import { useEffect, useRef, useState } from "react";

// Minimal invisible Cloudflare Turnstile integration (audit H1).
// Gated on VITE_TURNSTILE_SITE_KEY: when unset (local dev) the hook
// is a no-op and execute() resolves to "" so submissions work unchanged.

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

interface TurnstileApi {
  render: (el: string | HTMLElement, opts: Record<string, unknown>) => string;
  execute: (id: string, opts?: Record<string, unknown>) => void;
  reset: (id: string) => void;
  ready: (cb: () => void) => void;
}

const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY ?? "";
const API_JS = "https://challenges.cloudflare.com/turnstile/v0/api.js";

export interface Turnstile {
  /** Site key, or "" when Turnstile is disabled. */
  sitekey: string;
  /** Ref to attach to a hidden container div. */
  containerRef: React.RefObject<HTMLDivElement | null>;
  /** Resolve a fresh token (or "" when disabled). */
  execute: () => Promise<string>;
}

export function useTurnstile(): Turnstile {
  const [token, setToken] = useState("");
  const widgetId = useRef<string | null>(null);
  const pending = useRef<((t: string) => void) | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!SITE_KEY || typeof document === "undefined") return;
    let cancelled = false;

    const init = () => {
      const api = window.turnstile;
      if (cancelled || !api || !containerRef.current || widgetId.current) return;
      widgetId.current = api.render(containerRef.current, {
        sitekey: SITE_KEY,
        size: "invisible",
        callback: (t: string) => {
          setToken(t);
          pending.current?.(t);
          pending.current = null;
        },
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
      });
    };

    if (window.turnstile) init();
    else {
      const s = document.createElement("script");
      s.src = API_JS;
      s.async = true;
      s.onload = () => init();
      document.head.appendChild(s);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  const execute = (): Promise<string> =>
    new Promise((resolve) => {
      if (!SITE_KEY) return resolve(""); // disabled
      if (!widgetId.current || !window.turnstile) return resolve("");
      pending.current = resolve;
      window.turnstile.execute(widgetId.current);
    });

  return { sitekey: SITE_KEY, containerRef, execute };
}
