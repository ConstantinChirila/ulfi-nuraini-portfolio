/**
 * Central place for the details that should be swapped for Ulfi's real
 * contact links. Update these once and every page picks them up.
 */
export const site = {
  name: 'Ulfi Nuraini',
  role: 'Cybersecurity Consultant',
  // Production origin, used by metadataBase, sitemap, robots and JSON-LD.
  url: 'https://ulfi.uk',
  // Canonical address (server-side reference only). It is deliberately NOT
  // rendered into any page's HTML: the visible/clickable email is emitted by
  // components/EmailLink.tsx, which decodes an obfuscated copy in the browser
  // to keep it away from scraper bots. If this changes, update EmailLink's
  // ENCODED constant too:  printf '%s' 'new@addr' | base64 | rev
  email: 'hello@ulfi.uk',
  linkedin: 'https://www.linkedin.com/in/ulfi/',
  location: 'United Kingdom · Hybrid',
};
