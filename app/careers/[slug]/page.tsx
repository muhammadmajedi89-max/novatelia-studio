import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CareersCTA } from '@/components/careers/careers-cta';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { getCareerBySlug } from '@/lib/sanity/fetchers';

const fallbackResponsibilities = [
  'Work with strategy, design and engineering teams on client-facing digital systems.',
  'Turn business goals into practical deliverables, interfaces, workflows or technical solutions.',
  'Communicate clearly with stakeholders and contribute to high-quality delivery standards.'
];

const fallbackRequirements = [
  'Strong portfolio, project examples or practical experience in the role area.',
  'Ability to work independently while collaborating with a multidisciplinary team.',
  'Interest in digital products, AI systems, automation, enterprise websites and growth platforms.'
];

type CareerDetailPageProps = {
  params: {
    slug: string;
  };
};

export default async function CareerDetailPage({ params }: CareerDetailPageProps) {
  const career = await getCareerBySlug(params.slug);

  if (!career) {
    notFound();
  }

  const responsibilities = career.responsibilities?.length ? career.responsibilities : fallbackResponsibilities;
  const requirements = career.requirements?.length ? career.requirements : fallbackRequirements;

  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <section className="bg-brand-dark px-6 pb-20 pt-36 text-white">
        <div className="container mx-auto max-w-4xl">
          <Link href="/careers" className="text-sm font-semibold text-white/60 transition hover:text-white">Back to careers</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">{career.status || 'Open role'}</p>
          <h1 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            {career.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            {career.summary || 'A CMS-powered career detail page for Novatelia Studio roles.'}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/55">
            <span>{career.location || 'Remote / Regional'}</span>
            <span>•</span>
            <span>{career.department || 'Studio'}</span>
            <span>•</span>
            <span>{career.employmentType || 'Contract or full-time'}</span>
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
            Send your profile, portfolio or introduction to {career.applicationEmail || 'business@novatelia.com'} with the role title in the subject line.
          </p>
        </div>
      </section>
      <CareersCTA />
      <Footer />
    </main>
  );
}
