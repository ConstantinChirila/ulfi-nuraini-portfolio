import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fl">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`}>Email</a>
          <a href="/cv">CV</a>
        </div>
        <div className="fc">© 2019–2026 Ulfi Nuraini · Cybersecurity Consultant · United Kingdom</div>
      </div>
    </footer>
  );
}
