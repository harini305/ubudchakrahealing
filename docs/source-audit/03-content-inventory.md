# 03 — Content Inventory (preservation reference)

**Machine-readable source of truth:** `content/site-content.json`. It holds verbatim text with the original spelling preserved, organised by page and section, with image references.
**Raw captures:** `data/page-text/<slug>.txt` (full visible text per route) and `data/wp-pages-rest.json` (the WordPress-authored HTML for the 10 WP pages).

> Text below is verbatim unless marked *[summary]*. Original typos are kept on purpose. Corrections need business approval (see `08`).

---

## 1. Business facts (verified on site)

| Fact | Value | Source (page › location) |
|---|---|---|
| Business name | Ubud Chakra Healing | Everywhere |
| Logo tagline | HEAL FROM WITHIN | `UCH-Logo-long-*.png`, `UCH-Logo.jpg` (not shown on the live site) |
| WP site tagline | Chakra Healing in Ubud, Bali | WP settings / RSS feed |
| Practitioner | Mr. Ketut | Home slider; About |
| Teacher | "a Japanese person named Kayo" | About › intro |
| Phone | +62 81353040211 (`tel:+6281353040211`) | Footer; Contact |
| Email | info@ubudchakrahealing.com | Footer; Contact |
| Address shown | "Ubud Monkey Forest" | Footer; Contact |
| Location description | "The Healing is taken place in Puspa Body Treatment located at Monkey Forest street just across from the football field." | About › Location |
| Map | Pin near Jl. Monkey Forest. Geocode query "Nyuh Gading Restaurant and Accomodation" | About and Contact map embeds |
| Prices / durations / hours | **Not published anywhere** | — |
| Testimonials / reviews / FAQs | **None.** The testimonial taxonomies are empty theme leftovers | — |
| Blog posts | **0** (REST `/posts` is empty; `/blog/` returns 404) | — |
| Social profiles | **None real.** Icons link to generic platform homepages | Footer |

## 2. Navigation and CTAs

| Label | Destination | Location |
|---|---|---|
| HOME / TREATMENTS / ABOUT US / MEANING OF CHAKRA / CONTACT US | `/`, `/treatments/`, `/about-us/`, `/what-is-chakra/`, `/contact-us/` | Header and footer "SITEMAP" |
| FIND MORE | `/about-us` | Home slides 1–2 |
| WHAT IS CHAKRA | `/chackra-meaning` **(404)** | Home slide 3 |
| READ MORE... | `/what-is-chakra/` | Home › Meaning of Chakra |
| HEALING METHOD | `#` (dead) | About › Healing Process |
| CONTACT US | `#` (dead) | About › The Healer |
| CONTACT US | `/contact-us` | About › Location |
| SEND | CF7 submit | Contact |
| BACK TO HOME | `/` | 404 page |

## 3. Page content

### 3.1 Home `/`

**Hero slides**

| # | Title | Text | CTA |
|---|---|---|---|
| 1 | The Healer | Mr. Ketut has been learning and do the healing over than 20 years. He learned this technique from a Japanese person. | FIND MORE |
| 2 | Healing & Relaxation | The Healer body is used as a vehicle for energy throughout to transmit energy via the hands to the client. | FIND MORE |
| 3 | Wheels of Energy | There are seven main chakras, which align the spine, starting from the base of the spine through to the crown of the head. | WHAT IS CHAKRA |

**The Meaning of Chakra** (H2)

1. The Sanskrit word Chakra literally translates to wheel or disk. In yoga, meditation, and Ayurveda, this term refers to wheels of energy throughout the body. There are seven main chakras, which align the spine, starting from the base of the spine through to the crown of the head.
2. Located along the central channel of the body from the base of the spine to the top of the head, they are conceived of as whirling, wheel-like vortices through which universal/cosmic energy flows into and out of a person.
3. Chakras are energy centers or portals in the energy field. They play an important role in the health of your energy systems, including your physical body. *[then repeats paragraph 2 verbatim]*

**Ubud Chakra Healing / Know more about Chakra Healing** (accordion)

- **WHAT IS CHAKRA HEALING:** When we talk about chakra healing, we may actually refer to various techniques and meanings. A commonly accepted definition of chakra balancing is the process through which the energy of the chakras is brought to a well functioning and harmonious state
- **WHY BALANCING YOUR CHAKRAS?:** The purpose of chakra healing is to support a balanced flow that will sustain our overall level of energy. In our everyday life, we are subjected to a number of activities, sources of stress and demands that result in fluctuations in our energy level. Some may feel draining, others fulfilling or nourishing. Furthermore, past events and experiences often leave a long lasting influence on how we feel and are in the world, therefore influencing how we manage our energy day-to-day. / Stresses placed on us by the demands of life may result in interruptions and fluctuations in our energy flow and chakra imbalances

