'use client';

import { useEffect, useState } from 'react';

/**
 * Renders the contact email as a mailto link WITHOUT ever putting the
 * plaintext address (or the string "mailto:") into the server-rendered HTML.
 * Scraper bots that regex the page source therefore find nothing usable: the
 * real address is decoded and assembled in the browser after hydration.
 *
 * `ENCODED` is base64 of the address, then reversed. If Ulfi's address ever
 * changes, regenerate it with:  printf '%s' 'new@addr' | base64 | rev
 * (and keep it in step with `email` in lib/site.ts).
 */
const ENCODED = '==wa15SamxWdA9GbsVGa';

function decodeEmail(): string {
  const b64 = ENCODED.split('').reverse().join('');
  return atob(b64);
}

export default function EmailLink({
  className,
  label,
}: {
  className?: string;
  /** Optional link text. When omitted, the email address itself is shown. */
  label?: string;
}) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(decodeEmail());
  }, []);

  // Pre-hydration / no-JS: emit no address and no mailto, nothing to harvest.
  if (!email) {
    if (label) {
      return <span className={className}>{label}</span>;
    }
    return (
      <span className={className} aria-label="Email address (enable JavaScript to reveal)">
        hello&nbsp;[at]&nbsp;ulfi&nbsp;[dot]&nbsp;uk
      </span>
    );
  }

  return (
    <a className={className} href={`mailto:${email}`}>
      {label ?? email}
    </a>
  );
}
