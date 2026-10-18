# Phase 2 hand-off

**Built:** 2026-10-17 · **Stack:** Next.js 16.4 (App Router, JavaScript, Cache Components), React 19.3, GSAP 3 + ScrollTrigger, plain CSS. **Status:** deployed.

- **Live site:** https://ubudchakrahealing.vercel.app (Vercel project `ubudchakrahealing`, public production deployment)
- **Source:** https://github.com/harini305/ubudchakrahealing (branch `main`). Every push to `main` deploys to production automatically.
- **Deployment contents:** only the app and `public/` assets. `.vercelignore` excludes `docs/` (audit, screenshots, original assets), `scripts/` and the READMEs.
- **Images:** 59 optimised files (3.0 MB): WebP at 480–1600 px (hero 1920 px) plus one JPEG fallback each. The unused 64 MB video is neither versioned nor deployed.

## What was built

| Route | Notes |
|---|---|
| `/` | Hero with the healer photo, chakra teaser with compact spine, treatments, the healer, a 4-photo gallery, contact band |
| `/treatments` | All 4 treatments (this replaces the orphan `/yoga-treatment/`) |
| `/treatment/[slug]` | `chakra-balancing`, `palm-reading`, `water-purification`, `balinese-massage`. Statically generated; unknown slugs return 404 |
| `/about-us` | The healer, the healing process, location and map. The dead `#` buttons now link to real pages |
| `/what-is-chakra` | Deduplicated copy, the seven-chakra spine (animated on scroll), and an accessible `<details>` disclosure FAQ |
| `/contact-us` | Phone, email, location, map, and a contact form |
| 404, `sitemap.xml`, `robots.txt`, icons, default OG image | |

All slugs match the original site, so the main URLs keep their search history without needing redirects.

## Mandatory rules: how each is met

- **Two font families only.** Arimo for page titles and section headings (h1, h2). It is metric-compatible with Arial, the typeface of the logo's "HEAL FROM WITHIN" tagline, and is open-licensed (OFL). Raleway is used for everything else, including card titles, FAQ questions, chakra names, navigation and forms. Both are self-hosted via `next/font`. The QA census of computed `font-family` and `document.fonts` at 5 widths × 10 routes found only these two. Icon fonts are gone; the two icons are inline SVG.
- **Images.** Only originals from `docs/source-audit/assets/original/` are used (never modified). `npm run images` writes WebP + JPEG derivatives (480–2400 px) to `public/images/`. `next.config.mjs` has `images: { unoptimized: true }` merged into the existing config. Only the hero is priority-loaded; everything else is lazy.
- **Footer.** Compact: logo, phone, email, street, links, ©. No social icons (none are real).
- **Content.** No invented prices, hours, testimonials, FAQs or blog. `price` and `duration` fields exist per treatment in `lib/content.js` (currently `null`). The detail page shows them automatically once they are filled in. See `docs/content-changes.md` for every wording change.
- **Motion.** One hero entrance plus gentle parallax on the hero image; the chakra spine lights up from root to crown on scroll. Everything is disabled under `prefers-reduced-motion`.

## Verified (Chromium, production build)

- 10 routes × 1440 / 1024 / 768 / 390 / 360: no horizontal overflow, exactly one `<h1>`, every `<img>` has alt text, no broken images, no console or page errors. All internal links return 200.
- Original defects T4–T7 fixed: there is no slider; the tablet layout is fluid; the form fits its column; images and the map show on mobile.
- Mobile menu: focus moves inside, Tab is trapped, Esc closes and returns focus, and the menu closes on navigation. The skip link is the first Tab stop.
- Contact form: empty submit shows field errors and focuses the first invalid field. A valid submit with no email provider configured shows a clear "not connected yet, email or call" message and keeps the typed values.
- `npm run lint`: clean. `npm run build`: clean.

**Not run:** Lighthouse, real screen readers, Safari/Firefox, and a real email delivery (no provider credentials yet).

## Before going live

1. **Contact form delivery.** Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` (see `.env.example`), then send a real test message. The rate limit is in-memory and per instance, which is a basic guard only.
2. **Client answers** to `docs/source-audit/08-issues-gaps-questions.md` §6, especially the venue and address, prices, durations, hours, booking method, the health claims, and the rights to `palm-reading` and `melukat` (both used provisionally; A1).
3. **Redirects for legacy URLs** (`/yoga-treatment/`, `/treatment/`, `/reservations/`, `/contact-page-2/`, `/contact-form/`, `/coming-soon/`, `/chackra-meaning`, `/portfolio-*`). Not configured yet, by design: they depend on the hosting and domain plan (question 13). Without redirects they return the branded 404.
4. **`LocalBusiness` JSON-LD.** Add only after the address and hours are confirmed.
5. **Analytics.** None is installed. Add only after the GA4 ownership and consent questions are answered.
6. Set `NEXT_PUBLIC_SITE_URL` if the domain differs from `https://www.ubudchakrahealing.com`.

## Unused on purpose

The 64 MB video (unreviewed), `Chakra.png` and the `ch-*` / `crown-chackra` / banner stock images (rights unverified), and all third-party or theme-demo images. The two 800 px originals (`healing-process`, `healer-treating`) are used only in half-width slots so they don't look soft.

## Commands

```bash
npm install
npm run images   # regenerate derivatives from the originals
npm run dev
npm run build && npm start
```
