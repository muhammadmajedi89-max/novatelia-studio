import Link from 'next/link';
import { DarkCard } from '@/components/ui/card';

export function FeaturedArticle() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="container mx-auto">
        <DarkCard className="grid gap-8 rounded-[2rem] p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="h-72 rounded-[1.5rem] bg-gradient-to-br from-brand-blue/30 via-brand-purple/20 to-brand-teal/20" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">Featured insight</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">
              Building AI systems that teams actually use.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              A practical framework for turning AI ideas into controlled workflows, useful assistants and measurable business systems.
            </p>
            <Link href="/blog/building-useful-ai-systems" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:-translate-y-1">
              Read featured article
            </Link>
          </div>
        </DarkCard>
      </div>
    </section>
  );
}
