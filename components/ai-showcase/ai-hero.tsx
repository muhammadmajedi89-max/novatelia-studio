import { Button } from '@/components/ui/button';

export function AIHero() {
  return (
    <section className="relative bg-brand-dark px-6 pb-24 pt-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(107,33,245,0.34),transparent_32%),radial-gradient(circle_at_82%_5%,rgba(20,184,166,0.24),transparent_28%)]" />
      <div className="container relative mx-auto max-w-5xl">
        <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/70">
          AI Showcase
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.05em] md:text-7xl">
          Practical AI systems for customer support, sales, operations and knowledge work.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
          Novatelia Studio designs AI assistants, automation workflows, document intelligence and enterprise knowledge systems that connect directly to business outcomes.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact">Plan an AI system</Button>
          <Button href="/portfolio" variant="ghost">View examples</Button>
        </div>
      </div>
    </section>
  );
}
