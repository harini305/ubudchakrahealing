# 09 — Phase 2 Recommendations & Mandatory Requirements

> **Status:** recommendations only. Phase 2 must not start until the user explicitly approves it. Nothing in this file has been implemented.

## 1. Target stack (as specified)

Next.js (App Router) · JavaScript (not TypeScript) · React · GSAP + ScrollTrigger · responsive CSS.

## 2. Proposed information architecture

| Route | Source content | Notes |
|---|---|---|
| `/` | Home | Hero (one strong image + the healer intro), a short "what is chakra healing" teaser, a treatments preview, a healer/about teaser, a gallery (≤6 images), a contact CTA |
| `/treatments` | Treatments + `/yoga-treatment/` | Uniform 4-card grid |
| `/treatments/chakra-balancing` etc. (4) | Treatment detail pages | Keep the slugs or 301 from `/treatment/<slug>/`. Title, key facts (price/duration once supplied), description, images, CTA |
| `/about` or `/about-us` | About | Healer story, healing process, location + map |
| `/meaning-of-chakra` or `/what-is-chakra` | Meaning of Chakra | **Deduplicated** educational copy, diagram, the 2 accordion Q&As |
| `/contact` or `/contact-us` | Contact | Form, phone, email, map |
| `not-found` | 404 | Branded, link home |

**Recommendation:** keep the existing slugs (`/about-us/`, `/what-is-chakra/`, `/contact-us/`, `/treatments/`, `/treatment/<slug>/`). That preserves search equity without needing redirects. Redirect `/yoga-treatment/`, `/treatment/`, `/portfolio-*`, `/reservations/`, `/contact-page-2/`, `/contact-form/`, `/coming-soon/` and `/chackra-meaning` to their nearest real page. Confirm with the user before configuring any redirects.

**Not recommended:** a blog (0 posts exist), site search, likes, the side panel, or a reservations page.

## 3. Content handling

- Use `content/site-content.json` as the data source. **Do not invent** prices, durations, hours, testimonials, FAQs, social links or blog posts. Where they are missing, design the components so the information can be added later. Do not fill them with placeholder "facts".
- Remove repeated paragraphs (§3 C1–C2 in `08`). Show each chakra explanation once.
- Do not silently resolve the conflicts in `08` §1. Use neutral wording only where the client has not confirmed (for example, avoid stating "since 2022" and "since 1997" side by side), and flag it in the hand-off.
- Grammar fixes and softening the health claims require client sign-off. Until then, keep the original meaning.
- Write real alt text for every content image.
- Add `LocalBusiness` JSON-LD **only after** the address and hours are confirmed.
- Create a unique `<title>` and meta description per page, an og:image per page, and exactly one `<h1>` per page.

## 4. Asset plan

- Use only originals from `assets/original/` (see `04-assets-manifest.csv`, status `used` / `available-unused`). **Do not** use AI-generated or unrelated stock imagery. **Do not** use the `remote-not-downloaded` third-party files.
- **Hero candidates:** `2019/10/ubud-chakra-healing-compressor.jpg` (still life), `2019/10/ubud-chakra-healing-healer-compressor.jpg` (healer at work), `2022/10/RES-13.jpg` (portrait).
- **Healer portrait:** `2016/10/MI_06993UVR-.jpg`.
- **Good unused originals:** `2016/10/MI_07006UVR-.jpg`, `2016/10/MI_06985UVR-.jpg` (do not use its duplicate `-1-1`).
- **Logo:** the header should use `UCH-Logo-long-compressor.png` (1200px) or a client-supplied vector. Generate favicons and icons from `favicon-UCH.png`.
- **Image pipeline:** create resized derivatives (for example 640 / 1024 / 1600 / 2400 widths) in WebP/AVIF with JPEG fallback, via a local script into a separate output folder such as `public/images/`. **Never overwrite** `docs/source-audit/assets/original/`.
- Treat the rights-unverified images (see `08` §5 A1) as provisional.
- **Video** (`HEALING-ENERGI_2.mp4`, 64 MB): review its content first. If used, re-encode it to a few MB, provide a poster, use `muted playsinline`, and do not autoplay on mobile data. Otherwise leave it out.

## 5. Functionality plan

