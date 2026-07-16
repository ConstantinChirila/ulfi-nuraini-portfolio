import type { Metadata } from 'next';
import { Cormorant_Garamond, EB_Garamond, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
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

const body = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ulfi Nuraini · Cybersecurity Consultant & Security Architect',
  description:
    'Ulfi Nuraini is a UK-based cybersecurity consultant specialising in cloud security, security architecture and cyber risk advisory across cloud, digital and operational technology (OT). CISSP certified.',
  metadataBase: new URL('https://ulfinuraini.com'),
  openGraph: {
    title: 'Ulfi Nuraini · Cybersecurity Consultant',
    description:
      'Cloud security, security architecture and cyber risk advisory — balancing security, operational resilience and business objectives.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
