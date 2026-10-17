# 01 — Audit Report: ubudchakrahealing.com

**Audit date:** 2026-10-17
**Source:** https://www.ubudchakrahealing.com/
**Phase:** 1 (research only). No code, redesign, configuration changes, pushes or deployments were made.

---

## 1. Website overview

Ubud Chakra Healing is a small, single-practitioner wellness business in Ubud, Bali. It is built around **Mr. Ketut**, a healer who practises chakra balancing. The site describes four offerings: **Chakra Balancing**, **Palm Reading**, **Melukat (Water Purification)** and **Balinese Massage**.

The site does five things:

1. It introduces the healer and the healing process.
2. It explains chakras in educational copy.
3. It lists the four treatments.
4. It gives contact details (phone, email, map).
5. It collects enquiries through a contact form.

There is **no online booking, no pricing, no session durations, no opening hours and no testimonials**. The only conversion paths are the contact form, the phone link and the email link.

| Item | Finding (verified) |
|---|---|
| Platform | WordPress 6.7.10 (from the generator meta) |
| Theme | **Kendall** by Elated Themes (`/wp-content/themes/kendall/`) |
| Page builder | WPBakery (js_composer 5.2) |
| Hero slider | Slider Revolution 6.5.18 |
| Forms | Contact Form 7 5.5.6 |
| SEO | Yoast SEO (sitemaps, JSON-LD WebSite/WebPage/Breadcrumb) |
| Caching / images | WP Super Cache, Smush (seen in the REST namespaces) |
| Analytics | Google Analytics 4 `G-GJJEQ4BPMX` and legacy UA `UA-225605985-1` |
| Maps | Google Maps JS API, with the key exposed in the page source |
| Fonts | Google Fonts: Lustria, Raleway, Open Sans, Montserrat, Roboto |
| Footer credit | "©2022 Ubud Chakra Healing – Developed by Sadu Jayanatha" |
| Last content update | The homepage was modified on 2025-04-05. Most other pages were last modified in 2022. |
| HTTP behaviour | `http://` redirects (301) to `https://`. The www and non-www hosts both respond. |

## 2. Method

| Method | Purpose |
|---|---|
| `robots.txt`, `/sitemap.xml` (legacy static), `/wp-sitemap.xml` → Yoast `sitemap_index.xml` with 9 sub-sitemaps | Route discovery |
| WordPress REST API: `/wp-json/wp/v2/pages`, `/media`, `/posts`, `/categories` | Authoritative page and media lists, dates, attachments |
| Headless Chromium (Playwright 1.64.1), full-page render of **25 URLs × 3 viewports = 75 renders** | Screenshots, headings, text, images, links, forms, computed typography and colours |
| A targeted interaction probe | Slider navigation, accordion, side panel, search overlay, sticky header, mobile menu, contact form empty-submit validation, button and nav hover, breakpoint sweep (1440 → 360) |
| HEAD requests on 80 asset URLs; download of 49 original assets | File sizes, availability, a local asset library |
| Pixel sampling of the logo PNGs | Logo colour estimates |

Viewports tested: **desktop 1440×900**, **tablet 768×1024** (touch), **mobile 390×844** (touch, iPhone UA). The breakpoint sweep also covered 1280, 1024, 1000, 600, 480 and 360.

## 3. Coverage record

### 3.1 Pages fully inspected (render + text + assets + metadata at all 3 viewports)

| Route | Title | Notes |
|---|---|---|
| `/` | Healing & Relaxation – Ubud Chakra Healing, Bali | Homepage. All 3 slides captured; accordion tested |
| `/treatments/` | Treatments | In the main navigation. Grid of 4 treatment cards |
| `/about-us/` | About Us | In the main navigation |
| `/what-is-chakra/` | Meaning of Chakra | In the main navigation |
| `/contact-us/` | Contact Us | In the main navigation. Form validation tested |
| `/treatment/chakra-balancing/` | Chakra Balancing | Portfolio item (treatment detail) |
| `/treatment/palm-reading/` | Palm Reading | Treatment detail |
| `/treatment/water-purification/` | Water Purification | Treatment detail |
| `/treatment/balinese-massage/` | Balinese Massage | Treatment detail |
| `/yoga-treatment/` | Treatment | **Not linked from the navigation.** A long single page covering all four treatments. Its content overlaps the detail pages |

### 3.2 Pages inspected, classed as legacy, demo or utility

