# 02 — Page & Route Inventory

Status legend: **Implement** = build in Phase 2 · **Consolidate** = merge into another page · **Legacy** = do not rebuild; consider a 301 redirect · **Review** = needs a client decision.

Screenshots for every route are in `screenshots/`, named `<slug>__<desktop-1440|tablet-768|mobile-390>.jpg`. Full extracted text is in `data/page-text/<slug>.txt`. Per-page SEO fields are in `data/seo-metadata.csv`.

---

## A. Route table

| # | Route | HTTP | Type | Linked from | WP modified | Recommendation |
|---|---|---|---|---|---|---|
| 1 | `/` | 200 | Home | Logo, nav | 2025-04-05 | **Implement** |
| 2 | `/treatments/` | 200 | Listing | Nav "Treatments" | 2022-10-15 | **Implement** (treatment overview) |
| 3 | `/treatment/chakra-balancing/` | 200 | Detail (portfolio item) | Treatments grid | 2022-10-27 | **Implement** |
| 4 | `/treatment/palm-reading/` | 200 | Detail | Treatments grid | 2024-02-12 | **Implement** |
| 5 | `/treatment/water-purification/` | 200 | Detail | Treatments grid | 2022-10-15 | **Implement** |
| 6 | `/treatment/balinese-massage/` | 200 | Detail | Treatments grid | 2022-10-15 | **Implement** |
| 7 | `/about-us/` | 200 | Secondary | Nav "About Us", slider buttons | 2022-10-27 | **Implement** |
| 8 | `/what-is-chakra/` | 200 | Editorial | Nav "Meaning of Chakra", Home "READ MORE…" | 2019-10-11 | **Implement** (shorter, without repeated paragraphs) |
| 9 | `/contact-us/` | 200 | Contact / enquiry | Nav, footer | 2022-08-15 | **Implement** |
| 10 | `/yoga-treatment/` | 200 | Secondary (orphan) | Nothing in the nav; in the sitemap; found by search | 2022-10-15 | **Consolidate** into `/treatments/` and the detail pages. Its content is a superset of the detail pages. 301 to `/treatments/` |
| 11 | `/treatment/` | 200 | Archive (theme) | Sitemap | — | **Legacy**. 301 to `/treatments/` |
| 12 | `/portfolio-category/treatment/` | 200 | Taxonomy archive | "TREATMENT" label on cards | — | **Legacy**. 301 to `/treatments/` |
| 13 | `/portfolio-tag/chakra/`, `/healing/`, `/massage/` | 200 | Tag archives | Tags on detail pages | — | **Legacy**. Do not rebuild tags |
| 14 | `/reservations/` | 200 | Theme demo | Sitemap only | 2016-10-04 | **Legacy**. Remove (demo content) |
| 15 | `/contact-page-2/` | 200 | Theme demo | Sitemap only | 2016-10-19 | **Legacy**. Remove |
| 16 | `/contact-form/` | 200 | Theme demo (broken shortcodes) | Sitemap only | 2016-04-19 | **Legacy**. Remove |
| 17 | `/coming-soon/` | 200 | Theme demo landing | Sitemap only | 2017-08-23 | **Legacy**. Remove |
| 18 | `/testimonials-category/*`, `/slides-category/*`, `/carousels-category/*` | 200 | Empty taxonomies | Sitemap only | — | **Legacy**. Remove |
| 19 | `/?s=` | 200 | Search | Header search icon | — | **Review**. With about 6 real pages, site search is unnecessary |
| 20 | `/chackra-meaning` | **404** | Broken link | Home slide 3 | — | Fix the link target (to `/what-is-chakra/` or its equivalent) |
| 21 | `/blog/` | 404 | — | Not linked | — | There is no blog. 0 posts exist |
| 22 | WordPress attachment pages (`/homepage/mi_06985uvr/` etc., 24 URLs in `attachment-sitemap.xml`) | 200 (not individually rendered) | Utility | Sitemap | — | **Legacy**. Do not rebuild |
| 23 | 404 template | 404 | Utility | — | — | **Implement** a simple branded 404 |

**Proposed Phase 2 sitemap (recommendation only):** Home · Treatments (+ 4 detail pages) · About · Meaning of Chakra · Contact · 404. That is 9 routes.

---

## B. Shared components (all pages)

