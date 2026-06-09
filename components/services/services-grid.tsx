import Link from 'next/link';
import { Card } from '@/components/ui/card';

const services = [
  {
    title: 'AI Solutions',
    href: '/services/ai-solutions',
    description: 'Custom AI assistants, workflow support, document intelligence and business copilots.'
  },
  {
    title: 'Web Applications',
    href: '/services/web-applications',
    description: 'Secure dashboards, portals, SaaS products and internal operating platforms.'
  },
  {
    title: 'Website Design',
    href: '/services/website-design',
    description: 'Premium marketing websites with conversion strategy, SEO structure and fast performance.'
  },
  {
    title: 'UI/UX Design',
    href: '/services/ui-ux-design',
    description: 'Research, wireframes, design systems and production-ready interfaces for complex products.'
  },
  {
    title: 'Branding',
    href: '/services/branding',
    description: 'Identity systems, visual language, messaging and launch-ready brand assets.'
  },
  {
    title: 'Automation Systems',
    href: '/services/automation-systems',
    description: 'CRM journeys, lead qualification, operations workflows and connected business systems.'
  },
  {
    title: 'Digital Growth',
    href: '/services/digital-marketing',
    description: 'SEO, content systems, campaign funnels and analytics designed around measurable growth.'
  },
  {
    title: 'Enterprise Platforms',
    href: '/services/enterprise-platforms',
    description: 'Multi-role platforms, integrations, permission models and long-term product architecture.'
  }
];

export function ServicesGrid() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Capabilities</p>
        <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
          Senior execution across the full digital product lifecycle.
        </h2>
        <p className="mt-5 text-lg leading-8 text-brand-muted">
          Choose one focused service or combine strategy, design, engineering and growth into a single launch system.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Link key={service.href} href={service.href} className="group block transition hover:-translate-y-1">
            <Card className="h-full">
              <div className="mb-6 h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-blue/15 to-brand-purple/15" />
              <h3 className="text-xl font-bold text-brand-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{service.description}</p>
              <p className="mt-6 text-sm font-semibold text-brand-blue">Explore service</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
