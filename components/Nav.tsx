import Link from 'next/link';

/**
 * Anchor links point at `/#id` so they resolve from any route (home or CV).
 */
export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <Link className="brand" href="/">
          Ulfi <em>Nuraini</em>
        </Link>
        <div className="navlinks">
          <Link href="/#bearings">Expertise</Link>
          <Link href="/#work">Experience</Link>
          <Link href="/#process">Method</Link>
          <Link href="/about">About</Link>
          <Link href="/cv">CV</Link>
        </div>
        <Link href="/#contact" className="navcta">
          Contact
        </Link>
      </div>
    </nav>
  );
}
