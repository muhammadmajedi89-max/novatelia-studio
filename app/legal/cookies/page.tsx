import Link from 'next/link';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const sections = [
  {
    title: 'What cookies are',
    body: 'Cookies are small files or similar technologies that may help a website remember preferences, understand usage and improve visitor experience.'
  },
  {
    title: 'How we may use cookies',
    body: 'Novatelia Studio may use cookies for basic website functionality, analytics, performance monitoring and improving content relevance.'
  },
  {
    title: 'Managing cookies',
    body: 'Visitors can usually control or disable cookies through browser settings. Some website features may not work as expected when cookies are disabled.'
  },
  {
    title: 'Updates',
    body: 'This cookie policy may be updated as website tools, analytics or privacy requirements evolve.'
  }
];

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <section className="bg-brand-dark px-6 pb-20 pt-36 text-white">
        <div className="container mx-auto max-w-4xl">
          <Link href="/legal" className="text-sm font-semibold text-white/60 transition hover:text-white">Back to legal</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Cookie Policy</p>
          <h1 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            How Novatelia Studio may use cookies.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            This page is a frontend-ready cookie policy template and should be reviewed by legal counsel before final public launch.
          </p>
        </div>
      </section>
      <section className="container mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-5">
          {sections.map((section) => (
            <div key={section.title} className="rounded-3xl border border-brand-border bg-white p-8 shadow-card">
              <h2 className="text-2xl font-bold tracking-[-0.03em] text-brand-navy">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-brand-muted">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
