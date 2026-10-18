import { treatments } from '@/lib/content';
import { SITE_URL as BASE } from '@/lib/site-url';

export default function sitemap() {
  const paths = ['/', '/treatments', '/about-us', '/what-is-chakra', '/contact-us', ...treatments.map((t) => `/treatment/${t.slug}`)];
  return paths.map((p) => ({ url: `${BASE}${p}` }));
}
