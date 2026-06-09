import { Button } from '@/components/ui/button';

export function ServicesHero() {
  return (
    <section className="relative bg-brand-dark px-6 pb-24 pt-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,102,255,0.32),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(20,184,166,0.22),transparent_24%)]" />
      <div className="container relative mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/70">
            Services overview
          </p>
          <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            Digital products, AI systems and growth platforms built as one studio.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            From strategy and interface design to Next.js engineering, automation and launch support,
            Novatelia Studio gives ambitious teams a single senior partner for modern digital execution.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Plan your project</Button>
            <Button href="/portfolio" variant="ghost">See our work</Button>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">Delivery model</p>
          <div className="mt-6 grid gap-4">
            {['Strategy sprint', 'Premium UI/UX', 'Production engineering', 'Automation and launch'].map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-brand-navy">
                  {index + 1}
                </span>
                <span className="text-sm text-white/75">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
