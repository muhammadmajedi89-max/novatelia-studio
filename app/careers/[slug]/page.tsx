import Link from 'next/link';
import { CareersCTA } from '@/components/careers/careers-cta';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const responsibilities = [
  'Work with strategy, design and engineering teams on client-facing digital systems.',
  'Turn business goals into practical deliverables, interfaces, workflows or technical solutions.',
  'Communicate clearly with stakeholders and contribute to high-quality delivery standards.'
];

const requirements = [
  'Strong portfolio, project examples or practical experience in the role area.',
  'Ability to work independently while collaborating with a multidisciplinary team.',
  'Interest in digital products, AI systems, automation, enterprise websites and growth platforms.'
];

export default function CareerDetailPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <section className="bg-brand-dark px-6 pb-20 pt-36 text-white">
        <div className="container mx-auto max-w-4xl">
          <Link href="/careers" className="text-sm font-semibold text-white/60 transition hover:text-white">Back to careers</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Open role</p>
          <h1 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            Product Designer
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            A CMS-ready career detail template for Novatelia Studio roles, designed to connect with real job data and application workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/55">
            <span>Remote / Regional</span>
            <span>•</span>
            <span>Design</span>
            <span>•</span>
            <span>Contract or full-time</span>
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-4xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-card">
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-brand-navy">Responsibilities</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-brand-muted">
              {responsibilities.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-card">
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-brand-navy">Requirements</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-brand-muted">
              {requirements.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-10 rounded-3xl border border-brand-border bg-white p-8 shadow-card">
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-brand-navy">How to apply</h2>
          <p className="mt-4 text-lg leading-8 text-brand-muted">
            Send your profile, portfolio or introduction to business@novatelia.com with the role title in the subject line.
          </p>
        </div>
      </section>
      <CareersCTA />
      <Footer />
    </main>
  );
}
