import Link from 'next/link';
import { nav, site } from '@/lib/content';

// Compact two-row footer: logo + links, then contact details + copyright.
export default function SiteFooter() {
  return (
    <footer className="site-footer on-dark">
      <div className="container">
        <div className="site-footer__top">
          <Link href="/" className="site-footer__logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-long-white.png" alt={site.name} width="600" height="123" loading="lazy" />
          </Link>
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

        <div className="site-footer__bottom">
          <address>
            <a href={site.phone.href}>{site.phone.display}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.location.street}</span>
          </address>
          <p>
            © {site.copyrightYear} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