| Feature | Plan |
|---|---|
| Contact form | Same fields (name*, email*, phone*, subject, message). Server-side validation in a Route Handler + an email provider, or a form service. Honeypot/rate limit. Success and error states. **Destination inbox to be confirmed** |
| Map | Key-free Google Maps embed iframe (lazy) or a static image + "Open in Google Maps" link. Do not reuse the exposed API key |
| Phone / email | `tel:` / `mailto:` links. WhatsApp only if confirmed |
| Navigation | Accessible header + mobile menu (focus trap, Esc, aria). Optional sticky header that never overlaps content or the footer |
| Accordion | Accessible disclosure |
| Gallery | Responsive grid; optional lightbox |
| Analytics | Only after the client confirms ownership and consent needs |
| Motion | GSAP/ScrollTrigger for restrained reveals and parallax on hero imagery only. Honour `prefers-reduced-motion`. No scroll hijacking |

## 6. Mandatory Phase 2 design rules (recorded as requirements)

### Typography
- **Exactly TWO font families across the entire website.** One for headings; one for body text, navigation, buttons, forms, cards, footer and all UI.
- Both must be readable, professional and not overly fancy.
- Use consistent heading and body sizes across equivalent components.
- Use a controlled, responsive (fluid) type scale.
- **No additional font families** for individual sections, the hero, the footer or decorative purposes. Hierarchy comes from weight, size, line-height and tracking.
- The fonts are selected in Phase 2. `05-brand-reference.md` §1.3 lists the options (keeping Lustria + Raleway, or a close replacement for Lustria). Montserrat, Open Sans and the icon fonts are not carried forward. Use SVG icons.
- Self-host the two families via `next/font` (no runtime Google Fonts requests).

### Visual design
- A professional, human-designed appearance. Avoid repetitive AI-looking or generic template layouts.
- Intentional image/text alignment. Consistent content widths, margins and spacing (one container system, one spacing scale).
- **No** unnecessary decorative numbering, eyebrow text, random symbols, floating badges or ornamental elements.
- Visual effects only when they serve a clear purpose.
- Preserve the brand: the purple logo, the gold accent family (#DEA43E / #F6C478), warm photography, a light/dark rhythm (dark tones from the mandala imagery ≈ #130D0A / #142A28 → #342828). Drop the orange slider gradient.
- Check contrast against WCAG AA (the original body grey #777 is borderline).

### Content
- Pages must be concise and focused. No repeated paragraphs, no unnecessary sections, no excessive length.
- Preserve the meaningful facts and essential information.
- **Do not invent** claims, testimonials, FAQs, prices or blog posts.

### Footer
- Compact and content-driven. Only necessary, verified information: logo or name, phone, email, location, primary links, copyright.
- No excessive padding, unnecessary columns, duplicated content or oversized footer layouts.
- The final content section must be fully visible above the footer, with a natural transition into it.
- Prevent overlap, clipping, excessive blank space, and fixed/sticky-element interference with the footer.
- No placeholder social icons.

### Images and performance
- Prefer the original assets already downloaded. Avoid duplicate copies and unnecessary large downloads.
- Resize and compress locally. Use modern formats where practical, sensible intrinsic dimensions, `sizes`/responsive sources, and lazy loading below the fold. Priority-load only the hero.
- **Next.js config:** set `images: { unoptimized: true }`, **merged into** the existing `next.config` rather than replacing unrelated settings. This avoids consuming the Vercel Image Optimization quota. Responsiveness then comes from pre-generated derivatives plus `srcset`/`sizes`.
- Do not change project configuration until Phase 2 is approved.

### Blog
- No blog exists (0 posts). Do not create one or invent posts. If the user later requests a simple blog page, its initial presentation uses **no more than 10 images** unless the user explicitly asks otherwise.

## 7. Phase 2 acceptance checks (suggested)

- Test at 1440 / 1024 / 768 / 390 / 360: no horizontal overflow, no clipped form fields, every image and the map visible on mobile.
- Exactly 2 font families in computed styles (check the `document.fonts` and `font-family` census).
- Lighthouse: performance and accessibility ≥ 90 on mobile. All images have meaningful alt text. One H1 per page.
- No broken internal links. Each legacy URL handled by a redirect or a deliberate 404.
- Contact form tested end-to-end in a non-production configuration before going live.
