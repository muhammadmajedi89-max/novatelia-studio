import Link from 'next/link';
import type { Route } from 'next';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const recoveryLinks: Array<{ title: string; href: Route }> = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/services' },
  { title: 'Portfolio', href: '/portfolio' },
  { title: 'Contact', href: '/contact' }
];

export default function NotFound() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <section className="bg-brand-dark px-6 pb-24 pt-36 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">404</p>
          <h1 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            This page moved, changed or does not exist.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Use the links below to continue exploring Novatelia Studio services, work and contact options.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {recoveryLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-navy">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
