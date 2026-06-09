import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const plans = [
  {
    name: 'Launch',
    price: 'Project-based',
    description: 'For founders and teams that need a premium website, landing system or first product release.',
    features: ['Strategy workshop', 'Core UI/UX design', 'Responsive build', 'SEO foundations', 'Launch support'],
    href: '/contact'
  },
  {
    name: 'Growth',
    price: 'Monthly partner',
    description: 'For businesses that need continuous design, engineering, automation and growth execution.',
    features: ['Product roadmap', 'Design system expansion', 'Feature development', 'Analytics improvements', 'Monthly optimization'],
    href: '/contact',
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom scope',
    description: 'For larger organizations that need secure platforms, integrations, AI systems and long-term support.',
    features: ['Technical discovery', 'Custom architecture', 'AI and automation', 'Integrations', 'Priority support'],
    href: '/contact'
  }
];

export function PricingCards() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Packages</p>
        <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
          Choose the model that matches your stage and ambition.
        </h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.featured ? 'border-brand-blue shadow-glow' : ''}>
            {plan.featured ? (
              <p className="mb-5 inline-flex rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold text-white">Recommended</p>
            ) : null}
            <h3 className="text-2xl font-bold text-brand-navy">{plan.name}</h3>
            <p className="mt-3 text-3xl font-bold tracking-[-0.04em] text-brand-navy">{plan.price}</p>
            <p className="mt-4 text-sm leading-6 text-brand-muted">{plan.description}</p>
            <ul className="mt-7 space-y-3 text-sm text-brand-muted">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-teal" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={plan.href} variant={plan.featured ? 'primary' : 'secondary'}>Request proposal</Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
