import Link from 'next/link';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const sections = [
  {
    title: 'Information we collect',
    body: 'Novatelia Studio may collect contact details, company information, project context and messages submitted through website forms or direct email.'
  },
  {
    title: 'How we use information',
    body: 'We use submitted information to respond to inquiries, plan services, improve website experience and manage business communication.'
  },
  {
    title: 'Data sharing',
    body: 'We do not sell personal information. Information may be shared only with trusted service providers when needed to operate the website or respond to requests.'
  },
  {
    title: 'Contact',
    body: 'For privacy questions, contact business@novatelia.com or Muhammad.Majeedi@novatelia.com.'
  }
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <section className="bg-brand-dark px-6 pb-20 pt-36 text-white">
        <div className="container mx-auto max-w-4xl">
          <Link href="/legal" className="text-sm font-semibold text-white/60 transition hover:text-white">Back to legal</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Privacy Policy</p>
          <h1 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            How Novatelia Studio handles website and inquiry data.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            This policy is a frontend-ready legal template and should be reviewed by legal counsel before final public launch.
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
