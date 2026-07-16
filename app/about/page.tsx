import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Ulfi Nuraini, a UK-based cybersecurity consultant with six years of experience across cloud security, security architecture and cyber risk advisory. CISSP certified.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return (
    <>
      {/* ---- THE CONSULTANT ---- */}
      <section id="about" style={{ paddingTop: 84 }}>
        <h1 className="sr-only">About Ulfi Nuraini, Cybersecurity Consultant</h1>
        <span className="splotch" />
        <div className="wrap">
          <div className="plate-frame reveal">
            <span className="plate-no">The consultant</span>
            <div className="plate-head solo">
              <div className="head-text">
                <h2>A little more about me</h2>
                <p className="latin">
                  Ulfi Nuraini · cybersecurity consultant · based in the United Kingdom
                </p>
              </div>
            </div>
            <div className="about-grid">
              <div className="portrait plate-slot">
                <Image
                  src="/plates/portrait.webp"
                  alt="Illustrated portrait of Ulfi Nuraini"
                  width={1448}
                  height={1086}
                  priority
                  sizes="(max-width:860px) 300px, 320px"
                />
                <p className="cap">Ulfi Nuraini · observed from life</p>
              </div>
              <div className="about-text">
                <p>
                  <b>
                    I&apos;m Ulfi, a cybersecurity consultant with six years of experience across
                    cloud security, security architecture and cyber risk advisory.
                  </b>{' '}
                  I work with both business and technical teams to help deliver secure solutions,
                  balancing security, operational resilience and business objectives.
                </p>
                <p>
                  My work spans strategic transformation programmes in the UK energy sector,
                  supporting the secure delivery of cloud, digital and operational technology (OT)
                  solutions. I hold the CISSP alongside the Microsoft Cybersecurity Architect Expert
                  certification and a broad range of Azure security credentials.
                </p>
                <div className="values">
                  <div>
                    <b>Security that enables</b>Protection that supports the business, rather than
                    standing in its way.
                  </div>
                  <div>
                    <b>Pragmatic &amp; risk-based</b>Recommendations proportionate to the real risk,
                    not the theoretical one.
                  </div>
                  <div>
                    <b>Architecture first</b>Security requirements defined and designed in from the
                    start.
                  </div>
                  <div>
                    <b>Across the lifecycle</b>From requirements through assurance to formal risk
                    acceptance.
                  </div>
                </div>
                <div className="acts" style={{ marginTop: 28 }}>
                  <Link href="/cv" className="btn solid">
                    View full CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