| Route | Status | Content |
|---|---|---|
| `/treatment/` | 200 | "Portfolio Archive". Lists the 4 treatments with dates plus a **theme demo sidebar** ("About Me" lorem ipsum, demo portrait, "No posts were found") |
| `/portfolio-category/treatment/` | 200 | Same archive as `/treatment/` |
| `/portfolio-tag/chakra/`, `/healing/`, `/massage/` | 200 | Tag archives, demo sidebar |
| `/reservations/` | 200 | **Untouched theme demo**: "Book A Table", lorem ipsum, OpenTable widget, Elated Themes phone/email, "Hudson 487, New York" |
| `/contact-page-2/` | 200 | **Theme demo**: lorem ipsum, info@elatedthemes.com, a New York map |
| `/contact-form/` | 200 | **Theme demo**: four `[contact-form-7 404 "Not Found"]` shortcode errors plus a lorem "Newsletter" block |
| `/coming-soon/` | 200 | "Comming Soon" (sic) countdown at 00, "info@studbali.com" |
| `/testimonials-category/agency-testimonials/`, `/slides-category/sliders-1/`, `/carousels-category/home-4-carousel/` | 200 | Empty theme taxonomy archives ("No posts were found") |
| `/?s=chakra` | 200 | Search results. Lists pages including "Coming Soon". `noindex` |
| `/about-us` (no trailing slash) | 200 | Same page. Listed separately in the legacy `/sitemap.xml` |

### 3.3 Broken or unavailable routes

| Route | Result | Where it is linked from |
|---|---|---|
| `/chackra-meaning` | **404** | Homepage slider slide 3, "WHAT IS CHAKRA" button |
| `/blog/` | 404 | Not linked; probed. The site has **0 posts** |
| `/this-page-does-not-exist-audit/` | 404 (test) | 404 template works: "404 Error Page … BACK TO HOME" |
| About page "HEALING METHOD" and the first "CONTACT US" button | Link to `#` (dead) | `/about-us/` |
| Footer social icons | Link to generic homepages (`instagram.com/`, `twitter.com/`, `pinterest.com/`, `facebook.com/`, `vimeo.com/`, `skype.com/en/`). **No real business profiles** | Footer on every page, archive sidebars |
| Treatment detail share icons | Link to `#` | Treatment detail pages |

### 3.4 Interactive states that could not be verified

- **Contact form submission success.** Only empty-submit validation was tested. A real submission was **not sent**, so as not to message the business. Whether email reaches `info@ubudchakrahealing.com` is unknown.
- **"Like" counters** on treatment detail pages (84 / 63 / 25 / 15 likes). They were not clicked, because clicking writes to the live database.
- **Home gallery lightbox.** The images link to full-size JPGs. Lightbox behaviour was not confirmed.
- **The contents of the video** `HEALING-ENERGI_2.mp4`. Headless Chromium could not decode it, so only its metadata is known (1080×1920, 1:00, 64 MB).
- **Search overlay keyboard behaviour and focus trapping**, and screen-reader behaviour in general.
- **Side-area panel on mobile.** The panel was opened on desktop only.

### 3.5 Technical and access limitations

- No backend or WordPress admin access, so drafts, private pages, CF7 mail settings and plugin settings could not be inspected. The REST API exposed only `publish` items.
- Theme custom post types (portfolio items, slides, testimonials, carousels) are **not exposed** in REST. They were discovered through the Yoast sitemaps and rendered directly.
- The site was rendered in Chromium only. Safari, Firefox and real devices were not tested.
- The workspace was **empty** at the start. There was no prior codebase, assets or audit evidence.

## 4. Key findings summary

1. **Content is thin, and a lot of it is repeated.** The chakra explanation appears almost verbatim on 4 pages (Home, Meaning of Chakra, Chakra Balancing detail, `/yoga-treatment/`). Even within one page, one paragraph is repeated twice (see `08-issues-gaps-questions.md`).
2. **Essential business information is missing**: prices, durations, opening hours, booking method, a precise address, and real social profiles.
3. **There are factual conflicts** about founding dates, years of practice and venue name (see `08`).
4. **Theme demo leftovers are publicly indexed**: `/reservations/`, `/contact-page-2/`, `/contact-form/`, `/coming-soon/` and the archive sidebar. They are all `index, follow`.
5. **Brand identity is clear but inconsistent.** The logo is purple, the UI accent is gold (#DEA43E), and the slider uses an orange gradient (#FF6900 → #FFB384) and Montserrat Light. Five font families are loaded.
6. **There are responsive defects**: the tablet homepage text collapses into a one-word column, the desktop homepage shows a duplicate oversized "FIND MORE" slider button, the contact form overflows its column, and mobile contact details sit flush against the screen edge.
7. **The original photography is good and reusable.** Real photos of Mr. Ketut and treatments exist at high resolution (up to 2000×3000).

See `02`–`09` for detail.
