import Link from 'next/link';
import { Card } from '@/components/ui/card';

const articles = [
  {
    title: 'How practical AI systems improve daily operations',
    category: 'AI',
    href: '/blog/practical-ai-systems'
  },
  {
    title: 'What enterprise teams should expect from a modern website',
    category: 'Web Design',
    href: '/blog/modern-enterprise-website'
  },
  {
    title: 'Design systems as a foundation for faster product delivery',
    category: 'UI/UX',
    href: '/blog/design-systems-product-delivery'
  },
  {
    title: 'Automation opportunities hidden inside service businesses',
    category: 'Automation',
    href: '/blog/automation-service-businesses'
  },
  {
    title: 'From landing page to full digital growth engine',
    category: 'Growth',
    href: '/blog/digital-growth-engine'
  },
  {
    title: 'How to plan a scalable client portal or SaaS product',
    category: 'Product',
    href: '/blog/scalable-client-portal'
  }
];

export function ArticleGrid() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Latest articles</p>
        <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
          Practical thinking for digital leaders.
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.href} href={article.href} className="group block transition hover:-translate-y-1">
            <Card className="h-full">
              <p className="text-sm font-semibold text-brand-blue">{article.category}</p>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-brand-navy">{article.title}</h3>
              <p className="mt-6 text-sm font-semibold text-brand-blue">Read article</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
