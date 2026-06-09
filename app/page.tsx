import Link from 'next/link';

const services = [
  'AI Solutions',
  'Website Design',
  'Web Applications',
  'Mobile Applications',
  'UI/UX Design',
  'Branding',
  'Digital Marketing',
  'Automation Systems'
];

const metrics = [
  ['375+', 'Projects delivered'],
  ['120+', 'Enterprise clients'],
  ['27M+', 'End users reached'],
  ['5', 'Countries served']
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <section className="relative bg-brand-dark text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,102,255,0.35),transparent_32%),radial-gradient(circle_at_70%_20%,rgba(107,33,245,0.28),transparent_28%)]" />
        <div className="container relative mx-auto flex min-h-screen flex-col px-6 py-8">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
            <Link href="/" className="text-sm font-bold tracking-[0.28em]">
              NOVATELIA STUDIO
            </Link>
            <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/ai-showcase">AI</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <Link
              href="/contact"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-navy"
            >
              Start a project
            </Link>
          </header>

          <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-6 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/75">
                AI, UX, Web Engineering and Digital Growth
              </p>
              <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                We design and build intelligent digital products for ambitious companies.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                Novatelia Studio combines AI strategy, premium interface design, scalable web
                engineering, automation and brand systems into one production-ready digital studio.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-brand-blue px-7 py-4 text-center text-sm font-semibold text-white shadow-glow"
                >
                  Book a strategy call
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white"
                >
                  View selected work
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-soft backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-brand-surface p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">AI product operating system</p>
                    <h2 className="mt-1 text-2xl font-bold">Growth Console</h2>
                  </div>
                  <span className="rounded-full bg-brand-teal/15 px-3 py-1 text-sm text-brand-teal">
                    Live
                  </span>
                </div>
                <div className="grid gap-3">
                  {['Knowledge base connected', 'Workflow automation active', 'AI assistant deployed'].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <span className="text-sm text-white/75">{item}</span>
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-teal" />
                      </div>
                    )
                  )}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    ['+3x', 'Leads'],
                    ['-60%', 'Support'],
                    ['+220%', 'Traffic']
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl bg-white p-4 text-brand-navy">
                      <p className="text-2xl font-bold">{value}</p>
                      <p className="text-xs text-brand-muted">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-5 px-6 py-20 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map(([value, label]) => (
          <div key={label} className="rounded-3xl border border-brand-border bg-white p-7 shadow-card">
            <p className="text-4xl font-bold text-brand-navy">{value}</p>
            <p className="mt-2 text-sm text-brand-muted">{label}</p>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Services</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            One studio for strategy, design, AI and engineering.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              href="/services"
              key={service}
              className="group rounded-3xl border border-brand-border bg-white p-6 shadow-card transition hover:-translate-y-1"
            >
              <div className="mb-6 h-12 w-12 rounded-2xl bg-brand-soft" />
              <h3 className="text-xl font-bold text-brand-navy">{service}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">
                Premium execution mapped to measurable business outcomes.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-navy px-6 py-24 text-white">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Next step</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-5xl">
              Build a digital experience that compounds growth.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-lg leading-8 text-white/70">
              Start with an AI and UX strategy sprint, then move into production design,
              development, automation and launch support with one integrated team.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand-navy"
            >
              Discuss your project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
