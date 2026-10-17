import Link from 'next/link';
import Picture from '@/components/Picture';
import ContactBand from '@/components/ContactBand';
import { treatments } from '@/lib/content';

export const metadata = {
  title: 'Treatments',
  description:
    'Chakra balancing, palm reading, Melukat water purification and Balinese massage in Ubud, Bali.',
  alternates: { canonical: '/treatments' },
  openGraph: { images: ['/images/hands-crown-1200.jpg'] },
};

export default function TreatmentsPage() {
  return (
    <>
      <div className="container page-head">
        <h1>Treatments</h1>
        <p>Relaxation and rejuvenation on the Island of the Gods.</p>
      </div>

      <section className="section" style={{ paddingTop: 'var(--space-l)' }} aria-label="All treatments">
        <div className="container">
          <ul className="treatment-list">
            {treatments.map((t, i) => (
              <li key={t.slug} className={i % 2 ? 'split split--reverse' : 'split'}>
                <Picture
                  name={t.image}
                  alt={t.imageAlt}
                  sizes="(min-width: 900px) 45vw, 100vw"
                  className="split__media split__media--landscape"
                  priority={i === 0}
                />
                <div className="prose">
                  <h2>{t.title}</h2>
                  <p>{t.summary}</p>
                  <div className="actions">
                    <Link href={`/treatment/${t.slug}`} className="text-link">
                      About {t.title.replace(/ \(.*\)$/, '').toLowerCase()}
                    </Link>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
