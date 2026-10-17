import manifest from '@/lib/image-manifest.json';

// Renders pre-generated derivatives from public/images (see scripts/build-images.mjs).
// Next's image optimiser is disabled (images.unoptimized), so responsiveness
// comes from these srcsets.
export default function Picture({ name, alt, sizes = '100vw', priority = false, className }) {
  const entry = manifest[name];
  if (!entry) throw new Error(`Unknown image "${name}" — add it to scripts/build-images.mjs`);

  const srcset = (ext) => entry.widths.map((w) => `/images/${name}-${w}.${ext} ${w}w`).join(', ');
  const fallbackWidth = entry.widths.find((w) => w >= 1200) ?? entry.widths.at(-1);

  return (
    <picture className={className}>
      <source type="image/webp" srcSet={srcset('webp')} sizes={sizes} />
      <img
        src={`/images/${name}-${fallbackWidth}.jpg`}
        srcSet={srcset('jpg')}
        sizes={sizes}
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