### 3.2 About Us `/about-us/`

**Intro**
- Ubud Chakra Healing was built in 2022 by Mr. Ketut in Ubud, Monkey Forest Street.
- The mission of the place is to give a new experience for others, relaxing and happy experience after the healing session. This place is focusing on Chakra balancing, a session to check and analyze the chakra within your body.
- The place is a simple one and located in a strategic place in the centre of Ubud. It is an easy access for those who would like to experience the sensation of transferring the good energy throughout the body.
- Mr. Ketut has learned the Chakra Balancing from a Japanese person named Kayo.
- He has learned for it about more than 15 years. He was a civil servant before and has retired about 5 years. In this time he focuses himself to serve others. Giving a positive energy and spread love to others.

**HEALING PROCESS:** The Healer body is used as a vehicle for energy throughout to transmit energy via the hands to the client, which promote healing and relaxation to the whole body, leaving the calm and well being on all level, physical, mental, emotional and spiritual

**THE HEALER:** Mr. Ketut has been learning and do the healing over than 20 years. He learned this technique from a Japanese person. Then he decided to do the healing in 1997 until now. During his retirement as a civil servant before, the time to heal the people is more than before.

**LOCATION:** The Healing is taken place in Puspa Body Treatment located at Monkey Forest street just across from the football field.

### 3.3 Meaning of Chakra `/what-is-chakra/`

These are the six paragraphs as published. Unique content is in **bold**; the rest repeats earlier paragraphs.
1. The Sanskrit word Chakra literally translates… (same as Home p1)
2. Located along the central channel… (same as Home p2)
3. Chakras are energy centers or portals… + repeat of p2
4. **Chakras can become blocked or imbalanced. With a chakra blockage, the free flow of energy in and out, plus the flow of energy to other chakras, is impeded. If the chakras are imbalanced, one or more chakras is over-active or underactive compared to the others.**
5. **Blockages and imbalances in a chakra can result in disturbances—sometimes profound—in a person's health, emotions, mind, spirit, or life.**
6. *[repeats p4 + p5 verbatim]*

This is followed by the same accordion as Home.

### 3.4 Treatments `/treatments/`

Tagline: **Relaxation And Rejuvenation In The Island Of The Gods**

| Treatment | Card excerpt (verbatim) |
|---|---|
| Chakra Balancing | The Sanskrit word Chakra literally translates to wheel or disk. In yoga, meditation, and Ayurveda, this term refers to wheels of energy throughout the body. There are seven main chakras, which align the spine, starting from the base of the spine through to the crown of the head. |
| Palm Reading | Palm reading, also called palmistry, originated from ancient India, and is now popular and fashionable worldwide as a way of seeing a person's fate and personality by reading palm lines, hand shapes and colors, etc. |
| Water Purification | Melukat is one of the sacred rituals in Bali, which uses water as a cleansing tool. The purpose of the Melukat is to cleanse the body, mind, spirit, and soul to eliminate bad spirits, negative effects and to bring good fortune. It is believed that Melukat cures non-medical and spiritual diseases. |
| Balinese Massage | Science has stated that massage therapies are the best therapy for your mind and body. Massage not only relaxes your body and also de-stresses the mind by releasing serotonin in the body. |

### 3.5 Treatment details (text that does not appear on the cards)

**Chakra Balancing:** Home/Meaning of Chakra paragraphs 1–6 *[duplicated]* + the "The purpose of chakra healing…" and "Stresses placed on us…" text *[duplicated from the accordion]*. **It has no treatment-specific information** (what happens in a session, length, price).

**Palm Reading**
- There are five main lines on the palm: the life line, heart line (also called love line), money line (also called the fate line), head line, and marriage line. Different lines correspond with different traits.
- Life line: health and physical vitality
- Heart line: love and emotion
- Money line: career and fortune
- Head line: intelligence and mentality
- Marriage line: married life and relationships

**Water Purification** (titled "MELUKAT – WATER PURIFICATION" on `/yoga-treatment/`)
- The package is included with transfer from Ubud's hotel, offering and guide to do the purification.

