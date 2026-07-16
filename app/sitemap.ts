import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static build date — Date.now()/new Date() in a module body would make the
  // sitemap non-deterministic across builds; a fixed release date is fine here.
  const lastModified = '2026-07-16';
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/about`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${site.url}/cv`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
