const useCases = [
  ['Support', 'Triage requests, draft answers, surface knowledge and improve response consistency.'],
  ['Sales', 'Qualify leads, prepare proposals, summarize calls and support follow-up workflows.'],
  ['Operations', 'Automate reports, route tasks, extract data and reduce repetitive internal work.'],
  ['Knowledge', 'Make internal documents, policies, services and technical resources searchable and useful.']
];

export function AIUseCases() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Use cases</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            AI where it creates operational leverage.
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            The best AI systems are focused on clear workflows, clean information and measurable business improvement.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-brand-border bg-brand-bg p-7">
              <h3 className="text-2xl font-bold text-brand-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
