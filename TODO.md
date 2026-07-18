# TODO — The Cloud School

Future work, prioritized. Effort is a rough estimate for one developer already
familiar with the stack (TanStack Start + Tailwind v4 + bun).

**Effort key:** XS = <2h · S = ~half day · M = 1–2 days · L = 3–5 days · XL = 1+ week

---

## High Priority

Business-critical: the site cannot capture leads or be found in search as-is.

| #   | Task                                                                                                                                                     | Why                                                                                  | Effort |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------ |
| H1  | **Wire consultation form to a backend** — replace the fake `setSubmitted` with a `createServerFn` in a `*.server.ts` module that emails/stores the lead. | The form currently sends nothing; every lead is silently lost.                       | M      |
| H2  | **Add form validation** using the already-installed `react-hook-form` + `zod` + `@hookform/resolvers`.                                                   | No real validation today (only native `required`); bad/incomplete leads.             | S      |
| H3  | **SEO essentials**: `robots.txt`, `sitemap.xml`, canonical link, and an `og:image` (+ Twitter image).                                                    | `og:image` is missing despite `summary_large_image`; no crawl guidance.              | S      |
| H4  | **JSON-LD structured data** — `LocalBusiness` + `Course` + `FAQPage`.                                                                                    | Enables rich results / local pack for "AWS training Chennai".                        | S      |
| H5  | **Resolve the shadcn inconsistency** (adopt `@/components/ui` OR delete it + Radix deps).                                                                | 47 unused components sit next to hand-rolled equivalents; blocks consistent UI work. | M      |
| H6  | **Add analytics** (GA4 / Plausible) + WhatsApp/CTA click tracking.                                                                                       | No visibility into traffic or conversion today.                                      | S      |

---

## Medium Priority

Growth and maintainability: needed as the site expands beyond one page.

| #   | Task                                                                                                                                                        | Why                                                    | Effort |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------ |
| M1  | **Extract inline helpers** (`Section`, `LogoMark`, `Field`) from `index.tsx` into `src/components/`.                                                        | `index.tsx` is ~870 lines; helpers should be reusable. | S      |
| M2  | **Add multi-page routes** — About, Courses index, Contact. Use file-based routing + per-route `head` meta.                                                  | More indexable URLs; captures long-tail search.        | M      |
| M3  | **Dynamic course pages** (`courses/$slug`) driven by a data module.                                                                                         | Scales content; each course ranks independently.       | L      |
| M4  | **Move hardcoded content** (copy, modules, testimonials) into a typed data module or lightweight CMS.                                                       | Currently all literals in `index.tsx`; hard to edit.   | M      |
| M5  | **Prune unused dependencies** (recharts, embla, date-fns, sonner, vaul, cmdk, input-otp, react-resizable-panels, tw-animate-css — see ARCHITECTURE.md §10). | Smaller install/build graph, faster CI.                | XS     |
| M6  | **Add `typecheck` script** (`tsc --noEmit`) and run it in the build/lint flow.                                                                              | Build is only `vite build`; type errors slip through.  | XS     |
| M7  | **Self-host fonts** (Fraunces + Inter) instead of Google Fonts.                                                                                             | Removes render-blocking external round trip.           | S      |
| M8  | **Dark mode toggle** — theme provider + switch (tokens already defined in `styles.css`).                                                                    | `.dark` theme exists but is unreachable.               | S      |

---

## Low Priority

Nice-to-have / polish: valuable but not blocking.

| #   | Task                                                                                             | Why                                   | Effort |
| --- | ------------------------------------------------------------------------------------------------ | ------------------------------------- | ------ |
| L1  | **Blog / articles** section (CMS-backed) for SEO content.                                        | Long-term organic growth.             | XL     |
| L2  | **i18n (Tamil)** for the Chennai audience.                                                       | Broader local reach.                  | L      |
| L3  | **Booking/scheduling integration** (e.g. Cal.com) for consultations.                             | Reduces back-and-forth vs. form.      | M      |
| L4  | **Testimonials as a dedicated page** with more social proof / video.                             | Trust building.                       | M      |
| L5  | **Performance pass** on hero effects (large blur blobs, continuous animations, backdrop-filter). | Reduce paint cost on low-end devices. | S      |
| L6  | **Automated tests** — unit (Vitest) + E2E (Playwright) for the form and nav.                     | Safety net as the site grows.         | L      |
| L7  | **Payments / enrollment flow** for workshops (₹199) and the flagship program.                    | Direct monetization.                  | XL     |
| L8  | **Consolidate/simplify the four error-handling layers** once fully understood.                   | Reduce maintenance surface.           | M      |

---

## Notes

- Do not hand-edit `src/routeTree.gen.ts` (generated).
- Follow `AGENTS.md`: do not rewrite pushed git history (breaks Lovable sync).
- New patterns should follow ARCHITECTURE.md §12 ("How to add features").
