import { Button } from '@/components/ui/button';

export function PortfolioHero() {
  return (
    <section className="relative bg-brand-dark px-6 pb-24 pt-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(107,33,245,0.32),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(0,102,255,0.26),transparent_28%)]" />
      <div className="container relative mx-auto max-w-5xl">
        <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/70">
          Portfolio
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.05em] md:text-7xl">
          Selected digital systems, platforms and brand experiences.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
          A focused look at how Novatelia Studio turns strategy, design, AI and engineering into measurable business outcomes.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact">Start a project</Button>
          <Button href="/services" variant="ghost">Explore services</Button>
        </div>
      </div>
    </section>
  );
}
