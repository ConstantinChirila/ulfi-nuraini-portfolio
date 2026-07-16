import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'CV',
  description:
    'Curriculum vitae for Ulfi Nuraini — cybersecurity consultant: experience, education, certifications and skills across cloud security, security architecture and cyber risk advisory.',
  alternates: { canonical: '/cv' },
};

const experience = [
  {
    role: 'Security Consultant',
    accent: '— Business Enablement',
    org: 'National Energy System Operator · Full-time',
    when: 'Jan 2025 – Present',
    loc: 'Warwick, England · Hybrid',
    summary:
      'Provide cyber security advisory across strategic transformation programmes within the UK energy sector, supporting secure delivery of cloud, digital and operational technology (OT) solutions while balancing business objectives with cyber risk.',
    bullets: [
      'Advising on security architecture for Azure, SaaS and SCADA restoration systems.',
      'Defining security requirements and conducting security design, risk and assurance reviews.',
      'Supporting formal risk acceptance and security governance through pragmatic, risk-based recommendations.',
      'Collaborating with business stakeholders, architects and delivery teams to integrate security throughout the project lifecycle.',
    ],
    tags: ['Security Architecture', 'Cloud Security', 'OT / SCADA', 'Risk & Assurance', 'Azure'],
  },
  {
    role: 'Security Architect',
    org: 'FSP · Full-time',
    when: 'Jan 2024 – Dec 2024',
    loc: 'England, United Kingdom · Remote',
    bullets: [
      'Insider Threat Technology Mapping: aligned clients’ security tooling (Microsoft Suite and other vendors) with MITRE ATT&CK insider-threat TTPs to strengthen their security posture.',
      'Technical Lead for a Proof-of-Concept squad: led the POC of an Enterprise Browser to strengthen DLP controls for third-party vendors, contractors and BYOD scenarios.',
      'M365 E3 & E5 Security Optimisation: built a service to harden Microsoft 365 configurations, boosting compliance across the organisation.',
      'SIEM Optimisation: improved Microsoft Sentinel operational efficiency and cost-effectiveness against business and security standards.',
      'Cloud Security Reference Architecture: developed a NIST-based cloud security service for data protection, regulatory compliance and seamless operations.',
    ],
    tags: ['MITRE ATT&CK', 'Microsoft 365', 'Sentinel SIEM', 'DLP', 'NIST'],
  },
  {
    role: 'Cloud Security Engineer',
    org: 'NTT DATA · Full-time',
    when: 'Apr 2023 – Dec 2023',
    loc: 'England, United Kingdom · Remote',
    bullets: [
      'OWASP DevSecOps Maturity Assessment: co-developed a service with the Global Cybersecurity team, now delivered globally.',
      'ISO 27001 Third-Party Risk Assessment: led the risk assessment process for third-party vendors, ensuring ISO 27001 compliance.',
      'Global Cybersecurity Taxonomy Strategy: worked with cybersecurity directors to develop a unified taxonomy for clearer communication and strategic alignment.',
      'Microsoft Purview: led implementation for public sector clients.',
    ],
    tags: ['OWASP DevSecOps', 'ISO 27001', 'Microsoft Purview', 'Third-Party Risk'],
  },
  {
    role: 'Junior Cloud Engineer',
    org: 'NTT DATA · Full-time',
    when: 'Jan 2022 – Apr 2023',
    loc: 'England, United Kingdom · Remote',
    bullets: [
      'Enhanced Azure security posture by 70% by implementing CIS Security standards with Ansible automation.',
      'Strengthened Azure storage security by establishing and enforcing conditional access policies.',
      'Integrated Azure DevOps Pipelines with Microsoft Teams to streamline communication and collaboration.',
      'Regularly audited and implemented IAM policies to control access to cloud resources.',
      'Delivered a cost-saving strategy across 2,000+ virtual machines and 8,000 storage disks, saving the client £2M.',
    ],
    tags: ['Azure', 'CIS Benchmarks', 'Ansible / IaC', 'Conditional Access', 'Azure DevOps'],
  },
];

