import Link from 'next/link';
import Picture from '@/components/Picture';
import { treatments } from '@/lib/content';

export default function TreatmentGrid({ headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  return (
    <ul className="treatment-grid">
      {treatments.map((t) => (
        <li key={t.slug} className="treatment-card">
          <Picture name={t.image} alt={t.imageAlt} sizes="(min-width: 1100px) 25vw, (min-width: 640px) 50vw, 100vw" />
          <Heading>
            <Link href={`/treatment/${t.slug}`}>{t.title}</Link>
          </Heading>
          <p>{t.summary}</p>
        </li>
      ))}
    </ul>
  );
}
