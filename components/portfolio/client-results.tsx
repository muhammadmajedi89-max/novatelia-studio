const results = [
  ['3x', 'Clearer lead qualification through structured inquiry journeys'],
  ['220%', 'Search visibility lift through technical SEO and content architecture'],
  ['60%', 'Faster support workflows with AI-assisted operations'],
  ['50+', 'Fiber and infrastructure nodes organized for operational visibility']
];

export function ClientResults() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Results</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            Designed for measurable progress across growth, operations and customer experience.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {results.map(([value, label]) => (
            <div key={label} className="rounded-3xl border border-brand-border bg-brand-bg p-7">
              <p className="text-4xl font-bold text-brand-navy">{value}</p>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
