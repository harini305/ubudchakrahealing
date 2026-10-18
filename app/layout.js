import { Raleway } from 'next/font/google';
import localFont from 'next/font/local';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { site } from '@/lib/content';
import './globals.css';

// The only two font families on the site (09 §6). Samarkan, the logo's
// typeface, for page titles and section headings; Raleway for everything
// else. Samarkan is shareware: the original file is served unaltered with its
// README (app/fonts/samarkan/) and needs registering with the foundry.
const samarkan = localFont({
  src: './fonts/samarkan/Samarkan.ttf',
  variable: '--font-samarkan',
  weight: '400',
  display: 'swap',
});

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ubudchakrahealing.com'),
  title: {
    default: `${site.name} | Chakra healing in Ubud, Bali`,
    template: `%s | ${site.name}`,
  },
  description:
    'Chakra balancing with Mr. Ketut on Monkey Forest Street, Ubud. Also palm reading, Melukat water purification and Balinese massage.',
  openGraph: {
    siteName: site.name,
    type: 'website',
    locale: 'en',
  },
};

export const viewport = {
  themeColor: '#fdfcfa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${samarkan.variable} ${raleway.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
