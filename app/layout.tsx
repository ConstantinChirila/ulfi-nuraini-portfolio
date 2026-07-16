import type { Metadata } from 'next';
import { Cormorant_Garamond, EB_Garamond, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

// Body italics are never used (all italic type uses the display face), so only
// the normal styles are requested.
const body = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal'],
  variable: '--font-body',
  display: 'swap',
});

// Only the 400 weight is used for mono type.
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
});

const title = 'Ulfi Nuraini · Cybersecurity Consultant & Security Architect';
const description =
  'Ulfi Nuraini is a UK-based cybersecurity consultant specialising in cloud security, security architecture and cyber risk advisory across cloud, digital and operational technology (OT). CISSP certified.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: '%s · Ulfi Nuraini · Cybersecurity Consultant',
  },
  description,
  alternates: { canonical: '/' },
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    title,
    description:
      'Cloud security, security architecture and cyber risk advisory, balancing security, operational resilience and business objectives.',
    type: 'website',
    url: site.url,
    siteName: site.name,
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description:
      'Cloud security, security architecture and cyber risk advisory, balancing security, operational resilience and business objectives.',
  },
};

// Person / ProfilePage structured data: high-leverage for a consultant's site.
const personLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: site.name,
    jobTitle: 'Cybersecurity Consultant & Security Architect',
    url: site.url,
    image: `${site.url}/plates/portrait.webp`,
    address: { '@type': 'PostalAddress', addressCountry: 'GB' },
    sameAs: [site.linkedin],
    knowsAbout: [
      'Cloud Security',
      'Security Architecture',
      'Cyber Risk Advisory',
      'Microsoft Azure',
      'OT / SCADA Security',
      'NIST',
      'ISO 27001',
      'MITRE ATT&CK',
      'Microsoft Sentinel',
      'Microsoft Purview',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'CISSP',
        credentialCategory: 'certification',
        recognizedBy: { '@type': 'Organization', name: 'ISC2' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Microsoft Certified: Cybersecurity Architect Expert',
        credentialCategory: 'certification',
        recognizedBy: { '@type': 'Organization', name: 'Microsoft' },
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
