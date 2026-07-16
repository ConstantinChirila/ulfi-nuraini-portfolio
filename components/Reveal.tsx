'use client';

import { useEffect } from 'react';

/**
 * Watches every element with the `reveal` class and adds `in` when it
 * scrolls into view — the same intersection-observer behaviour the original
 * template ran inline, adapted for the client.
 */
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
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
  }, []);

  return null;
}
