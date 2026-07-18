// In-memory sliding-window rate limiter, keyed by client IP.
//
// NOTE: Cloudflare Workers may run multiple isolates, so this Map lives
// per-isolate. It is defense-in-depth against burst abuse (email bombing,
// DB pollution, cost inflation) for the public lead endpoints. For a hard
// global limit, also configure a Cloudflare WAF rate-limiting rule
// (see the launch summary's manual-config steps).

const WINDOW_MS = 60_000; // 1 minute
const MAX_PER_WINDOW = 8; // per identifier, per window

type Bucket = { count: number; resetsAt: number };

const buckets = new Map<string, Bucket>();

/**
 * Returns true if the identifier is still within its allowance, false if the
 * limit is exhausted. Uses a fixed window that resets after `windowMs`.
 */
export function rateLimit(
  identifier: string,
  limit: number = MAX_PER_WINDOW,
  windowMs: number = WINDOW_MS,
): boolean {
  const now = Date.now();
  const existing = buckets.get(identifier);
  if (!existing || existing.resetsAt <= now) {
    buckets.set(identifier, { count: 1, resetsAt: now + windowMs });
    return true;
  }
  if (existing.count >= limit) return false;
  existing.count += 1;
  return true;
}
