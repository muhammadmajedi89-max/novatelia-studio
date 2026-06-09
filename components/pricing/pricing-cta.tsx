import { Button } from '@/components/ui/button';
import { DarkCard } from '@/components/ui/card';

export function PricingCTA() {
  return (
    <section className="bg-brand-dark px-6 py-24 text-white">
      <div className="container mx-auto">
        <DarkCard className="grid gap-8 rounded-[2rem] p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Next step</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.04em] md:text-5xl">
              Get a clear proposal for your next digital product, platform or growth system.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Send your goals, deadline and current context. We will recommend the right scope, timeline and engagement model.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="/contact" variant="secondary">Request proposal</Button>
            <Button href="/services" variant="ghost">Compare services</Button>
          </div>
        </DarkCard>
      </div>
    </section>
  );
}
