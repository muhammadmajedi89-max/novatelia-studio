import Link from 'next/link';
import { Card } from '@/components/ui/card';
import type { SanityPortfolioProject } from '@/types/sanity';

const projects = [
  {
    title: 'AI Support Console',
    category: 'AI Platform',
    metric: '60% faster support response',
    href: '/portfolio/ai-support-console'
  },
  {
    title: 'Enterprise Client Portal',
    category: 'Web Application',
    metric: '3x lead-to-project clarity',
    href: '/portfolio/enterprise-client-portal'
  },
  {
    title: 'FTTH Operations Platform',
    category: 'Telecom System',
    metric: '50+ active fiber nodes mapped',
    href: '/portfolio/ftth-operations-platform'
  },
  {
    title: 'Data Center Growth Site',
    category: 'Website Design',
    metric: '220% search visibility lift',
    href: '/portfolio/data-center-growth-site'
  },
  {
    title: 'Regional Brand System',
    category: 'Branding',
    metric: 'Unified identity across 3 offices',
    href: '/portfolio/regional-brand-system'
  },
  {
    title: 'Automation Workflow Hub',
    category: 'Automation',
    metric: '35% less manual operations work',
    href: '/portfolio/automation-workflow-hub'
  }
];

type PortfolioGridProps = {
  cmsProjects?: SanityPortfolioProject[];
};

export function PortfolioGrid({ cmsProjects = [] }: PortfolioGridProps) {
  const displayProjects = cmsProjects.length
    ? cmsProjects.map((project) => ({
        title: project.title,
        category: project.serviceType || project.industry || 'Case Study',
        metric: project.metrics?.[0]?.value || project.summary || 'Outcome-focused digital delivery',
        href: `/portfolio/${project.slug}`
      }))
    : projects;

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Selected work</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            Projects shaped around outcomes, not decoration.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-brand-muted">
          These case-study previews use representative Novatelia Studio service patterns and are ready to connect to a CMS later.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {displayProjects.map((project) => (
          <Link key={project.href} href={project.href} className="group block transition hover:-translate-y-1">
            <Card className="h-full overflow-hidden p-0">
              <div className="h-48 bg-gradient-to-br from-brand-blue/20 via-brand-purple/15 to-brand-teal/20" />
              <div className="p-6">
                <p className="text-sm font-semibold text-brand-blue">{project.category}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-brand-navy">{project.title}</h3>
                <p className="mt-4 rounded-2xl bg-brand-soft px-4 py-3 text-sm font-semibold text-brand-navy">
                  {project.metric}
                </p>
                <p className="mt-6 text-sm font-semibold text-brand-blue">View case study</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