const education = [
  {
    school: 'Microsoft Cloud Engineering Academy',
    detail: 'Cloud Engineering',
    note: 'NTT Data UK Scholarship for Women in Tech — Microsoft Azure Engineer.',
  },
  {
    school: 'CompTIA Secure Infrastructure Specialist (CSIS) Bootcamp',
    detail: 'Computer & Information Sciences and Support Services',
    note: 'Networking & Architecture, Mobile & Operating Systems, Cloud Services and Business Processes.',
  },
  {
    school: 'STMIK & Politeknik LPKIA',
    detail: 'Undergraduate Degree, Accounting and Finance',
    note: 'Sep 2011 – Nov 2014.',
  },
];

const certifications = [
  { name: 'Certified Information Systems Security Professional (CISSP)', iss: 'ISC2', date: 'Dec 2025 · Expires Dec 2028' },
  { name: 'Microsoft Certified: Cybersecurity Architect Expert', iss: 'Microsoft', date: 'Jan 2025' },
  { name: 'Securing Generative AI: Strategies, Methodologies & Best Practices', iss: 'LinkedIn', date: 'Apr 2026' },
  { name: 'Microsoft Certified: Azure AI Engineer Associate', iss: 'Microsoft', date: 'Jun 2024' },
  { name: 'Configure SIEM security operations using Microsoft Sentinel', iss: 'Microsoft', date: 'Jun 2024' },
  { name: 'Certified in Cybersecurity (CC)', iss: 'ISC2', date: 'Nov 2023 · Expires Nov 2026' },
  { name: 'Microsoft Certified: Azure Solutions Architect Expert', iss: 'Microsoft', date: 'Sep 2023' },
  { name: 'Microsoft Certified: Windows Server Hybrid Administrator Associate', iss: 'Microsoft', date: 'Dec 2022' },
  { name: 'AZ-801: Configuring Windows Server Hybrid Advanced Services', iss: 'Microsoft', date: 'Dec 2022' },
  { name: 'Microsoft Certified: Azure Security Engineer Associate', iss: 'Microsoft', date: 'Oct 2022' },
  { name: 'AZ-800: Administering Windows Server Hybrid Core Infrastructure', iss: 'Microsoft', date: 'Aug 2022' },
  { name: 'Python & Application', iss: 'Code First Girls', date: 'Jan 2023' },
  { name: 'Microsoft Certified: Azure Administrator Associate', iss: 'Microsoft', date: 'Mar 2022' },
  { name: 'Microsoft Certified: Security, Compliance & Identity Fundamentals', iss: 'Microsoft', date: 'Jan 2022' },
  { name: 'Microsoft Certified: Azure AI Fundamentals', iss: 'Microsoft', date: 'Dec 2021' },
  { name: 'Microsoft Certified: Azure Data Fundamentals', iss: 'Microsoft', date: 'Dec 2021' },
  { name: 'Microsoft Certified: Azure Fundamentals', iss: 'Microsoft', date: 'Oct 2021' },
  { name: 'CompTIA Secure Infrastructure Specialist (CSIS)', iss: 'Netcom Training', date: 'Aug 2021' },
  { name: 'Introduction to Cybersecurity', iss: 'Cisco Networking Academy', date: 'Jun 2018' },
];

const skillGroups = [
  {
    title: 'Security & risk',
    skills: [
      'Security Architecture Design',
      'Cloud Security',
      'Security Consulting',
      'Cyber Risk Advisory',
      'Risk Management',
      'Security Governance',
      'MITRE ATT&CK',
      'SIEM (Sentinel)',
      'DLP',
      'Securing Generative AI',
    ],
  },
  {
    title: 'Cloud & infrastructure',
    skills: [
      'Microsoft Azure',
      'Cloud Computing',
      'Cloud Infrastructure',
      'Infrastructure as Code (IaC)',
      'Azure DevOps',
      'SCADA / OT',
      'Microsoft Purview',
      'Ansible',
    ],
  },
  {
    title: 'Frameworks & delivery',
    skills: ['NIST', 'ISO 27001', 'OWASP DevSecOps', 'Project Management', 'Python', 'Business Enablement'],
  },
];

