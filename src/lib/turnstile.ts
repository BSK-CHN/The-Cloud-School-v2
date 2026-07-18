// Server-side Cloudflare Turnstile verification (audit H1).
//
// Gated on TURNSTILE_SECRET_KEY: if unset (e.g. local dev), verification
// is skipped (returns true) so the app keeps working. Once the secret is
// configured in production, every submission must present a valid token.

const SITEVERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/** True when a Turnstile secret is configured and enforcement is active. */
export function isTurnstileEnabled(): boolean {
  return !!process.env.TURNSTILE_SECRET_KEY;
}

/**
 * Verify a Turnstile token against Cloudflare.
 * - Disabled (no secret)  -> allow (dev / not configured).
 * - Enabled, no token     -> reject.
 * - Enabled, token present -> verify via the siteverify endpoint.
 * Fails closed on any verification error.
 */
export async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // disabled
  if (!token) return false; // enabled but no token

  try {
    const res = await fetch(SITEVERIFY, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }).toString(),
    });
    const json = (await res.json()) as { success?: boolean };
    return json.success === true;
  } catch {
    return false; // fail closed
  }
}
