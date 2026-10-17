import Link from 'next/link';
import Picture from '@/components/Picture';
import { treatments } from '@/lib/content';

// Home: four small cards in a row (h3). Treatments page: two large cards per row (h2).
export default function TreatmentGrid({ large = false }) {
  const Heading = large ? 'h2' : 'h3';
  const sizes = large
    ? '(min-width: 1100px) 50vw, 100vw'
    : '(min-width: 1100px) 25vw, (min-width: 640px) 50vw, 100vw';
  return (
    <ul className={large ? 'treatment-grid treatment-grid--large' : 'treatment-grid'}>
      {treatments.map((t, i) => (
        <li key={t.slug} className="treatment-card">
          <Picture name={t.image} alt={t.imageAlt} sizes={sizes} priority={large && i < 2} />
          <Heading>
            <Link href={`/treatment/${t.slug}`}>{t.title}</Link>
          </Heading>
          <p>{t.summary}</p>
        </li>
      ))}
    </ul>
  );
}