export default function CV() {
  return (
    <>
      {/* ---- CV HERO ---- */}
      <header className="cv-hero">
        <span className="splotch s1" />
        <div className="wrap">
          <div className="cv-hero-inner">
            <p className="caps est">Curriculum Vitae</p>
            <h1>
              Ulfi <em>Nuraini</em>
            </h1>
            <p className="sub">
              Cybersecurity Consultant · Security Architecture · Cloud &amp; OT Security · CISSP.
              Six years helping business and technical teams deliver secure solutions.
            </p>
            <div className="cv-meta">
              <span>{site.location}</span>
              <span>CISSP · ISC2</span>
              <span>Microsoft Cybersecurity Architect Expert</span>
            </div>
          </div>
        </div>
      </header>

      {/* ---- EXPERIENCE ---- */}
      <section id="cv-experience">
        <div className="wrap">
          <div className="plate-frame reveal">
            <span className="plate-no">Experience</span>
            <div className="plate-head">
              <div className="head-text">
                <h2>Professional experience</h2>
                <p className="latin">cloud security, architecture &amp; risk advisory</p>
              </div>
            </div>
            {experience.map((job) => (
              <div className="role" key={`${job.org}-${job.when}`}>
                <div className="role-head">
                  <h3>
                    {job.role} {job.accent && <em>{job.accent}</em>}
                  </h3>
                  <span className="when">{job.when}</span>
                </div>
                <p className="org">{job.org}</p>
                <p className="loc">{job.loc}</p>
                {job.summary && <p className="obs" style={{ marginTop: 14, fontSize: 19, color: '#5C4A56' }}>{job.summary}</p>}
                <ul>
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="tags">
                  {job.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- SKILLS ---- */}
      <section id="cv-skills">
        <span className="splotch" style={{ width: 360, height: 300, background: 'var(--periwinkle)', top: 120, right: '4%' }} />
        <div className="wrap">
          <div className="plate-frame reveal">
            <span className="plate-no">Skills</span>
            <div className="plate-head">
              <div className="head-text">
                <h2>Core skills</h2>
              </div>
            </div>
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h4>{group.title}</h4>
                <div className="skills-cloud">
                  {group.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CERTIFICATIONS ---- */}
      <section id="cv-certs">
        <span className="splotch" style={{ width: 380, height: 320, background: 'var(--ochre)', bottom: 80, left: '3%' }} />
        <div className="wrap">
          <div className="plate-frame reveal">
            <span className="plate-no">Certifications</span>
            <div className="plate-head">
              <div className="head-text">
                <h2>Licenses &amp; certifications</h2>
                <p className="latin">ISC2 · Microsoft · CompTIA &amp; more</p>
              </div>
            </div>
            <div className="cert-grid">
              {certifications.map((c) => (
                <div className="cert" key={c.name}>
                  <div>
                    <h5>{c.name}</h5>
                    <p className="iss">{c.iss}</p>
                  </div>
                  <span className="date">{c.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- EDUCATION ---- */}
      <section id="cv-education">
        <div className="wrap">
          <div className="plate-frame reveal">
            <span className="plate-no">Education</span>
            <div className="plate-head">
              <div className="head-text">
                <h2>Education</h2>
                <p className="latin">foundations &amp; formal training</p>
              </div>
            </div>
            <div className="cv-cols">
              {education.map((e) => (
                <div className="cv-item" key={e.school}>
                  <h4>{e.school}</h4>
                  <p className="meta">
                    <em>{e.detail}</em>
                  </p>
                  <p>{e.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
