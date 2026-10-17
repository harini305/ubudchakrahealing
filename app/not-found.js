import Link from 'next/link';

export const metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="container page-head" style={{ paddingBottom: 'var(--space-2xl)' }}>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist. It may have been moved or removed.</p>
      <div className="actions">
        <Link href="/" className="button">
          Back to home
        </Link>
        <Link href="/treatments" className="text-link">
          See treatments
        </Link>
      </div>
    </div>
  );
}
