import Link from 'next/link';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const results = [
  { title: 'Services', body: 'Web design, AI systems, automation and digital growth services.', href: '/services' },
  { title: 'Portfolio', body: 'Selected studio projects and enterprise digital systems.', href: '/portfolio' },
  { title: 'AI Showcase', body: 'Practical AI assistants, agents and workflow automation ideas.', href: '/ai-showcase' },
  { title: 'Blog', body: 'Insights on AI, product design, automation and growth.', href: '/blog' },
  { title: 'Careers', body: 'Open roles and collaboration opportunities at Novatelia Studio.', href: '/careers' },
  { title: 'Contact', body: 'Reach Novatelia Studio for project inquiries and partnerships.', href: '/contact' }
];

export default function SearchPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <section className="bg-brand-dark px-6 pb-20 pt-36 text-white">
        <div className="container mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Search</p>
          <h1 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            Find pages, services and studio resources.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            A frontend-ready search page that can later connect to CMS, Algolia, database search or a custom API.
          </p>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-3">
            <input className="w-full rounded-2xl border border-white/10 bg-white px-5 py-4 text-brand-navy outline-none" placeholder="Search Novatelia Studio" />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-3xl border border-brand-border bg-white p-7 shadow-card transition hover:-translate-y-1">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-brand-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{item.body}</p>
              <p className="mt-6 text-sm font-semibold text-brand-blue">Open page</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
