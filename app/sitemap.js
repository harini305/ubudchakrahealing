import { treatments } from '@/lib/content';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ubudchakrahealing.com';

export default function sitemap() {
  const paths = ['/', '/treatments', '/about-us', '/what-is-chakra', '/contact-us', ...treatments.map((t) => `/treatment/${t.slug}`)];
  return paths.map((p) => ({ url: `${BASE}${p}` }));
}
