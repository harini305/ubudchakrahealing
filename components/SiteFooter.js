import Link from 'next/link';
import { nav, site } from '@/lib/content';

export default function SiteFooter() {
  return (
    <footer className="site-footer on-dark">
      <div className="container">
        <div className="site-footer__grid">
          <Link href="/" className="site-footer__logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-long-white.png" alt={site.name} width="600" height="123" loading="lazy" />
          </Link>

          <address>
            <a href={site.phone.href}>{site.phone.display}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            {site.location.street}
          </address>

          <nav aria-label="Footer">
            <ul className="site-footer__links">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="site-footer__legal">
          © {site.copyrightYear} {site.name}
        </p>
      </div>
    </footer>
  );
}
