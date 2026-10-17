# 07 — Responsive Observations

**Tested viewports:** desktop 1440×900 · tablet 768×1024 (touch) · mobile 390×844 (touch, iOS UA). There was also a width sweep on `/about-us/` at 1440 / 1280 / 1024 / 1000 / 768 / 600 / 480 / 390 / 360. The engine was Chromium only.
**Evidence:** `screenshots/<slug>__desktop-1440.jpg`, `__tablet-768.jpg`, `__mobile-390.jpg` (full page) and `screenshots/interaction__*.jpg`.

## 1. Breakpoints (verified)

| Width | Header | Page H1 size |
|---|---|---|
| 1440, 1280 | Desktop header | 80px |
| **≤1024** | **Switches to the mobile header** (hamburger) | 80px |
| ≤768 | Mobile header | 60px |
| ≤480 | Mobile header | 35px |

No document-level horizontal scroll was detected at any width (`scrollWidth ≤ innerWidth`). Some content is visually clipped instead; see §3.

## 2. Shared behaviour

| Area | Desktop 1440 | Tablet 768 | Mobile 390 |
|---|---|---|---|
| Header | Transparent over the hero; logo + 5-item menu + search (+ side-panel icon on inner pages). Sticky 58px bar on scroll | 100px white bar: hamburger left, logo centre, search right. Not sticky | Same as tablet |
| Mobile menu | — | White dropdown, 5 links, thin dividers | Same |
| Content width | 1200px grid (`.eltd-grid`). Some rows are full-width 1440 (text at 1195px measure) | About 650px | About 340px (25px gutters) |
| Title banner | 525px, H1 80px | Shorter, H1 60px | About 140px, H1 35px |
| Footer | 2 columns (contact / sitemap) + bottom credit, about 470px | Stacked | Stacked. The credit wraps onto 2 lines, with "Sadu Jayanatha" isolated on its own line |
| Body text | 14px / 25px | 14px / 25px | 14px / 25px (no scaling) |
| H2 | 38px | 38px | 38px (no scaling, so long headings wrap: "HEALING / PROCESS") |

## 3. Page-specific findings

| Page | Desktop | Tablet | Mobile |
|---|---|---|---|
| **Home** | ⚠ **A duplicate oversized "FIND MORE" button** (35px text, about 480×137px) in the lower half of slide 1. 5 gallery images in one row | ⚠ **Severe:** the "Meaning of Chakra" paragraphs collapse into a column about 1 word wide, and the page is 7,205px tall. The duplicate slider button is also visible | Slider becomes a portrait crop; the arrows overlap the title. Gallery shows one image at a time. The chakra diagram stacks above the accordion |
| Treatments | 3-column grid (4 cards → 3 + 1) | ⚠ 2-column masonry with an **uneven gap**: Water Purification drops into the right column, leaving a blank area on the left | 1 column |
| Treatment detail | Images left (stacked), text right | Similar | Hero title over the image; images stack **above** the text, so the text begins about 1,000px down |
| About | Alternating image/text rows; map beside "Location"; about 150px of empty space before Location | Stacked | ⚠ **Photos and map are hidden** (`display:none` on the WPBakery columns). Only the text and buttons remain |
| Meaning of Chakra | Long 1,195px text measure | Wraps | Diagram stacks above the accordion |
| Contact | Map full-bleed under the transparent header (the menu overlays the map). ⚠ The form column runs to the viewport edge (inputs about 705px, right gutter lost) | Stacked | ⚠ Phone/email/address items are **flush to the left edge (0px gutter)**. The form inputs extend past the right edge. The chakra diagram is hidden |
| 404 | Stock yoga background | — | — |

## 4. Interactive components across viewports

| Component | Behaviour |
|---|---|
| Slider | Arrows + bullets on all sizes. Text and buttons scale down. Same 3 slides (no mobile-specific content) |
| Accordion | Full width on mobile. Works with touch (tested at desktop size only) |
| Gallery | Horizontal row on desktop/tablet; single-image carousel on mobile |
| Google Maps | Interactive on all sizes. Scroll-wheel zoom is on (it traps scrolling on desktop) |
| Sticky header | Desktop only |

## 5. Implications for Phase 2

- Use a fluid type scale (clamp). H2 must shrink on mobile, and body text should be 16px or more on mobile.
- Constrain the reading measure to about 65–75 characters.
- Do not hide meaningful images and the map on mobile. Resize them instead.
- Reorder treatment detail pages on mobile so the title and key facts come before the image stack.
- Keep consistent gutters (at least 16–20px) so that nothing sits flush against the screen edge.
- Use a uniform card grid (CSS grid, not masonry) for the treatments.
- The header switches at 1024px today. Phase 2 can switch earlier or later as the design needs, but test 768–1024 explicitly, because that is where the original breaks.
