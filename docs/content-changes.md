# Content changes awaiting client sign-off

Phase 2 was built with **neutral copy**: only facts in `docs/source-audit/content/site-content.json` are used, and nothing was invented. This file lists every place where the wording differs from the original, so the business can approve or correct it. Source references point to the audit (`08-issues-gaps-questions.md`).

## 1. Facts withheld because the sources conflict

| Topic | Original statements | What the new site says | Needs |
|---|---|---|---|
| Start year (F1) | "built in 2022" vs "healing in 1997 until now" | No year is stated | The correct year(s) |
| Experience (F2) | "over than 20 years" vs "more than 15 years" | No number of years is stated | The correct figure |
| Venue (F3) | Text: "Puspa Body Treatment"; map pin: "Nyuh Gading Restaurant and Accomodation" | "Monkey Forest Street, in the centre of Ubud, across from the football field". No venue name. The map pins the original Contact-page coordinates (−8.510074, 115.261218), not a business listing | Venue name, exact address, Google Maps place link |
| Yoga (F6) | Meta description: "Yoga Studio & Class Schedules" | Yoga is not mentioned | Confirm yoga is not offered |
| Copyright (F7) | "©2022" | "© 2026" (constant `site.copyrightYear` in `lib/content.js`) | — |

## 2. Kept as-is although flagged (C4: health claims)

The following claims appear unchanged in meaning on the treatment pages. Decide whether to keep, soften or remove them:

- Balinese massage: "Science has stated that massage therapies are the best therapy for your mind and body"; "Treats any kind of sleep issues"; "acts well against any kind of disease"; "Boosts the immunity level".
- Melukat: "It is believed that Melukat cures non-medical and spiritual diseases."

## 3. Light grammar and style edits (meaning preserved)

| Original | New |
|---|---|
| "Mr. Ketut has been learning and do the healing over than 20 years. He learned this technique from a Japanese person." | "Mr. Ketut learned chakra balancing from a Japanese teacher." (number of years removed, see §1) |
| "He has learned for it about more than 15 years. He was a civil servant before and has retired about 5 years. In this time he focuses himself to serve others. Giving a positive energy and spread love to others." | "He was a civil servant before he retired, and now focuses on serving others: giving positive energy and spreading love." ("about 5 years" also removed because it dates the copy) |
| "The Healer body is used as a vehicle for energy throughout to transmit energy via the hands to the client, which promote healing … leaving the calm and well being on all level, …" | "The healer’s body is used as a vehicle for energy, transmitted through the hands to the client. This promotes healing and relaxation throughout the whole body, leaving calm and well-being on every level: …" |
| "The mission of the place is to give a new experience for others, relaxing and happy experience after the healing session." | "The mission of the place is to give others a new experience, and a relaxing and happy one after the healing session." |
| "The Healing is taken place in … Monkey Forest street just across from the football field." | "… easy to reach on Monkey Forest Street in the centre of Ubud, across from the football field." |
| "Here are the benefit of the Balinese Massage" | "Benefits of Balinese massage" (heading) |
| "This massage type helps to muscles to stretch and this keeps away all the pain from the body inclusive of the joints. In true sense, the joints will be highly liberated." | "This massage helps the muscles to stretch, which keeps pain away from the body, including the joints." |
| "Serve as an energizer" / "Boost the immunity level" | "Serves as an energiser" / "Boosts the immunity level" |
| "The package is included with transfer from Ubud’s hotel, offering and guide to do the purification." | "Transfer from your hotel in Ubud, the offering, and a guide for the purification." |
| "Meaning Of Chakra" / "WHAT IS CHAKRA HEALING" / "WHY BALANCING YOUR CHAKRAS?" | Sentence case: "The meaning of chakra", "What is chakra healing?", "Why balance your chakras?" |
| "Water Purification" vs "MELUKAT – WATER PURIFICATION" | "Water Purification (Melukat)" |
| Other minor fixes | Commas, "energy centres", "over-active or under-active", "well-functioning", British spelling throughout |

## 4. Deduplication (C1, C2)

- Each chakra paragraph now appears **once**, on `/what-is-chakra`. The paragraphs that repeated within pages were merged.
- The Chakra Balancing page no longer repeats the chakra theory. It describes the session using the About page's "Healing process" text and links to `/what-is-chakra`.
- The home page shows a single teaser sentence (originally the third hero slide) and links onward.

## 5. New UI copy (not business facts)

Headings, buttons and form messages were written for the new site, for example: "Chakra healing in Ubud with Mr. Ketut", "See treatments", "Ask about a session", "Send message", the validation messages, and the "not connected to an inbox yet" notice. None of them state a fact about the business that is not in the source.

## 6. Chakra list

The seven chakra names and meanings on `/what-is-chakra` (Root "Honours the earth" … Crown "Honours spiritual connectedness") are transcribed from the labels on the original site's chakra diagram (`Chakra.png`). The diagram itself is **not** used because its rights are unverified (A1). It is replaced by an original SVG/CSS "spine" in the logo's chakra colours.
