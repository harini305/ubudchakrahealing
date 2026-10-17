# 08 — Issues, Gaps & Open Questions

Nothing here has been "corrected" in the content files. These items need a business decision before Phase 2 publishes copy.

---

## 1. Factual conflicts (needs client confirmation)

| # | Conflict | Statements and sources |
|---|---|---|
| F1 | **When the business started** | "Ubud Chakra Healing was **built in 2022** by Mr. Ketut" (About intro). The healer has been "**healing in 1997 until now**" (About › The Healer). The homepage was published in 2016 and the logo was uploaded in 2017. "Built in 2022" may refer to a new venue, but the site does not say so |
| F2 | **Length of experience** | "over than **20 years**" (Home slide 1, About › The Healer, meta description). "learned for it about more than **15 years**" (About intro). "since 1997" means about 29 years by 2026 |
| F3 | **Venue name / map pin** | Text: "**Puspa Body Treatment** located at Monkey Forest street just across from the football field" (About). Map geocode: "**Nyuh Gading Restaurant and Accomodation**" (About and Contact embeds). Footer: "**Ubud Monkey Forest**". About intro: "Monkey Forest Street". Which venue is current? What is the exact street address? |
| F4 | **Teacher** | "a Japanese person named Kayo" (About) vs "a Japanese person" (slider, The Healer). Consistent, just inconsistent detail |
| F5 | **Who practises which treatment** | The site centres on Mr. Ketut, but the Palm Reading photo shows a different (younger) practitioner. Melukat is offered as a "package … with transfer from Ubud's hotel, offering and guide", so is it a third-party tour? |
| F6 | **Yoga** | The home meta description says "Yoga Studio & Class Schedules". The route `/yoga-treatment/` exists. There is **no yoga offering** anywhere |
| F7 | **Copyright year** | Footer "©2022", but the homepage was modified on 2025-04-05 |

## 2. Missing information (needed for a useful site)

- Prices for each treatment
- Session durations
- Opening hours and days
- How to book (walk-in? phone? WhatsApp? email?) and the lead time needed
- Exact address, Google Maps place link, landmark directions
- Real social media URLs (if any)
- Testimonials / reviews (only if real ones can be supplied, e.g. permission to quote Google or TripAdvisor reviews)
- Healer's full name, the photo permissions, and whether the client wants him named as "Mr. Ketut"
- What a chakra balancing session actually involves (steps, what to wear, aftercare). The current "detail" page is generic chakra theory
- Whether the Melukat package has a price, schedule and duration
- The current owner of the GA4 property and whether analytics is wanted
- Where contact form submissions should be delivered

## 3. Content quality issues

| # | Issue | Location |
|---|---|---|
| C1 | **Paragraphs repeated within the same page** | Home (p3 repeats p2), Meaning of Chakra (p3 repeats p2; p6 repeats p4+p5), Chakra Balancing detail (same), `/yoga-treatment/` (same) |
| C2 | **The same chakra copy appears across 4 pages** | Home, Meaning of Chakra, Chakra Balancing, `/yoga-treatment/` |
| C3 | Grammar / spelling (non-native English) | "has been learning and do the healing over than 20 years"; "The Healing is taken place in"; "He has learned for it about more than 15 years"; "Here are the benefit of"; "helps to muscles to stretch"; "Serve as an energizer"; "Comming Soon" (sic, legacy); "Accomodation" (map query); "tittle-image" and "Chackra" (filenames); "Chakra are energy centers" (meta) |
| C4 | **Health / medical claims** | Balinese Massage: "Treats any kind of sleep issues", "acts well against any kind of diseases", "Boost the immunity level". Melukat: "cures non-medical and spiritual diseases". Massage: "Science has stated that massage therapies are the best therapy". Consider softening or removing these. **That is a business/legal decision.** Do not rewrite silently |
| C5 | Inconsistent capitalisation | "Meaning Of Chakra" (H1) vs "Meaning of Chakra" (nav/title); headings sometimes ALL CAPS in content ("HEALING PROCESS"), sometimes title case |
| C6 | Inconsistent naming | "Water Purification" vs "MELUKAT – WATER PURIFICATION"; "Chakra Balancing" vs "CHAKRA HEALING"; page "Treatment" (`/yoga-treatment/`) vs "Treatments" |
| C7 | Content that is not about the business | The chakra theory is generic, web-style copy and may originate from elsewhere. **Originality is unverified.** Consider rewriting it in Phase 2 with client approval |

