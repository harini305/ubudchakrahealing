import Link from 'next/link';
import { site } from '@/lib/content';

// Closing section before the footer on content pages.
export default function ContactBand() {
  return (
    <section className="section section--dark on-dark" aria-labelledby="contact-band-heading">
      <div className="container contact-band">
        <div>
          <h2 id="contact-band-heading">Ask about a session</h2>
          <p>Call or email Mr. Ketut, or send a message through the contact form.</p>
          <div className="actions">
            <Link href="/contact-us" className="button">
              Send a message
            </Link>
          </div>
        </div>
        <dl className="contact-list">
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={site.phone.href}>{site.phone.display}</a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
