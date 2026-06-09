import Link from 'next/link';

const columns = [
  {
    title: 'Studio',
    links: [
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/careers', label: 'Careers' }
    ]
  },
  {
    title: 'Capabilities',
    links: [
      { href: '/services/ai-solutions', label: 'AI Solutions' },
      { href: '/services/website-design', label: 'Website Design' },
      { href: '/services/web-applications', label: 'Web Applications' },
      { href: '/services/automation-systems', label: 'Automation' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { href: '/blog', label: 'Insights' },
      { href: '/search', label: 'Search' },
      { href: '/privacy-policy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-brand-dark px-6 py-16 text-white">
      <div className="container mx-auto grid gap-12 lg:grid-cols-[1.2fr_1.8fr]">
        <div>
          <Link href="/" className="text-sm font-bold tracking-[0.28em]">
            NOVATELIA STUDIO
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
            AI, UX, engineering, branding and automation for modern digital growth.
            Built by Novatelia for ambitious teams across the region.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/60">
            <p>business@novatelia.com</p>
            <p>+968 7808 2410</p>
            <p>Muscat · Kabul · Sharjah</p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/60">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-12 border-t border-white/10 pt-6 text-sm text-white/45">
        © {new Date().getFullYear()} Novatelia Studio. All rights reserved.
      </div>
    </footer>
  );
}
