'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { chakras } from '@/lib/content';

gsap.registerPlugin(ScrollTrigger);

// The seven chakras from the base of the spine to the crown, drawn as the
// coloured spine from the logo. DOM order is root → crown (the real sequence).
// Vertical (default): column-reverse places the crown at the top, as on the body.
// Row: root on the left to crown on the right.
export default function ChakraSpine({
  variant = 'vertical',
  label = 'The seven main chakras, from the base of the spine to the crown',
}) {
  const root = useRef(null);
  const row = variant === 'row';

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const el = root.current;
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: 'top 80%', end: row ? 'bottom 60%' : 'bottom 55%', scrub: 0.6 },
      });
      tl.from(el.querySelector('.spine__fill, .chakra-row__fill'), { [row ? 'scaleX' : 'scaleY']: 0, ease: 'none', duration: 1 }, 0).from(
        el.querySelectorAll('.spine__dot'),
        { scale: 0.4, opacity: 0.25, ease: 'none', duration: 0.2, stagger: 0.8 / chakras.length },
        0,
      );
    });
    return () => mm.revert();
  }, [row]);

  return (
    <div ref={root} className={row ? 'chakra-row' : 'spine'}>
      <span className={row ? 'chakra-row__track' : 'spine__track'} aria-hidden="true">
        <span className={row ? 'chakra-row__fill' : 'spine__fill'} />
      </span>
      <ol className={row ? undefined : 'spine__list'} aria-label={label}>
        {chakras.map((c) => (
          <li key={c.name} className={row ? undefined : 'spine__item'} style={{ '--chakra': c.color }}>
            <span className="spine__dot" aria-hidden="true" />
            <span className="spine__name">
              {c.name}
              {row ? '' : ' chakra'}
              <span className="spine__meaning">{c.meaning}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
