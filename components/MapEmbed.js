import { mapLinks, site } from '@/lib/content';

// Key-free Google Maps embed (the original exposed an API key; 08 §4 T12).
export default function MapEmbed({ className = 'map' }) {
  return (
    <div className={className} style={{ marginTop: 0 }}>
      <iframe
        src={mapLinks.embed}
        title={`Map of ${site.location.street}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p>
        <a href={mapLinks.open} target="_blank" rel="noopener noreferrer">
          Open in Google Maps
        </a>
      </p>
    </div>
  );
}
