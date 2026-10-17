import Link from 'next/link';
import { notFound } from 'next/navigation';
import Picture from '@/components/Picture';
import ContactBand from '@/components/ContactBand';
import { getTreatment, treatments } from '@/lib/content';
import { treatmentBodies } from './bodies';

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return {};
  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: `/treatment/${t.slug}` },
    openGraph: { images: [`/images/${t.image}-800.jpg`] },
  };
}

export default async function TreatmentPage({ params }) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();
  const { Body, gallery = [] } = treatmentBodies[slug];
  const facts = [
    ['Duration', t.duration],
    ['Price', t.price],
  ].filter(([, v]) => v);

  return (
    <>
      <div className="container page-head page-head--with-image">
        <div>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 'var(--space-s)', fontSize: 'var(--step--1)' }}>
            <Link href="/treatments">All treatments</Link>
          </nav>
          <h1>{t.title}</h1>
          {facts.length > 0 && (
            <dl className="facts">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        <Picture
          name={t.image}
          alt={t.imageAlt}
          sizes="(min-width: 900px) 45vw, 100vw"
          className="page-head__image"
          priority
        />
      </div>

      <section className="section" style={{ paddingTop: 'var(--space-l)' }}>
        <div className="container">
          <div className="prose">
            <Body />
            <div className="actions">
              <Link href="/contact-us" className="button">
                Ask about {t.title.replace(/ \(.*\)$/, '').toLowerCase()}
              </Link>
            </div>
          </div>
          {gallery.length > 0 && (
            <div className="detail-gallery">
              {gallery.map((g) => (
                <Picture key={g.name} name={g.name} alt={g.alt} sizes="(min-width: 700px) 50vw, 100vw" />
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
