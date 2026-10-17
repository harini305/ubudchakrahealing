# 05 — Brand Reference

Values marked **Verified** come from computed styles in the live render (`data/interaction-and-style-probe.log`) or from the theme CSS. Values marked **Estimate** come from pixel sampling or visual reading.

---

## 1. Typography (original site)

### 1.1 Font families loaded (verified: Google Fonts requests)

| Family | Weights requested | Where it is actually used |
|---|---|---|
| **Lustria** (serif) | 100–900 requested; Lustria only ships **400** | All headings H1–H4 (page titles, section headings, card titles) |
| **Raleway** (sans) | 100–900 | Body copy, nav, buttons, labels, footer, H5/H6, accordion titles |
| **Montserrat** | 200 | Slider titles only ("The Healer" etc.), via Slider Revolution |
| **Open Sans** | 100–900 | Treatment detail pages: the "TREATMENT" label and the Like button (theme default leaking through) |
| **Roboto** | 400 | Google Maps UI only (third party) |
| Arial | — | Unstyled native CF7 input text (13.33px) |
| Icon fonts | — | FontAwesome, ElegantIcons, Ionicons, Linea, Simple-Line, Dripicons, Linear Icons (**7 icon sets loaded**) |

No font files are self-hosted. **No font files exist in the project.**

### 1.2 Type scale (verified at 1440px)

| Element | Family | Size / line-height | Weight | Tracking / case | Colour |
|---|---|---|---|---|---|
| H1 page title (banner) | Lustria | 80px / 80px (tablet 60, mobile 35) | 400 | capitalize | #FFFFFF |
| H2 section heading | Lustria | 38px / 45.6px | 400 | none (some uppercase in content, e.g. "HEALING PROCESS") | #333333 |
| H2 (accordion block) | Lustria | 35px / 42px | 400 | — | #333333 |
| H4 card title | Lustria | 20px / 28px | 400 | capitalize | #333333 |
| H5 subheading | Raleway | 17px / 28px | 400 | — | #898989 |
| H5 footer widget title | Raleway | 13px / 23px | 500 | 1.5px, uppercase | #FFFFFF |
| H6 label (Tags) | Raleway | 11px / 23px | 500 | 1.5px, uppercase | #909090 |
| Body / paragraph | Raleway | 14px / 25px | 400 | normal | #777777 (content), #898989 (base) |
| Nav link | Raleway | 13px / 23px | 500 | 1px, uppercase | #FFFFFF; active/hover #DEA43E |
| Mobile nav link | Raleway | ~14px | 400 | sentence case | grey on white |
| Button | Raleway | 13px / 13px | 500 | 1px, uppercase | #FFFFFF |
| Accordion title | Raleway | 13px / 23px | 500 | 1.5px, uppercase | #333 (closed), #FFF (open) |
| Slider title | Montserrat | ~80px (est.) | 200 | — | #FFF (slide 2 is dark #333) |
| Slider body | Raleway | ~14–15px (est.) | 400–500 | small tracking | #FFF |
| Footer text | Raleway | 14px / 25px | 400 | — | #D4D4D4; links #DEA43E |
| Footer bottom | Raleway | 13px | 500 | — | #8F8F8F |
| Form textarea | Raleway | 11px | 500 | 1px, uppercase | #909090 |

