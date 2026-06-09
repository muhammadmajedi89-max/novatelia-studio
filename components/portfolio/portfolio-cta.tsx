import { Button } from '@/components/ui/button';
import { DarkCard } from '@/components/ui/card';

export function PortfolioCTA() {
  return (
    <section className="bg-brand-dark px-6 py-24 text-white">
      <div className="container mx-auto">
        <DarkCard className="grid gap-8 rounded-[2rem] p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Build next</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.04em] md:text-5xl">
              Let us turn your next idea into a portfolio-worthy digital product.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Start with a focused strategy conversation and move into design, engineering and launch with a senior digital studio.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="/contact" variant="secondary">Start a project</Button>
            <Button href="/services" variant="ghost">Explore services</Button>
          </div>
        </DarkCard>
      </div>
    </section>
  );
}
