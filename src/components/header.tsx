import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'GitHub', href: 'https://github.com/Davie3', isExternal: true },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[color:var(--color-navy-light)]/80 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-[color:var(--color-accent)]">
          Davie3
        </Link>
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="text-[color:var(--color-slate-light)] hover:text-[color:var(--color-accent)] transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
