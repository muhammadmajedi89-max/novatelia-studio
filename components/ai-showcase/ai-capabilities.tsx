import { Card } from '@/components/ui/card';

const capabilities = [
  {
    title: 'AI Assistants',
    body: 'Role-specific assistants for support, sales, onboarding, internal knowledge and client operations.'
  },
  {
    title: 'Document Intelligence',
    body: 'Search, summarize, classify and extract insight from proposals, reports, manuals and business documents.'
  },
  {
    title: 'Knowledge Bases',
    body: 'Structured company knowledge systems that make policies, services and technical information easier to use.'
  },
  {
    title: 'Workflow Automation',
    body: 'Connected workflows that reduce repetitive work across CRM, operations, support and reporting.'
  },
  {
    title: 'Customer Support AI',
    body: 'AI-enabled response flows for faster support, better triage and improved customer experience.'
  },
  {
    title: 'Enterprise AI Platforms',
    body: 'Secure, scalable interfaces that combine AI, data, permissions, integrations and analytics.'
  }
];

export function AICapabilities() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Capabilities</p>
        <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
          AI solutions designed around real business workflows.
        </h2>
        <p className="mt-5 text-lg leading-8 text-brand-muted">
          We focus on practical AI systems that are useful, measurable and connected to daily operations.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability) => (
          <Card key={capability.title} className="h-full">
            <div className="mb-6 h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-blue/15 to-brand-teal/15" />
            <h3 className="text-xl font-bold text-brand-navy">{capability.title}</h3>
            <p className="mt-3 text-sm leading-6 text-brand-muted">{capability.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
