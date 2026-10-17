import { mapLinks, site } from '@/lib/content';

// Key-free Google Maps embed (the original exposed an API key; 08 §4 T12).
export default function MapEmbed({ className = 'map', link = true }) {
  return (
    <div className={className}>
      <iframe
        src={mapLinks.embed}
        title={`Map of ${site.location.street}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {link && (
        <p>
          <a href={mapLinks.open} target="_blank" rel="noopener noreferrer">
            Open in Google Maps
          </a>
        </p>
      )}
    </div>
  );
}