**Observations:** the body copy is small (14px) and low contrast (#777 on white is about 4.5:1, borderline). The line lengths on Home and Meaning of Chakra run about 1,195px wide, which is far too long to read comfortably.

### 1.3 Mandatory Phase 2 typography rule

> **The redesigned website must use exactly TWO font families across the entire site.**
> - One family for headings.
> - One family for body text, navigation, buttons, forms, cards, footer and all other UI.
> - Both must be readable, professional and not overly fancy.
> - Hierarchy comes from weight, size, line-height and tracking, **never** from a third family. No extra family for decorative headings, the slider, the footer or individual components.
> - Icon fonts should be replaced by inline SVG icons. They do not count as a "font family" for the rule, but the 7 icon fonts loaded today are a performance problem.
> - **The final two fonts are NOT selected in this audit.** That decision belongs to Phase 2.

**Options to evaluate in Phase 2 (not decisions):**
- *Keep the recognisable pairing:* Lustria (headings) + Raleway (body). This preserves the brand feel most directly. Lustria ships a single weight (400), which limits heading hierarchy.
- *A similar serif with more weights* replacing Lustria (a calm, high-contrast-but-readable book serif), plus Raleway or a comparable humanist sans.
- Montserrat and Open Sans should **not** carry forward. Their use is accidental (slider plugin defaults and theme leakage).

## 2. Colour

### 2.1 Brand colours

| Role | Value | Status | Where |
|---|---|---|---|
| **Logo purple (lotus)** | ≈ **#5A4CA0**, range #5048A0–#7058A8 | Estimate (pixel sample) | Logo mark, favicon |
| **Logo deep violet (wordmark/outline)** | ≈ **#402068** | Estimate | Long logo text, figure outline |
| Logo chakra dots | Red, orange, yellow, green, cyan, blue, violet (the 7 chakra colours) | Visual | Logo figure spine |
| **UI accent gold** | **#DEA43E** (rgb 222,164,62) | Verified | Nav active/hover, links, separators, footer links, mobile hamburger |
| Gold light | **#F6C478** (rgb 246,196,120) | Verified | Button gradient ends |
| Button gradient | `linear-gradient(to right, #F6C478 0, #DEA43E 50%, #F6C478 100%)` | Verified | `.eltd-btn`, CF7 submit |
| Accordion active header | `linear-gradient(to right, #F6C478, #DEA43E)` | Verified | Accordion |
| Theme config accent | rgba(230,174,72) = #E6AE48 | Verified (style_dynamic.css) | Theme option; very close to #DEA43E |

The site's **real identity** is the purple logo plus warm gold UI on dark mandala imagery. Purple is used **only** in the logo. It never appears in the UI.

### 2.2 Neutrals (verified)

| Role | Value |
|---|---|
| Heading text | #333333 |
| Body text | #777777 / #898989 / #676767 (accordion content) |
| Muted labels | #909090, #8F8F8F |
| Page background | #FFFFFF |
| Alternate band | #F2F2F2 |
| Borders | #EBEBEB (theme), light grey input borders |
| Footer text | #D4D4D4 on dark imagery |
| Title banner imagery (`footer-image-compressor.jpg`) | Near-black warm brown. Average **#130D0A**, top-to-bottom #0E0B09 → #1A110A (pixel-sampled estimate) |
| Footer imagery (`footer-images-compressor.jpg`) | Dark teal fading to dark brown, top-to-bottom **#142A28 → #342828**, average #212928 (pixel-sampled estimate) |
| Dark overlays | rgba(0,0,0,.5–.85) (slider arrows, search overlay) |

### 2.3 Incidental / non-brand colours (do not carry forward)

| Value | Source | Why it is incidental |
|---|---|---|
| **#FF6900 → #FFB384** orange gradient | Slider Revolution "FIND MORE" / "WHAT IS CHAKRA" buttons | Slider preset. Clashes with the gold UI |
| rgba(255,247,247,.3) | Contact page header background | Theme header option |
| #F7F7F7 overlay, −50 saturation | Google Map style | Map styling |
| Gravatar, OpenTable, Elated demo colours | Demo pages | Demo content |

## 3. Logo

| Variant | File | Use on live site |
|---|---|---|
| Horizontal, light text ("UBUD" spaced caps + "chakra healing" script) | `UCH-standard-light(-compressor).png` 274×80 | Desktop header over dark banners |
| Horizontal, dark text | `UCH-standard-dark-copy(-compressor).png` 274×80 | Light header / mobile header |
| Stacked, light ("chakra healing" under the lotus, no "Ubud") | `UCH-dual-light2(-compressor).png` 183×220 | Home desktop header (centred) |
| Long logo with "HEAL FROM WITHIN" | `UCH-Logo-long-compressor.png` / `-white-` 1200×245 | Not used live |
| Stacked full logo with tagline | `UCH-Logo-e1503291857177.png` 250×266 | Not used live. Best master |
| Lotus mark only | `favicon-UCH.png` 655×655 | Favicon |

- The mark is a seated meditating figure formed from purple lotus petals, with seven chakra-coloured dots along the spine.
- "chakra healing" is set in a Devanagari-inspired display script (raster only; the font is unknown).
- **There are no vector (SVG/AI) logo files.** All logos are PNGs of 274px wide or less, except the 1200px long logo. The Phase 2 header should use the 1200px long logo or ask the client for a vector. Rendering the 274px PNG at 2× will be soft.
- The logo script is part of the logo artwork. It does **not** count toward the two-font rule and must not be recreated as a web font.

## 4. Other visual identity elements

| Element | Original treatment |
|---|---|
| Imagery | Warm, natural-light documentary photos of the healer's hands on clients; still life of frangipani and a singing bowl; dark cosmic mandala illustrations for banners and the footer |
| Image cropping | Hard-edged rectangles, no rounding, no shadows. The gallery uses 4:5 portrait crops; cards use about 3:2 |
| Border radius | 0–2px buttons (slider buttons 5px). Square inputs |
| Shadows | Essentially none (the slider buttons have a soft drop shadow) |
| Icons | Thin line icons (ElegantIcons / Linea): phone, mail, pin, search, heart |
| Decorative motif | A short centred gold rule under section headings. Mandala / sacred-geometry patterns in banners and the footer |
| Backgrounds | White content, light-grey (#F2F2F2) feature band, dark mandala banners/footer |
| Tone | Calm, spiritual, traditional-Balinese, personal (one named healer). The copy is earnest, written in non-native English |

**Keep for Phase 2:** the purple logo, gold accent, warm photography, a light/dark rhythm with an optional subtle mandala texture, and the serif + sans pairing feel.
**Leave behind:** the orange slider gradient, Montserrat Light slider type, the full-bleed busy mandala banners on every page, the 7 icon fonts, and very long text measures.