| Component | Description |
|---|---|
| **Desktop header (≥1025px)** | On Home: transparent over the slider, with the logo centred above a centred menu and a search icon. On other pages: the logo on the left, a centred menu, and search plus a hamburger (side-panel opener) at the top right. Height is 190px on Home and about 89px elsewhere. Menu items: HOME · TREATMENTS · ABOUT US · MEANING OF CHAKRA · CONTACT US (Raleway 13px/500, uppercase, 1px tracking, white; active/hover is gold #DEA43E) |
| **Sticky header** | Appears after scrolling (fixed, 58px, slides in). Verified on desktop |
| **Mobile header (≤1024px)** | 100px tall, white, not sticky. Hamburger on the left (gold), logo in the centre, search on the right. The menu drops down as a white list: Home, Treatments, About Us, Meaning of Chakra, Contact Us |
| **Side-area panel** | Opened by the hamburger on desktop inner pages. It contains **only** the "What is chakra healing" paragraph. Low value |
| **Fullscreen search overlay** | GET form to `/?s=` |
| **Title banner** | Dark mandala/cosmic image (`footer-image-compressor.jpg`), with the page title in Lustria 80px white (60px tablet, 35px mobile). About 525px tall on desktop. Treatment detail pages use the frangipani hero photo instead |
| **Footer** | Background image `footer-images-compressor.jpg` (dark teal into brown mandala). Left column: phone, email, "Ubud Monkey Forest", 4 social icons (placeholder links). Middle column: "SITEMAP" heading plus 5 nav links. Bottom bar: "©2022 Ubud Chakra Healing – Developed by Sadu Jayanatha". About 470px tall on desktop. Columns stack on mobile |
| **Gold gradient button** | `linear-gradient(to right, #F6C478, #DEA43E 50%, #F6C478)`, white Raleway 13px/500 uppercase, 2px radius, 53px tall |
| **Section heading with separator** | Lustria heading plus a short gold rule below it |
| **Accordion "Ubud Chakra Healing / Know more about Chakra Healing"** | Repeated on Home and Meaning of Chakra. Two panels; the active panel has a gold gradient header |
| **Chakra diagram** | `Chakra.png` seven-chakra figure. Used on Home, Meaning of Chakra and Contact |

---

## C. Page-by-page inventory

### C1. Home `/`

- **Purpose:** introduce the healer, explain chakras, route visitors to About, Meaning of Chakra and Contact.
- **SEO:** title "Healing & Relaxation - Ubud Chakra Healing, Bali". Description: "Clearing, energizing, activating & other spiritual healing methods for the mind & body. Heal your body and soul. Yoga Studio & Class Schedules, Ubud - Bali". The "Yoga Studio & Class Schedules" claim is inaccurate; the site has no schedules. Canonical `/`. **No og:image.** No H1 on the page (the slider titles are not headings).
- **Sections in order:**
  1. **Hero slider** (Slider Revolution, 3 slides, autoplay, arrows and bullets, full-screen)
     - Slide 1 "The Healer". Body: "Mr. Ketut has been learning and do the healing over than 20 years. He learned this technique from a Japanese person." Button: FIND MORE → `/about-us`. Image: `ubud-chakra-healing-compressor.jpg`. **Desktop shows a duplicate, oversized "FIND MORE" button (35px text, 137px line-height) in the lower half of the slide.** This is a slider layer defect.
     - Slide 2 "Healing & Relaxation". Body: "The Healer body is used as a vehicle for energy throughout to transmit energy via the hands to the client." Button: FIND MORE → `/about-us`. Image: `ubud-chakra-healing-healer-compressor.jpg`.
     - Slide 3 "Wheels of Energy". Body: "There are seven main chakras, which align the spine, starting from the base of the spine through to the crown of the head." Button: WHAT IS CHAKRA → `/chackra-meaning` (**404**). Image: `RES-13-1365x2048.jpg`.
  2. **"The Meaning of Chakra"**: H2, gold separator, 3 paragraphs (the 3rd repeats the 2nd), and a "READ MORE…" button → `/what-is-chakra/`.
  3. **Image gallery strip**: 6 square-cropped photos (292×365 thumbs) linking to full-size images. Order: MI_07033, MI_06993, RES-13, RES-20, RES-21, MI_07032. About 5 are visible at 1440px. On mobile it becomes a single-image carousel.
  4. **Chakra diagram + accordion** on a light grey (#F2F2F2) band. Left: `Chakra-compressor.png`. Right: H2 "Ubud Chakra Healing", H5 "Know more about Chakra Healing", and the accordion "WHAT IS CHAKRA HEALING" / "WHY BALANCING YOUR CHAKRAS?"
  5. Footer.
- **Retain:** the healer intro, the slide headlines, the chakra intro (one copy), the gallery photos, and both accordion texts (they could become FAQ-like content).
- **Responsive:** tablet (768) has a **severe bug**: the Meaning of Chakra paragraphs render one word per line in a narrow column, which makes the page 7,205px tall. On mobile the slider becomes a portrait crop with the arrows overlapping the text.

### C2. Treatments `/treatments/`

- **Purpose:** list the offerings.
- **SEO:** title "Treatments - Ubud Chakra Healing". The description is the generic site one.
- **Sections:** title banner "Treatments" → H5 tagline "Relaxation And Rejuvenation In The Island Of The Gods" → a 3-column portfolio grid with 4 cards (image 800×545 crop, H4 title in Lustria 20px, excerpt, heart "like" icon, a hidden "TREATMENT" category label). Order: Chakra Balancing (RES-13), Palm Reading (Palm-Reader), Water Purification (Tirta-Sudamala-7), Balinese Massage (MI_07032). → Footer.
- **Retain:** the four offerings, their images and excerpts, and the tagline.
- **Gaps:** no price, duration or booking CTA on the cards.
- **Responsive:** 3 columns on desktop, 2 on tablet, 1 on mobile.

### C3–C6. Treatment detail pages `/treatment/<slug>/`

Shared layout: full-width hero (`ubud-chakra-healing-compressor.jpg`) with the title in Lustria, left-aligned → a two-column body (left: stacked images; right: a "TREATMENT" label, H2 title, body copy, tags, share icons (`#`), and a "Like" button with count). On mobile the images stack above the text.

| Page | Images (left column) | Body content | Like count | Tags |
|---|---|---|---|---|
| Chakra Balancing | ubud-chakra-healing-healer-1-compressor.jpg; RES-20-scaled.jpg | The full chakra explanation, including both repeated paragraphs, plus "The purpose of chakra healing…" and "Stresses placed on us…" | 84 | chakra, healing |
| Palm Reading | Palm-Reader.jpg | Palmistry intro + the five lines list | 63 | — |
| Water Purification | Tirta-Sudamala-7-1024x682.jpg | Melukat paragraph + "The package is included with transfer from Ubud's hotel, offering and guide to do the purification." | 25 | — |
| Balinese Massage | MI_07033UVR-.jpg; MI_07032UVR-.jpg | Intro + 7 benefit bullets | 15 | massage |

- **Retain:** all facts. The Melukat package inclusions are the only "package" detail anywhere on the site.
- **Gaps:** no price, duration, practitioner, schedule or booking CTA.

### C7. About Us `/about-us/`

- **Sections:**
  1. Title banner "About Us".
  2. Intro (5 paragraphs): built in 2022 by Mr. Ketut on Monkey Forest Street; the mission; the location in central Ubud; learned from "a Japanese person named Kayo"; "more than 15 years", a former civil servant retired about 5 years ago.
  3. **HEALING PROCESS** (text left, image right `ubud-chakra-healing-process-compressor.jpg`), with a "HEALING METHOD" button → `#` (dead).
  4. **THE HEALER** (image left `ubud-chakra-healing-healer-1-compressor.jpg`, text right): "over than 20 years… healing in 1997 until now", with a "CONTACT US" button → `#` (dead).
  5. Large empty spacer, about 150px.
  6. **LOCATION**: "The Healing is taken place in Puspa Body Treatment located at Monkey Forest street just across from the football field." Button CONTACT US → `/contact-us`. Google Map on the right (zoom 14, centre -8.512417, 115.260977, custom grey style, gold pin, address query "Nyuh Gading Restaurant and Accomodation").
  7. Footer.
- **Retain:** the healer story, the process description and the location description. **Resolve the conflicts** (see `08`).
- **Responsive:** sections stack; images come before text on mobile.

### C8. Meaning of Chakra `/what-is-chakra/`

- **SEO:** title "Meaning of Chakra - Ubud Chakra Healing". Nav label "MEANING OF CHAKRA"; the H1 is "Meaning Of Chakra" (capital O).
- **Sections:** title banner → H2 "The Meaning of Chakra" + 6 paragraphs (paragraphs 3 and 6 are near-duplicates of paragraphs 2 and 4–5) → grey band with the chakra diagram + the same accordion as Home → footer.
- **Retain:** the educational content, deduplicated. The diagram is useful but low resolution.

### C9. Contact Us `/contact-us/`

- **Sections:**
  1. A full-width Google Map (450px) at the very top, **under the transparent header**. There is no title banner. Map centre -8.510074, 115.261218, zoom 15, same address query.
  2. Two columns. Left: the chakra diagram + phone / email / "Ubud Monkey Forest". Right: H2 "Contact Us", H5 "Please fill form below", and the CF7 form.
  3. Footer.
- **Form fields:** Your Name (required, text) · Your Email (required, email) · Contact phone (required, tel, prefilled "+62") · Subject (text) · Your Message (textarea) · SEND.
- **Validation (tested):** an empty submit shows "The field is required." under the 3 required fields and the banner "One or more fields have an error. Please check and try again."
- **Responsive defects:** on desktop the form column extends to the viewport edge. On mobile the contact items have 0 left margin and the form overflows on the right.

### C10. `/yoga-treatment/` (title "Treatment"; orphan page)

- Four alternating text/image sections: CHAKRA HEALING, PALM READING, MELUKAT – WATER PURIFICATION, BALINESE MASSAGE. The content is the same as the four detail pages, centred, and some sections use different images (`ubud-chakra-healing-process-compressor.jpg`, MI_07033 crop, Tirta-Sudamala, MI_07032).
- The slug says "yoga", but there is no yoga content. WordPress attaches `Inspiro-Yoga-bali-Retreat00029.jpg` to this page, but it is not rendered.
- **Recommendation:** consolidate and redirect.

### C11–C18. Legacy and demo routes

See section A. None contain business content worth preserving. The only real-looking value is "info@studbali.com" on `/coming-soon/`, which looks like an agency or third-party email. **Do not use it.**
