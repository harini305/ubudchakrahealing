import manifest from '@/lib/image-manifest.json';

// Renders pre-generated derivatives from public/images (see scripts/build-images.mjs).
// Next's image optimiser is disabled (images.unoptimized), so responsiveness
// comes from the WebP srcset; a single JPEG is the fallback for old browsers.
export default function Picture({ name, alt, sizes = '100vw', priority = false, className }) {
  const entry = manifest[name];
  if (!entry) throw new Error(`Unknown image "${name}" — add it to scripts/build-images.mjs`);

  const srcset = entry.widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', ');

  return (
    <picture className={className}>
      <source type="image/webp" srcSet={srcset} sizes={sizes} />
      <img
        src={entry.jpg}
        width={entry.width}
        height={entry.height}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding={priority ? 'sync' : 'async'}
      />
    </picture>
  );
}

// JPEG URL for Open Graph / social previews.
export function ogImage(name) {
  const entry = manifest[name];
  if (!entry) throw new Error(`Unknown image "${name}"`);
  return entry.jpg;
}
