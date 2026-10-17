import ContactBand from '@/components/ContactBand';
import TreatmentGrid from '@/components/TreatmentGrid';

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

      <section className="section" aria-label="All treatments">
        <div className="container">
          <TreatmentGrid large />
        </div>
      </section>

      <ContactBand />
    </>
  );
}
