import MapEmbed from '@/components/MapEmbed';
import { site } from '@/lib/content';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact',
  description: `Contact Mr. Ketut at Ubud Chakra Healing, Monkey Forest Street, Ubud. Phone ${site.phone.display} or email ${site.email}.`,
  alternates: { canonical: '/contact-us' },
  openGraph: { images: ['/images/hands-holding-1200.jpg'] },
};

export default function ContactPage() {
  return (
    <>
      <div className="container page-head">
        <h1>Contact</h1>
        <p>Call, email or send a message below to ask about a session.</p>
      </div>

      <section className="section">
        <div className="container contact-layout">
          <div>
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
              <div>
                <dt>Location</dt>
                <dd>
                  {site.location.street}
                  <span className="muted" style={{ display: 'block', fontSize: 'var(--step-0)' }}>
                    {site.location.note}
                  </span>
                </dd>
              </div>
            </dl>
            <MapEmbed />
          </div>

          <div>
            <h2 style={{ fontSize: 'var(--step-2)', marginBottom: 'var(--space-m)' }}>Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