## 4. Technical / UX defects on the original

| # | Defect | Location |
|---|---|---|
| T1 | Broken link `/chackra-meaning` (404) | Home slide 3 CTA |
| T2 | Dead `#` buttons ("HEALING METHOD", "CONTACT US") | About |
| T3 | Placeholder social links | Footer on every page |
| T4 | Duplicate oversized "FIND MORE" slider layer | Home, desktop + tablet |
| T5 | One-word-wide text column at 768px | Home, tablet |
| T6 | Form overflows its column; contact items with no gutter | Contact, desktop + mobile |
| T7 | Images and map hidden on mobile | About, Contact |
| T8 | Masonry gap in the treatment grid | Treatments, tablet |
| T9 | Theme demo pages indexed (lorem ipsum, a New York address, Elated Themes email, OpenTable) | `/reservations/`, `/contact-page-2/`, `/contact-form/`, `/coming-soon/`, archive sidebar |
| T10 | No `<h1>` on Home and Contact | — |
| T11 | **No meaningful alt text.** Content images have either empty alt (gallery thumbs, cards, chakra diagram, About photos) or alt equal to the filename ("MI_07032UVR-", "RES-20", "Tirta-Sudamala-7-1024×682"). Logos use "Logo" / "Dark Logoo" (sic) | All pages |
| T12 | Exposed Google Maps API key in the page source | About, Contact |
| T13 | Legacy UA analytics tag still loaded | All pages |
| T14 | No `og:image` on the main pages | Home, About, Contact, Treatments, Meaning of Chakra |
| T15 | Two sitemaps (a stale static `/sitemap.xml` from xml-sitemaps.com plus Yoast). The static one lists both `/about-us/` and `/about-us` | Root |
| T16 | Heavy payload: 23 CSS + 24 JS files, 7 icon fonts, 5 font families | All pages |
| T17 | Slide 2's thumbnail metadata references a third-party hotel image (FuramaXclusive) | Home slider |

## 5. Asset risks

| # | Risk |
|---|---|
| A1 | **Rights unverified** for: `Tirta-Sudamala-7-1024x682.jpg` (filename suggests a temple or tour-operator source), `Chakra.png` diagram (clip-art style), `Chackra-Healing-banner3-compressor.jpg` (stock yoga), `ch-1…ch-5`, `crown-chackra-healing`, `chackra-healing-process` (stock-looking, unused), `Palm-Reader.jpg` (a different practitioner). Third-party images **not downloaded and not to be reused**: FuramaXclusive, Inspiro Yoga, Four Seasons Sayan, getlstd property photo, theme demo images |
| A2 | No vector logo. The largest logo is 1200×245 (long version); the header PNGs are 274×80 |
| A3 | Several photos are only 800px wide (`ubud-chakra-healing-process`, `-healer-1`), which is soft at large display sizes |
| A4 | The 64 MB video is unused and unreviewed |
| A5 | `MI_06985UVR-.jpg` and `MI_06985UVR-1-1.jpg` are byte-identical duplicates |

## 6. Questions for the client (consolidated)

1. Which facts are correct: the start year (1997 vs 2022), the years of experience, and the venue (Puspa Body Treatment vs Nyuh Gading)? What is the exact address?
2. Prices, durations and opening hours for each treatment?
3. How should visitors book: form, phone, WhatsApp, or email? Is +62 81353040211 on WhatsApp?
4. Who performs Palm Reading and Melukat? Is Melukat a guided package with transport, and does it have a price?
5. Are there real social media accounts?
6. Are there real testimonials we may publish?
7. Should the health claims in the massage and Melukat copy be kept, softened or removed?
8. Is yoga offered at all? If not, the "Yoga Studio & Class Schedules" claim should go.
9. Do you own the rights to the water purification photo and the chakra diagram?
10. Do you have a vector (SVG/AI/PDF) logo?
11. Should the 1-minute "HEALING ENERGI" video be used?
12. Which inbox receives contact form messages? Do you want analytics (GA4 `G-GJJEQ4BPMX` — is it yours)?
13. Should the old URLs (`/yoga-treatment/`, `/treatment/`, `/reservations/` etc.) be redirected? This depends on the hosting and domain plan for Phase 2.
