import { Button } from '@/components/ui/button';
import { DarkCard } from '@/components/ui/card';

export function ServicesCTA() {
  return (
    <section className="bg-brand-dark px-6 py-24 text-white">
      <div className="container mx-auto">
        <DarkCard className="grid gap-8 rounded-[2rem] p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Start here</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.04em] md:text-5xl">
              Tell us what you want to build and we will map the fastest path to launch.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Share your goals, timeline and business context. Novatelia Studio will recommend the right service mix for your next digital product.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="/contact" variant="secondary">Start a project</Button>
            <Button href="/portfolio" variant="ghost">View proof</Button>
          </div>
        </DarkCard>
      </div>
    </section>
  );
}
