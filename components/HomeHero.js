'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Picture from '@/components/Picture';

gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {
  const root = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const img = root.current.querySelector('.hero__media img');
      const copy = root.current.querySelectorAll('.hero__copy > *');

      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from(img, { scale: 1.06, duration: 1.8, ease: 'power2.out' }, 0)
        .from(copy, { autoAlpha: 0, y: 18, duration: 0.9, stagger: 0.12 }, 0.25);

      gsap.to(img, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section className="hero" ref={root}>
      <div className="hero__media">
        <Picture
          name="healer-at-work"
          alt="Mr. Ketut, in a white shirt, rests one hand on the back of a client lying on a treatment bed beneath a mandala painting"
          sizes="100vw"
          priority
        />
      </div>
      <div className="hero__copy">
        <h1>Chakra healing in Ubud with Mr. Ketut</h1>
        <p className="hero__intro">
          The healer’s body is used as a vehicle for energy, transmitted through the hands to promote healing and
          relaxation of the whole body.
        </p>
        <div className="actions">
          <Link href="/treatments" className="button">
            See treatments
          </Link>
          <Link href="/contact-us" className="text-link">
            Contact Mr. Ketut
          </Link>
        </div>
      </div>
    </section>
  );
}
