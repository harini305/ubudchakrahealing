# 06 — Functionality & Technical Dependencies

Verification levels: **Observed** · **Interaction tested** · **Functionality verified** · **Partially verified** · **Unverified**.

| # | Feature | Where | Level | Finding | Phase 2 consideration |
|---|---|---|---|---|---|
| 1 | Primary navigation (5 links) | All pages | **Functionality verified** | All 5 targets return 200. The active state is gold | Rebuild as Next.js `<Link>` routes |
| 2 | Sticky header on scroll | Desktop | **Interaction tested** | A fixed 58px header appears after scrolling (`.eltd-sticky-header.header-appear`). There is no sticky header on mobile/tablet | Decide on sticky behaviour; must not cover anchor targets or the footer |
| 3 | Mobile menu | ≤1024px | **Functionality verified** | The hamburger opens a white dropdown list with 5 links. The header is not sticky | Accessible toggle (aria-expanded, focus management, Esc) |
| 4 | Desktop side-area panel | Desktop inner pages (hamburger, top right) | **Interaction tested** | Slides in from the right. It contains only one paragraph ("When we talk about chakra healing…") | **Drop**. It adds no value and duplicates content |
| 5 | Fullscreen search | Header search icon | **Interaction tested** | Overlay with a GET form to `/?s=`. Results include junk pages ("Coming Soon", "Homepage") | **Drop** (only about 9 pages). Revisit if a blog is added |
| 6 | Hero slider | Home | **Interaction tested** | Slider Revolution 6.5.18, 3 slides, arrows, bullets, autoplay (`data-sloop`), lazy-loaded backgrounds. Slide 3's CTA goes to a 404. A duplicate oversized CTA layer appears on desktop/tablet | Replace with a single strong hero or a lightweight, accessible carousel (pause control, reduced motion). GSAP may handle entrance motion |
| 7 | Accordion ("Know more about Chakra Healing") | Home, Meaning of Chakra | **Functionality verified** | jQuery UI accordion. One panel open at a time; the first is open by default. Both panels' text was captured | Native `<details>` or an accessible disclosure |
| 8 | Image gallery strip / carousel | Home | **Partially verified** | Six thumbnails link to full-size JPGs (`target` none). On mobile it shows one image at a time. **Lightbox behaviour unverified** | A simple responsive gallery. A lightbox is optional |
| 9 | Treatments grid | `/treatments/` | **Functionality verified** | 4 cards link to detail pages (200) | Static data from `content/site-content.json` |
| 10 | "Like" button with counter | Treatment detail pages | **Observed** (not clicked; it would write to the live DB) | `like.min.js`, AJAX to `admin-ajax.php`. Counts: 84 / 63 / 25 / 15 | **Drop.** It needs a backend and adds no value |
| 11 | Social share icons | Treatment detail pages | **Observed** | All `href="#"`. No working share | Drop or use real share URLs |
| 12 | Contact form (CF7 #10020) | `/contact-us/` | **Partially verified** | Client and server validation verified via an empty submit (3 required-field errors + banner). **Actual submission and email delivery: unverified** (not sent, to avoid messaging the business) | Needs a new backend: a Next.js Route Handler + email provider, or a form service (Formspree/Resend etc.). Keep the same fields. Add spam protection. **The business must confirm the destination inbox** |
| 13 | Google Maps embed | About, Contact | **Functionality verified** (renders) | Google Maps JS API with the key `[redacted]` exposed client-side. Custom grey style, gold pin. Geocodes "Nyuh Gading Restaurant and Accomodation". Scroll-wheel zoom enabled | Prefer a no-key Google Maps **embed iframe** or a static map image + "Open in Google Maps" link. **Do not reuse the exposed key.** Confirm the correct venue first |
| 14 | Phone link | Footer, Contact | **Functionality verified** (correct `tel:+6281353040211`) | — | Consider a WhatsApp link (`wa.me/6281353040211`) **only if the client confirms** that the number uses WhatsApp |
| 15 | Email link | Footer, Contact | **Functionality verified** (`mailto:info@ubudchakrahealing.com`) | — | Keep |
| 16 | Social icons | Footer, sidebars | **Functionality verified: broken** | Generic platform homepages only | Remove until real profile URLs are supplied |
| 17 | Booking / reservations | — | **Not present** | No booking system. `/reservations/` is an OpenTable demo ("Book A Table") with no real integration | No booking backend to retain. Ask the client how bookings currently happen |
| 18 | E-commerce / login / accounts | — | **Not present** | — | — |
| 19 | Translation | — | **Not present** | English only (`lang="en-US"`) | — |
| 20 | Reviews widget | — | **Not present** | — | — |
| 21 | Video | — | **Not present on pages** | `HEALING-ENERGI_2.mp4` (64 MB, 1080×1920, 1:00) is in the media library but unused. A Slider Revolution poster exists | Optional Phase 2 asset. Must be re-encoded (H.264/AV1, about 2–5 MB) and the content reviewed first |
| 22 | Analytics | All pages | **Observed** | gtag GA4 `G-GJJEQ4BPMX` + UA `UA-225605985-1` (UA is sunset) | Carry over GA4 **only if the client confirms** it is theirs. Add consent handling if required |
| 23 | 404 page | Unknown routes | **Functionality verified** | Theme 404 with a stock yoga background | Simple branded `not-found.js` |
| 24 | Smooth scrolling | All pages | **Observed** | `smoothPageScroll.js` hijacks the wheel | Do not replicate scroll hijacking |
| 25 | Loading / animations | — | **Observed** | Preload pattern under the title banners. Slider transitions (slide in from the right, scale-out). No other scroll animations observed | GSAP/ScrollTrigger in Phase 2 should be subtle and respect `prefers-reduced-motion` |
| 26 | Hover states | Desktop | **Interaction tested** | Nav: white → gold #DEA43E. Buttons: the gradient did not change on hover in the computed style (the class `eltd-btn-gradient_hover` implies an animated gradient shift that was not captured) | Define clear hover/focus states |
| 27 | Emoji script, mediaelement, isotope, jQuery UI datepicker/tabs | All pages | **Observed** | Loaded on every page, mostly unused | Not needed |

## Third-party hosts contacted (home page)

`fonts.googleapis.com`, `fonts.gstatic.com`, `www.googletagmanager.com`, `analytics.google.com`, `stats.g.doubleclick.net`, `maps.googleapis.com`, `www.google.co.in`. The demo pages also load `kendall.elated-themes.com` images and OpenTable.

## Requests and weight (observational)

The home page loads **23 stylesheets** and **24 scripts**, including 7 icon-font CSS files and 2 Google Fonts requests covering 5 families at up to 9 weights each. The Phase 2 bundle should be a small fraction of this.

## Backend-dependent items Phase 2 must resolve

1. **The contact form's delivery mechanism.** This is the only true backend dependency.
2. **The map** (key-free embed versus the API).
3. **Analytics ownership.**
4. Nothing else on the site depends on a server: no CMS-driven listings beyond static content, no booking and no payments.
