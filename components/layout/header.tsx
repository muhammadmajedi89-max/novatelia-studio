import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/ai-showcase', label: 'AI Showcase' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-[min(1280px,calc(100%-32px))] rounded-full border border-white/10 bg-brand-dark/75 px-5 py-4 text-white shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-6">
        <Link href="/" className="text-sm font-bold tracking-[0.28em]">
          NOVATELIA STUDIO
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-white/70 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Button href="/contact" variant="secondary" className="px-5 py-3">
            Start a project
          </Button>
        </div>
      </div>
    </header>
  );
}