**Balinese Massage:** "Here are the benefit of the Balinese Massage"
- **Relieves muscle pain:** This massage type helps to muscles to stretch and this keeps away all the pain from the body inclusive of the joints. In true sense, the joints will be highly liberated.
- **Treats any kind of sleep issues:** Balinese massage possesses the capability of boosting your sleep pattern. This involves proper circulation of blood in the body thereby helping the brain to function properly and rectify sleep issues.
- **Boosts blood circulation:** One major health benefit hitched to Balinese massage is boosting the circulation of blood. This happens when the therapist adheres to upward pressure point strokes.
- **Promotes skin health:** Being a part of your body, you need to pay equal attention on the health of your skin too. Use of essential oils in Balinese massages acts as a supportive agent for the health of your skin, especially to keep away dryness.
- **Helps to keep away stress:** All types of massage possess the ability to serve as stress buster and Balinese massage too doesn't fail to live up to this. This is all because of the massage's ability to boost blood circulation.
- **Serve as an energizer:** This massage type can also boost your energy quotient by keeping stress away from your body. The body relaxes and feels free to carry out other activities.
- **Boost the immunity level:** The immune system can be boosted by this massage type. This is all due to the oil and the pressure point application made in Balinese massage which acts well against any kind of diseases.

> ⚠ The massage benefits and the Melukat text include **health claims** ("Treats any kind of sleep issues", "acts well against any kind of diseases", "cures non-medical and spiritual diseases"). See `08` §3.

### 3.6 Contact `/contact-us/`

H2 "Contact Us" · H5 "Please fill form below" · fields: Your Name (required) · Your Email (required) · Contact phone (required, default "+62") · Subject · Your Message · SEND. Left column: phone, email, "Ubud Monkey Forest".

### 3.7 Footer (all pages)

`+62 81353040211` · `info@ubudchakrahealing.com` · `Ubud Monkey Forest` · social icons (placeholders) · **SITEMAP**: Home, Treatments, About Us, Meaning of Chakra, Contact Us · `©2022 Ubud Chakra Healing – Developed by Sadu Jayanatha`

---

## 4. SEO metadata (main pages)

Full table: `data/seo-metadata.csv`.

| Page | `<title>` | Meta description | Canonical | og:image |
|---|---|---|---|---|
| Home | Healing & Relaxation - Ubud Chakra Healing, Bali | Clearing, energizing, activating & other spiritual healing methods for the mind & body. Heal your body and soul. Yoga Studio & Class Schedules, Ubud - Bali | `/` | none |
| About | About Us - Ubud Chakra Healing | With over than 20 years experience, Ubud chakra healing promote healing and relaxation to the whole body, leaving the calm and well being on all level. | `/about-us/` | none |
| Treatments | Treatments - Ubud Chakra Healing | *(same as About)* | `/treatments/` | none |
| `/yoga-treatment/` | Treatment - Ubud Chakra Healing | *(same as About)* | `/yoga-treatment/` | none |
| Meaning of Chakra | Meaning of Chakra - Ubud Chakra Healing | Chakra are energy centers or portals in the energy field. They play an important role in the health of your energy systems, including your physical body. | `/what-is-chakra/` | none |
| Contact | Contact Us - Ubud Chakra Healing | Talk with us for any questions about Ubud Chakra Healing, Bali. Indonesia | `/contact-us/` | none |
| Chakra Balancing | Chakra Balancing - Ubud Chakra Healing | none | self | `RES-13-scaled.jpg` |
| Palm Reading | Palm Reading - Ubud Chakra Healing | none | self | `Palm-Reader.jpg` |
| Water Purification | Water Purification - Ubud Chakra Healing | none | self | `Tirta-Sudamala-7-1024x682.jpg` |
| Balinese Massage | Balinese Massage - Ubud Chakra Healing | none | self | `MI_07032UVR-.jpg` |

Note: the Home and Contact pages have **no `<h1>`**. The slider titles and the Contact H2 are not H1s.

JSON-LD (Yoast): `WebSite` (with SearchAction), `WebPage` and `BreadcrumbList` only. There is **no `LocalBusiness` / `HealthAndBeautyBusiness` schema**. That is a Phase 2 opportunity once the address and hours are confirmed. `lang="en-US"`. Search and 404 pages are `noindex`. Everything else, including the demo pages, is `index, follow`.

## 5. Content priority

| Priority | Content |
|---|---|
| **Essential** | The healer's story (Mr. Ketut, his teacher Kayo, the healing process), the four treatments and their real details, contact details, location/map, contact form |
| **Important** | The chakra explanation (one deduplicated version), palm-line list, Melukat package inclusions, massage benefits (after review of the claims) |
| **Low** | Side panel text, "Like" counts, tags, the repeated accordion on several pages, the generic footer sitemap |
| **Drop** | All theme demo pages and text, lorem ipsum, the "About Me" sidebar, placeholder social links, the "Yoga Studio & Class Schedules" meta claim |
| **Duplicated (consolidate)** | Chakra paragraphs (4 pages, plus repeats within pages); `/yoga-treatment/` vs the detail pages; the accordion (Home + Meaning of Chakra); the "over than 20 years" healer bio (Home slide + About) |
| **Missing (ask the client)** | Prices, session lengths, opening hours, booking method (WhatsApp?), exact address, real social links, testimonials, the healer's surname/photo permission, who the palm reader is |
