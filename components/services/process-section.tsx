const steps = [
  {
    title: 'Discover',
    body: 'Clarify business goals, audiences, technical constraints and measurable success criteria.'
  },
  {
    title: 'Design',
    body: 'Create flows, wireframes, interface systems and polished production-ready screens.'
  },
  {
    title: 'Build',
    body: 'Develop the product with scalable Next.js architecture, reusable components and clean data structures.'
  },
  {
    title: 'Launch',
    body: 'Prepare SEO, analytics, performance checks, accessibility checks and launch support.'
  }
];

export function ProcessSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Process</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            A clear path from idea to launched digital system.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-brand-border bg-brand-bg p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-6 text-xl font-bold text-brand-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
