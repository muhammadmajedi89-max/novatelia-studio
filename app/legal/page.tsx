import Link from 'next/link';
import type { Route } from 'next';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const legalPages: Array<{ title: string; body: string; href: Route }> = [
  {
    title: 'Privacy Policy',
    body: 'How Novatelia Studio handles personal information, inquiries and website data.',
    href: '/legal/privacy'
  },
  {
    title: 'Terms of Service',
    body: 'The general terms for using the Novatelia Studio website and requesting services.',
    href: '/legal/terms'
  },
  {
    title: 'Cookie Policy',
    body: 'How cookies and similar technologies may be used for analytics and website experience.',
    href: '/legal/cookies'
  }
];

export default function LegalPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <section className="bg-brand-dark px-6 pb-24 pt-36 text-white">
        <div className="container mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Legal</p>
          <h1 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            Policies and terms for Novatelia Studio.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            This legal hub provides clear access to privacy, terms and cookie information for website visitors and business inquiries.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {legalPages.map((page) => (
            <Link key={page.href} href={page.href} className="rounded-3xl border border-brand-border bg-white p-7 shadow-card transition hover:-translate-y-1">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-brand-navy">{page.title}</h2>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{page.body}</p>
              <p className="mt-6 text-sm font-semibold text-brand-blue">Read policy</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
