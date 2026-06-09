import { DarkCard } from '@/components/ui/card';

const highlights = [
  'Strategy aligned to business goals before visual design begins',
  'Reusable interface systems built for future product growth',
  'Launch planning connected to SEO, analytics and conversion tracking'
];

export function CaseStudyPreview() {
  return (
    <section className="bg-brand-navy px-6 py-24 text-white">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Case study method</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-5xl">
            Every project is documented from challenge to measurable outcome.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            Portfolio pages are structured to show the problem, strategy, design system, implementation details and results in a clear client-ready format.
          </p>
        </div>
        <DarkCard className="rounded-[2rem] p-8">
          <div className="space-y-4">
            {highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-white/70">
                {item}
              </div>
            ))}
          </div>
        </DarkCard>
      </div>
    </section>
  );
}
