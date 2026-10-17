import Link from 'next/link';
import { site } from '@/lib/content';

// Closing call to action before the footer: one row on desktop.
export default function ContactBand() {
  return (
    <section className="contact-band" aria-labelledby="contact-band-heading">
      <div className="container contact-band__inner">
        <div>
          <h2 id="contact-band-heading">Ask about a session</h2>
          <p>Call or email Mr. Ketut, or send a message through the contact form.</p>
        </div>
        <div className="contact-band__actions">
          <a href={site.phone.href}>{site.phone.display}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Link href="/contact-us" className="button">
            Send a message
          </Link>
        </div>
      </div>
    </section>
  );
}
