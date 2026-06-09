import { Button } from '@/components/ui/button';
import { DarkCard } from '@/components/ui/card';

export function CareersCTA() {
  return (
    <section className="bg-brand-dark px-6 py-24 text-white">
      <div className="container mx-auto">
        <DarkCard className="grid gap-8 rounded-[2rem] p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Join the studio</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.04em] md:text-5xl">
              Bring your craft to projects that connect strategy, design, AI and engineering.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Send your profile, portfolio or introduction. We are always open to strong collaborators across digital product and growth.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="mailto:business@novatelia.com" variant="secondary">Send profile</Button>
            <Button href="/contact" variant="ghost">Contact studio</Button>
          </div>
        </DarkCard>
      </div>
    </section>
  );
}
