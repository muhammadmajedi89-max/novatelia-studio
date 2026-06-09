import { Button } from '@/components/ui/button';
import { DarkCard } from '@/components/ui/card';

export function AICTA() {
  return (
    <section className="bg-brand-dark px-6 py-24 text-white">
      <div className="container mx-auto">
        <DarkCard className="grid gap-8 rounded-[2rem] p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">AI strategy</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.04em] md:text-5xl">
              Start with one useful AI workflow and scale from there.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Share your business process, documents and team goals. We will map the safest, most practical AI system to build first.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="/contact" variant="secondary">Plan an AI system</Button>
            <Button href="/pricing" variant="ghost">View engagement models</Button>
          </div>
        </DarkCard>
      </div>
    </section>
  );
}
