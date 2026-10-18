// Absolute site URL for canonical links, sitemap and Open Graph images.
// NEXT_PUBLIC_SITE_URL wins; on Vercel the project's production domain is used;
// locally it falls back to the business's own domain.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  'https://www.ubudchakrahealing.com';
