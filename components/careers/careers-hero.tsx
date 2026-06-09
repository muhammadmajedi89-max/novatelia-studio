import { Button } from '@/components/ui/button';

export function CareersHero() {
  return (
    <section className="relative bg-brand-dark px-6 pb-24 pt-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,102,255,0.32),transparent_30%),radial-gradient(circle_at_84%_4%,rgba(107,33,245,0.24),transparent_28%)]" />
      <div className="container relative mx-auto max-w-5xl">
        <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/70">
          Careers
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.05em] md:text-7xl">
          Build digital systems for ambitious regional businesses.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
          Join Novatelia Studio to work across design, engineering, AI, automation and enterprise digital growth.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="#open-roles">View open roles</Button>
          <Button href="/contact" variant="ghost">Contact studio</Button>
        </div>
      </div>
    </section>
  );
}
