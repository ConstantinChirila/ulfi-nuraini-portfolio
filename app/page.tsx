import Link from 'next/link';
import { site } from '@/lib/site';
import EmailLink from '@/components/EmailLink';

export default function Home() {
  return (
    <>
      {/* ---- HERO ---- */}
      <header className="hero" id="top">
        <span className="splotch s1" />
        <span className="splotch s2" />
        <div className="hero-flora">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="plate-img" src="/plates/hero-flora-right.webp" alt="" />
        </div>
        <div className="hero-flora-l">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="plate-img" src="/plates/hero-flora-left.webp" alt="" />
        </div>
        <div className="wrap">
          <div className="hero-inner">
            <p className="caps est">Cybersecurity Consultant · Security Architecture · CISSP</p>
            <div className="flourish">
              <span className="line" />
              <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
                <path
                  d="M13 16 C13 10, 9 6, 3 5 C8 3, 12 6, 13 10 C14 6, 18 3, 23 5 C17 6, 13 10, 13 16 Z"
                  stroke="#43293C"
                  strokeWidth="1.1"
                />
              </svg>
              <span className="line" />
            </div>
            <h1>
              Secure solutions, <em>carefully architected.</em>
            </h1>
            <p className="sub">
              <b>
                I&apos;m a cybersecurity consultant helping business and technical teams deliver
                secure solutions.
              </b>{' '}
              I balance security, operational resilience and business objectives across cloud,
              digital and operational technology.
            </p>
            <p className="latin binomial">
              Cloud &amp; OT security · Security architecture · Cyber risk advisory · habitat:
              United Kingdom
            </p>
            <div className="acts">
              <EmailLink className="btn solid" />
              <Link href="/cv" className="btn ghost">
                View CV
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ---- PLATE I · EXPERTISE ---- */}
      <section id="bearings">
        <span className="splotch" />
        <div className="wrap">
          <div className="plate-frame reveal">
            <span className="plate-no">Plate I</span>
            <div className="plate-head">
              <div className="crest">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/plates/flourish-disciplines.webp" alt="" />
              </div>
              <div className="head-text">
                <h2>Three disciplines, one consultant</h2>
                <p className="latin">where security meets the business</p>
              </div>
            </div>
            <div className="bearings">
              <div className="bearing">
                <div className="emblem">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="plate-img"
                    style={{ height: 96, width: 'auto' }}
                    src="/plates/emblem-root.webp"
                    alt=""
                  />
                </div>
                <h3>Cloud &amp; OT security</h3>
                <p>
                  Securing Azure, SaaS and SCADA / operational technology — from conditional access
                  and IAM to CIS-hardened, automated cloud estates.
                </p>
                <span className="latin">the root system</span>
              </div>
              <div className="bearing">
                <div className="emblem">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="plate-img"
                    style={{ height: 96, width: 'auto' }}
                    src="/plates/emblem-stem.webp"
                    alt=""
                  />
                </div>
                <h3>Security architecture</h3>
                <p>
                  Defining security requirements, reference architectures and design reviews grounded
                  in NIST, ISO 27001 and MITRE ATT&amp;CK — security designed in, not bolted on.
                </p>
                <span className="latin">the stem &amp; leaves</span>
              </div>
              <div className="bearing">
                <div className="emblem">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="plate-img"
                    style={{ height: 96, width: 'auto' }}
                    src="/plates/emblem-bloom.webp"
                    alt=""
                  />
                </div>
                <h3>Cyber risk advisory</h3>
                <p>
                  Pragmatic, risk-based recommendations, assurance reviews and governance that let
                  the business move — security as an enabler, not a blocker.
                </p>
                <span className="latin">the bloom, in service of the business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- PLATE II · EXPERIENCE ---- */}
      <section id="work">
        <span className="splotch" />
        <div className="wrap">
          <div className="plate-frame reveal">
            <span className="plate-no">Plate II</span>
            <div className="plate-head">
              <div className="crest">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/plates/flourish-specimens.webp" alt="" />
              </div>
              <div className="head-text">
                <h2>Selected engagements</h2>
                <p className="latin">six years in the field, 2019 to present</p>
              </div>
            </div>

            <Link className="specimen" href="/cv">
              <div className="fig">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="plate-img"
                    src="/plates/specimen-01-thistle.webp"
                    alt="Botanical plate illustration"
                  />
                </div>
                <p className="cap">Fig. 1 · 2025 – present</p>
              </div>
              <div>
                <h3>National Energy System Operator</h3>
                <p className="caps habitat">Security Consultant · Energy · OT · Cloud</p>
                <p className="obs">
                  <span className="ph">In the field</span>Cyber security advisory across UK energy
                  transformation programmes — security architecture for Azure, SaaS and SCADA
                  restoration systems.
                </p>
              </div>
              <span className="arw">→</span>
            </Link>

            <Link className="specimen" href="/cv">
              <div className="fig">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="plate-img"
                    src="/plates/specimen-02-sweetpea.webp"
                    alt="Botanical plate illustration"
                  />
                </div>
                <p className="cap">Fig. 2 · 2024</p>
              </div>
              <div>
                <h3>FSP</h3>
                <p className="caps habitat">Security Architect · Microsoft Security</p>
                <p className="obs">
                  <span className="ph">In the field</span>Insider-threat mapping to MITRE ATT&amp;CK,
                  M365 E3/E5 hardening, Sentinel SIEM optimisation and a NIST-based cloud security
                  reference architecture.
                </p>
              </div>
              <span className="arw">→</span>
            </Link>

            <Link className="specimen" href="/cv">
              <div className="fig">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="plate-img"
                    src="/plates/specimen-03-iris.webp"
                    alt="Botanical plate illustration"
                  />
                </div>
                <p className="cap">Fig. 3 · 2023</p>
              </div>
              <div>
                <h3>NTT DATA</h3>
                <p className="caps habitat">Cloud Security Engineer · Global Cybersecurity</p>
                <p className="obs">
                  <span className="ph">In the field</span>Built an OWASP DevSecOps maturity assessment
                  now delivered globally; led ISO 27001 third-party risk and Microsoft Purview for
                  public sector.
                </p>
              </div>
              <span className="arw">→</span>
            </Link>

            <Link className="specimen" href="/cv">
              <div className="fig">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="plate-img"
                    src="/plates/specimen-04-honeysuckle.webp"
                    alt="Botanical plate illustration"
                  />
                </div>
                <p className="cap">Fig. 4 · 2022 – 2023</p>
              </div>
              <div>
                <h3>NTT DATA</h3>
                <p className="caps habitat">Junior Cloud Engineer · Azure · Automation</p>
                <p className="obs">
                  <span className="ph">In the field</span>Improved Azure security posture by 70% with
                  CIS standards and Ansible; delivered a cost strategy saving clients £2M across 2,000+
                  VMs.
                </p>
              </div>
              <span className="arw">→</span>
            </Link>

            <div className="clients">
              <span className="caps">Frameworks &amp; platforms I work across</span>
              <ul>
                <li>Microsoft Azure</li>
                <li>Microsoft 365 E5</li>
                <li>Microsoft Sentinel</li>
                <li>Microsoft Purview</li>
                <li>SCADA / OT</li>
                <li>NIST</li>
                <li>ISO 27001</li>
                <li>MITRE ATT&amp;CK</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---- PLATE III · METHOD ---- */}
      <section id="process">
        <span className="splotch" />
        <div className="wrap">
          <div className="plate-frame reveal">
            <span className="plate-no">Plate III</span>
            <div className="plate-head">
              <div className="crest">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/plates/flourish-method.webp" alt="" />
              </div>
              <div className="head-text">
                <h2>The method</h2>
                <p className="latin">how a secure outcome is grown, in four seasons</p>
              </div>
            </div>
            <div className="seasons">
              <div className="season">
                <span className="n">i. understand</span>
                <h4>Frame</h4>
                <p>
                  Understand the business objectives, constraints and risk appetite before any
                  control is proposed.
                </p>
              </div>
              <div className="season">
                <span className="n">ii. design</span>
                <h4>Architect</h4>
                <p>
                  Define security requirements and design architecture across cloud, digital and OT —
                  written down, never a black box.
                </p>
              </div>
              <div className="season">
                <span className="n">iii. assure</span>
                <h4>Assure</h4>
                <p>
                  Security design, risk and assurance reviews with pragmatic, risk-based
                  recommendations.
                </p>
              </div>
              <div className="season">
                <span className="n">iv. enable</span>
                <h4>Enable</h4>
                <p>
                  Integrate security through the project lifecycle and support formal risk acceptance
                  and governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- CONTACT ---- */}
      <section className="contact" id="contact">
        <span className="splotch c1" />
        <span className="splotch c2" />
        <div className="wrap reveal">
          <div className="contact-flora">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="plate-img" src="/plates/contact-garland.webp" alt="" />
          </div>
          <h2>
            Something worth <em>securing?</em>
          </h2>
          <p className="caps avail">Available for security consulting &amp; contract engagements</p>
          <div className="contact-letter">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/plates/flourish-contact.webp" alt="" />
          </div>
          <div className="acts">
            <EmailLink className="btn solid" />
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
