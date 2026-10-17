import Link from 'next/link';
import ChakraSpine from '@/components/ChakraSpine';
import ContactBand from '@/components/ContactBand';
import { chakraFaq } from '@/lib/content';

export const metadata = {
  title: 'Meaning of chakra',
  description:
    'Chakras are wheels of energy along the spine, from its base to the crown of the head. What they are, the seven main chakras, and why to balance them.',
  alternates: { canonical: '/what-is-chakra' },
  openGraph: { images: ['/images/hands-crown-1200.jpg'] },
};

export default function MeaningPage() {
  return (
    <>
      <div className="container page-head">
        <h1>The meaning of chakra</h1>
        <p>
          The Sanskrit word chakra literally translates to wheel or disk. In yoga, meditation and Ayurveda, it refers to
          wheels of energy throughout the body.
        </p>
      </div>

      <section className="section" aria-labelledby="seven-heading">
        <div className="container chakra-intro">
          <div className="prose">
            <h2 id="seven-heading" style={{ marginTop: 0 }}>
              Seven main chakras
            </h2>
            <p>
              There are seven main chakras, which align the spine, starting from the base of the spine through to the
              crown of the head.
            </p>
            <p>
              Chakras are energy centres or portals in the energy field. They play an important role in the health of
              your energy systems, including your physical body. Located along the central channel of the body, they are
              conceived of as whirling, wheel-like vortices through which universal or cosmic energy flows into and out of
              a person.
            </p>
            <h2>Blockages and imbalances</h2>
            <p>
              Chakras can become blocked or imbalanced. With a chakra blockage, the free flow of energy in and out, and
              the flow of energy to other chakras, is impeded. If the chakras are imbalanced, one or more chakras is
              over-active or under-active compared to the others.
            </p>
            <p>
              Blockages and imbalances in a chakra can result in disturbances, sometimes profound, in a person’s health,
              emotions, mind, spirit or life.
            </p>
          </div>
          <aside className="spine-panel" aria-label="The seven main chakras">
            <ChakraSpine />
          </aside>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="faq-heading">
        <div className="container faq-layout">
          <div>
            <h2 id="faq-heading">Chakra healing</h2>
            <div className="actions">
              <Link href="/treatment/chakra-balancing" className="text-link">
                About a chakra balancing session
              </Link>
            </div>
          </div>
          <div className="faq">
            {chakraFaq.map((item, i) => (
              <details key={item.q} open={i === 0}>
                <summary>{item.q}</summary>
                <div className="faq__answer">
                  {item.a.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
