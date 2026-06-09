import { Button } from '@/components/ui/button';
import { DarkCard } from '@/components/ui/card';

export function HomeCTA() {
  return (
    <section className="bg-brand-navy px-6 py-24 text-white">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Next step</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-5xl">
            Build a digital experience that compounds growth.
          </h2>
        </div>
        <DarkCard className="rounded-[2rem] p-8">
          <p className="text-lg leading-8 text-white/70">
            Start with an AI and UX strategy sprint, then move into production design,
            development, automation and launch support with one integrated team.
          </p>
          <Button href="/contact" variant="secondary" className="mt-8">
            Discuss your project
          </Button>
        </DarkCard>
      </div>
    </section>
  );
}
