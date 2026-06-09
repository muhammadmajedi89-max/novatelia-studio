import { Button } from '@/components/ui/button';

export function HomeHero() {
  return (
    <section className="relative bg-brand-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,102,255,0.35),transparent_32%),radial-gradient(circle_at_70%_20%,rgba(107,33,245,0.28),transparent_28%)]" />
      <div className="container relative mx-auto grid min-h-screen items-center gap-12 px-6 py-28 lg:grid-cols-[1.05fr_0.95fr]">
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
            <Button href="/contact">Book a strategy call</Button>
            <Button href="/portfolio" variant="ghost">View selected work</Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-soft backdrop-blur-xl">
          <div className="rounded-[1.5rem] bg-brand-surface p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/50">AI product operating system</p>
                <h2 className="mt-1 text-2xl font-bold">Growth Console</h2>
              </div>
              <span className="rounded-full bg-brand-teal/15 px-3 py-1 text-sm text-brand-teal">Live</span>
            </div>
            <div className="grid gap-3">
              {['Knowledge base connected', 'Workflow automation active', 'AI assistant deployed'].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-sm text-white/75">{item}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-teal" />
                </div>
              ))}
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
    </section>
  );
}
