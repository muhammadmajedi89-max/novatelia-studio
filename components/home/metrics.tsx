import { Card } from '@/components/ui/card';

const metrics = [
  ['375+', 'Projects delivered'],
  ['120+', 'Enterprise clients'],
  ['27M+', 'End users reached'],
  ['5', 'Countries served']
];

export function HomeMetrics() {
  return (
    <section className="container mx-auto grid gap-5 px-6 py-20 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map(([value, label]) => (
        <Card key={label}>
          <p className="text-4xl font-bold text-brand-navy">{value}</p>
          <p className="mt-2 text-sm text-brand-muted">{label}</p>
        </Card>
      ))}
    </section>
  );
}
