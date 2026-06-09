import Link from 'next/link';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const sections = [
  {
    title: 'Website use',
    body: 'The Novatelia Studio website is provided for general information about our services, portfolio, insights and business inquiries.'
  },
  {
    title: 'Service inquiries',
    body: 'Submitting an inquiry does not create a binding service agreement. Any project scope, pricing, timeline and deliverables must be confirmed in a separate written agreement.'
  },
  {
    title: 'Intellectual property',
    body: 'Website content, design, copy and brand materials are owned by or licensed to Novatelia Studio unless otherwise stated.'
  },
  {
    title: 'Limitation of liability',
    body: 'Information on this website is provided as-is and should not be treated as legal, financial or technical advice for a specific situation.'
  }
];

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <section className="bg-brand-dark px-6 pb-20 pt-36 text-white">
        <div className="container mx-auto max-w-4xl">
          <Link href="/legal" className="text-sm font-semibold text-white/60 transition hover:text-white">Back to legal</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Terms of Service</p>
          <h1 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            Terms for using the Novatelia Studio website.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            This page is a frontend-ready terms template and should be reviewed by legal counsel before final public launch.
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
