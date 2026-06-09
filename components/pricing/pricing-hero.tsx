import { Button } from '@/components/ui/button';

export function PricingHero() {
  return (
    <section className="relative bg-brand-dark px-6 pb-24 pt-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,102,255,0.32),transparent_30%),radial-gradient(circle_at_85%_0%,rgba(20,184,166,0.22),transparent_28%)]" />
      <div className="container relative mx-auto max-w-5xl">
        <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/70">
          Pricing
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.05em] md:text-7xl">
          Flexible engagement models for serious digital growth.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
          Start with a focused launch package or partner with Novatelia Studio for ongoing design, engineering, AI and growth execution.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact">Request proposal</Button>
          <Button href="/portfolio" variant="ghost">View proof</Button>
        </div>
      </div>
    </section>
  );
}
