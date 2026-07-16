'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Reveals elements with the `reveal` class as they scroll into view.
 *
 * This component is mounted once in the root layout, so it does NOT remount on
 * client-side navigation. We therefore re-run the observer setup whenever the
 * pathname changes — otherwise a newly navigated page's `.reveal` elements are
 * never observed and stay stuck at opacity:0 (a blank screen).
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
