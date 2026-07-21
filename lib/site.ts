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
  // rendered into any page's HTML, and never shipped whole in the JS bundle:
  // the visible/clickable email is assembled in the browser by
  // components/EmailLink.tsx from two XOR-masked halves. If this changes, also
  // regenerate the A/B arrays in EmailLink.tsx (see the note in that file).
  email: 'ulfinuraini27+contact@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ulfi/',
  location: 'United Kingdom · Hybrid',
};
