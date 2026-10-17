# Source Audit: ubudchakrahealing.com (Phase 1)

**Audited:** 2026-10-17 · **Source:** https://www.ubudchakrahealing.com/ · **Status:** Phase 1 complete. **Waiting for approval before Phase 2.**

No redesign, application code, configuration change, git push or deployment has been made. The only files created are in this `docs/source-audit/` folder.

## What the site is

Ubud Chakra Healing is a small, single-healer wellness business in Ubud, Bali, centred on **Mr. Ketut** and chakra balancing. It also offers **Palm Reading**, **Melukat (water purification)** and **Balinese Massage**. The site runs on WordPress with the Elated **Kendall** theme, WPBakery, Slider Revolution and Contact Form 7. It has **9 real routes**, about 13 legacy or theme-demo routes, **0 blog posts**, and no booking, pricing, opening hours or testimonials.

## Documents

| File | Contents |
|---|---|
| [01-audit-report.md](01-audit-report.md) | Overview, method, coverage (inspected / partial / inaccessible / broken), limitations, key findings |
| [02-page-inventory.md](02-page-inventory.md) | Every route with status and recommendation; shared components; page-by-page sections |
| [03-content-inventory.md](03-content-inventory.md) | Business facts, CTAs, verbatim page copy, SEO metadata, content priority |
| [04-assets-manifest.csv](04-assets-manifest.csv) | 57 assets: original URL, local path, page/section, dimensions, size, status, concerns |
| [05-brand-reference.md](05-brand-reference.md) | Fonts, type scale, verified and estimated colours, logo variants, visual language, **two-font rule** |
| [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | 27 features with verification level; third-party dependencies |
| [07-responsive-observations.md](07-responsive-observations.md) | Breakpoints and desktop/tablet/mobile behaviour per page |
| [08-issues-gaps-questions.md](08-issues-gaps-questions.md) | Factual conflicts, missing info, content/technical/asset issues, **questions for the client** |
| [09-phase-2-recommendations.md](09-phase-2-recommendations.md) | Proposed IA, content/asset/functionality plans, **mandatory Phase 2 design rules**, acceptance checks |

## Evidence folders

| Path | Contents |
|---|---|
| `content/site-content.json` | Structured, verbatim content for Phase 2 to consume |
| `assets/original/` | 49 original files (≈69 MB, of which 64 MB is one unused video), mirroring the `wp-content/uploads/` year/month paths. **Read-only reference. Never overwrite.** |
| `screenshots/` | 75 full-page captures (25 URLs × 3 viewports) + 10 interaction captures. See `screenshots/INDEX.md` |
| `data/page-text/` | Full visible text per route |
| `data/seo-metadata.csv` | Title, description, robots, canonical, og, H1/H2 per route |
| `data/wp-pages-rest.json`, `data/wp-media-library.json` | WordPress REST exports (page HTML, media records) |
| `data/crawl-summary.json`, `data/interaction-and-style-probe.log` | Raw crawl results and computed-style/interaction log |

## Top findings

1. **Missing essentials:** no prices, durations, hours, booking method, exact address or real social links.
2. **Conflicting facts:** built in 2022 vs healing since 1997; "over 20" vs "more than 15" years; the venue named "Puspa Body Treatment" while the map pins "Nyuh Gading Restaurant and Accomodation".
3. **Heavy duplication:** the same chakra paragraphs appear on 4 pages and are repeated within pages.
4. **Theme demo pages are publicly indexed** (`/reservations/`, `/contact-page-2/`, `/contact-form/`, `/coming-soon/`).
5. **Brand:** a purple lotus logo, gold UI accent (#DEA43E → #F6C478 gradient), Lustria headings and Raleway body text. Five font families are loaded in total.
6. **Defects:** a 404 slider CTA, dead `#` buttons, placeholder social links, a one-word text column on the tablet homepage, an overflowing contact form, and photos and map hidden on mobile About.
7. **Good original photography** (up to 2000×3000) is available locally.

## Phase 2 gate

Phase 2 (Next.js App Router + GSAP rebuild) **must not begin until the user explicitly approves it.** The answers to the client questions in `08` §6 should ideally be collected first.
