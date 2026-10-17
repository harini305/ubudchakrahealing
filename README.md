# Ubud Chakra Healing

Website for Ubud Chakra Healing (Mr. Ketut, Ubud, Bali). Next.js App Router, JavaScript, GSAP.

- `docs/source-audit/`: Phase 1 audit of the original WordPress site, with the untouched original assets.
- `docs/phase-2-handoff.md`: what was built, what was verified, and what is needed before launch.
- `docs/content-changes.md`: every wording change, for client sign-off.

```bash
npm install
npm run images   # build responsive derivatives into public/images from the originals
npm run dev      # http://localhost:3000
npm run build && npm start
```

Copy `.env.example` to `.env.local` and fill it in to enable contact form delivery.
