'use client';

import { useEffect, useState } from 'react';

/**
 * Renders the contact address as a mailto link without ever exposing something
 * a bot can trivially harvest — from the HTML OR the JS bundle:
 *
 *  - The address is split into two halves (local part + domain) stored as
 *    separate XOR-masked character-code arrays. Neither array on its own
 *    decodes to a full email, so a "decode every token and regex for an
 *    address" scan finds nothing.
 *  - Nothing is base64 (which scanners routinely auto-decode); it's numeric
 *    arrays behind a XOR key.
 *  - The "mailto:" scheme is assembled from char codes too, so that literal
 *    never appears either.
 *  - The full address exists only transiently in the browser after hydration.
 *
 * It's still reversible by anything that executes this JS (unavoidable for a
 * clickable link) — the goal is defeating automated harvesters, not humans.
 *
 * To change the address, regenerate the two arrays:
 *   node -e 'const K=0x37;const m=s=>console.log([...s].map(c=>c.charCodeAt(0)^K));m("local");m("domain")'
 * and keep it in step with `email` in lib/site.ts.
 */
const K = 0x37;
const A = [66, 91, 81, 94, 89, 66, 69, 86, 94, 89, 94, 5, 0, 28, 84, 88, 89, 67, 86, 84, 67];
const B = [80, 90, 86, 94, 91, 25, 84, 88, 90];

const reveal = (seq: number[]) => seq.map((n) => String.fromCharCode(n ^ K)).join('');

function compose(): { addr: string; href: string } {
  const addr = `${reveal(A)}${String.fromCharCode(64)}${reveal(B)}`;
  const scheme = String.fromCharCode(109, 97, 105, 108, 116, 111, 58); // "mailto:"
  return { addr, href: scheme + addr };
}

export default function EmailLink({
  className,
  label,
}: {
  className?: string;
  /** Optional link text. When omitted, the address itself is shown. */
  label?: string;
}) {
  const [data, setData] = useState<{ addr: string; href: string } | null>(null);

  useEffect(() => {
    setData(compose());
  }, []);

  // Pre-hydration / no-JS: emit no address and no scheme, nothing to harvest.
  if (!data) {
    if (label) {
      return <span className={className}>{label}</span>;
    }
    return (
      <span className={className} aria-label="Email address (enable JavaScript to reveal)">
        contact&nbsp;[at]&nbsp;ulfinuraini27&nbsp;[on]&nbsp;gmail
      </span>
    );
  }

  return (
    <a className={className} href={data.href}>
      {label ?? data.addr}
    </a>
  );
}
