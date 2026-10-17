import Link from 'next/link';
import HomeHero from '@/components/HomeHero';
import ChakraSpine from '@/components/ChakraSpine';
import Picture from '@/components/Picture';
import TreatmentGrid from '@/components/TreatmentGrid';
import ContactBand from '@/components/ContactBand';

export const metadata = {
  title: { absolute: 'Ubud Chakra Healing | Chakra healing with Mr. Ketut in Ubud, Bali' },
  description:
    'Chakra balancing, palm reading, Melukat water purification and Balinese massage with Mr. Ketut on Monkey Forest Street, Ubud, Bali.',
  alternates: { canonical: '/' },
};

const gallery = [
  { name: 'hands-forehead-wide', alt: 'The healer’s hands on a client’s head as they lie on a patterned pillow' },
  { name: 'hands-temple', alt: 'Fingertips resting on a client’s temples' },
  { name: 'hands-forehead-tall', alt: 'Hands cradling a client’s head on a patterned pillow' },
  { name: 'hands-head', alt: 'The healer’s hands on a client’s brow, seen from above' },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section" aria-labelledby="chakra-heading">
        <div className="container chakra-intro chakra-intro--teaser">
          <div className="prose">
            <h2 id="chakra-heading">Wheels of energy</h2>
            <p className="lede" style={{ marginTop: 'var(--space-m)' }}>
              The Sanskrit word chakra translates to wheel or disk. There are seven main chakras, which align the spine,
              starting from the base of the spine through to the crown of the head.
            </p>
            <div className="actions">
              <Link href="/what-is-chakra" className="text-link">
                Read about the meaning of chakra
              </Link>
            </div>
          </div>
          <ChakraSpine compact />
        </div>
      </section>

      <section className="section section--wash" aria-labelledby="treatments-heading">
        <div className="container">
          <h2 id="treatments-heading">Treatments</h2>
          <TreatmentGrid headingLevel={3} />
        </div>
      </section>

      <section className="section" aria-labelledby="healer-heading">
        <div className="container split">
          <Picture
            name="healer-portrait"
            alt="Mr. Ketut stands with eyes closed and hands raised in front of a mandala painting"
            sizes="(min-width: 900px) 40vw, 100vw"
            className="split__media split__media--portrait"
          />
          <div className="prose">
            <h2 id="healer-heading">The healer</h2>
            <p>
              Mr. Ketut learned chakra balancing from a Japanese teacher. A retired civil servant, he now devotes his time
              to serving others: giving positive energy and spreading love.
            </p>
            <p>
              Sessions take place on Monkey Forest Street in the centre of Ubud, across from the football field.
            </p>
            <div className="actions">
              <Link href="/about-us" className="text-link">
                More about Mr. Ketut
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Photographs from healing sessions" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ul className="gallery">
            {gallery.map((g) => (
              <li key={g.name}>
                <Picture name={g.name} alt={g.alt} sizes="(min-width: 900px) 25vw, 50vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
