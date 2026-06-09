import Link from 'next/link';
import { Card } from '@/components/ui/card';

const services = [
  'AI Solutions',
  'Website Design',
  'Web Applications',
  'Mobile Applications',
  'UI/UX Design',
  'Branding',
  'Digital Marketing',
  'Automation Systems'
];

export function ServicesPreview() {
  return (
    <section className="container mx-auto px-6 pb-24">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Services</p>
        <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
          One studio for strategy, design, AI and engineering.
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Link href="/services" key={service} className="group block transition hover:-translate-y-1">
            <Card className="h-full">
              <div className="mb-6 h-12 w-12 rounded-2xl bg-brand-soft" />
              <h3 className="text-xl font-bold text-brand-navy">{service}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">
                Premium execution mapped to measurable business outcomes.
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
