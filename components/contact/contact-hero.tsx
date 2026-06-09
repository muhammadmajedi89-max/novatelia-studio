import { Button } from '@/components/ui/button';

export function ContactHero() {
  return (
    <section className="relative bg-brand-dark px-6 pb-24 pt-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,102,255,0.32),transparent_30%),radial-gradient(circle_at_84%_4%,rgba(107,33,245,0.26),transparent_28%)]" />
      <div className="container relative mx-auto max-w-5xl">
        <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/70">
          Contact
        </p>
        <h1 className="text-5xl font-bold tracking-[-0.05em] md:text-7xl">
          Tell us what you want to build next.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
          Share your goals, timeline and business context. Novatelia Studio will help you map the right digital product, AI or growth system.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="mailto:business@novatelia.com">Email us</Button>
          <Button href="/pricing" variant="ghost">View pricing</Button>
        </div>
      </div>
    </section>
  );
}
