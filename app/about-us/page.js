import Link from 'next/link';
import Picture from '@/components/Picture';
import MapEmbed from '@/components/MapEmbed';
import { mapLinks } from '@/lib/content';

export const metadata = {
  title: 'About Mr. Ketut',
  description:
    'Ubud Chakra Healing is Mr. Ketut’s chakra balancing practice on Monkey Forest Street in the centre of Ubud, Bali.',
  alternates: { canonical: '/about-us' },
  openGraph: { images: ['/images/healer-portrait-800.jpg'] },
};

export default function AboutPage() {
  return (
    <>
      <div className="container page-grid" style={{ paddingBottom: 'var(--space-xl)' }}>
        <header className="page-grid__head">
          <h1>About Ubud Chakra Healing</h1>
          <p>
            Mr. Ketut’s practice on Monkey Forest Street, Ubud. It focuses on chakra balancing: a session to check and
            analyse the chakras within your body.
          </p>

          <h2 id="healer-heading">The healer</h2>
          <p>
            Mr. Ketut learned chakra balancing from a Japanese teacher named Kayo. He was a civil servant before he
            retired, and now focuses on serving others: giving positive energy and spreading love.
          </p>
          <p>
            The mission of the place is to give others a new experience, and a relaxing and happy one after the healing
            session.
          </p>
          <div className="actions">
            <Link href="/contact-us" className="button">
              Contact Mr. Ketut
            </Link>
          </div>
        </header>

        <Picture
          name="healer-portrait"
          alt="Mr. Ketut stands with eyes closed and hands raised in front of a mandala painting"
          sizes="(min-width: 900px) 40vw, 100vw"
          className="page-grid__aside portrait"
          priority
        />
      </div>

      <section className="section section--wash">
        <div className="container duo">
          <div aria-labelledby="process-heading" role="region">
            <Picture
              name="healing-process"
              alt="The healer’s hands resting over a client’s eyes and forehead"
              sizes="(min-width: 900px) 45vw, 100vw"
              className="duo__media"
            />
            <h2 id="process-heading">The healing process</h2>
            <p>
              The healer’s body is used as a vehicle for energy, transmitted through the hands to the client. This
              promotes healing and relaxation throughout the whole body, leaving calm and well-being on every level:
              physical, mental, emotional and spiritual.
            </p>
            <div className="actions">
              <Link href="/treatment/chakra-balancing" className="text-link">
                About chakra balancing
              </Link>
            </div>
          </div>

          <div aria-labelledby="location-heading" role="region">
            <MapEmbed className="map duo__media" link={false} />
            <h2 id="location-heading">Location</h2>
            <p>
              The place is a simple one, easy to reach on Monkey Forest Street in the centre of Ubud, across from the
              football field.
            </p>
            <div className="actions">
              <Link href="/contact-us" className="button">
                Contact and directions
              </Link>
              <a href={mapLinks.open} target="_blank" rel="noopener noreferrer" className="text-link">
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
