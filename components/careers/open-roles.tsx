import Link from 'next/link';
import { Card } from '@/components/ui/card';
import type { SanityCareer } from '@/types/sanity';

const roles = [
  {
    title: 'Product Designer',
    team: 'Design',
    location: 'Remote / Regional',
    href: '/careers/product-designer'
  },
  {
    title: 'Frontend Engineer',
    team: 'Engineering',
    location: 'Remote / Regional',
    href: '/careers/frontend-engineer'
  },
  {
    title: 'AI Workflow Specialist',
    team: 'AI & Automation',
    location: 'Remote / Regional',
    href: '/careers/ai-workflow-specialist'
  },
  {
    title: 'Digital Growth Strategist',
    team: 'Growth',
    location: 'Remote / Regional',
    href: '/careers/digital-growth-strategist'
  }
];

type OpenRolesProps = {
  cmsRoles?: SanityCareer[];
};

export function OpenRoles({ cmsRoles = [] }: OpenRolesProps) {
  const displayRoles = cmsRoles.length
    ? cmsRoles.map((role) => ({
        title: role.title,
        team: role.department || 'Studio',
        location: role.location || 'Remote / Regional',
        href: `/careers/${role.slug}`
      }))
    : roles;

  return (
    <section id="open-roles" className="container mx-auto px-6 py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Open roles</p>
        <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
          Join a multidisciplinary digital studio.
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {displayRoles.map((role) => (
          <Link key={role.href} href={role.href} className="group block transition hover:-translate-y-1">
            <Card className="h-full">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-brand-blue">{role.team}</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-brand-navy">{role.title}</h3>
                  <p className="mt-3 text-sm text-brand-muted">{role.location}</p>
                </div>
                <span className="rounded-full bg-brand-bg px-4 py-2 text-sm font-semibold text-brand-navy">Apply</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
