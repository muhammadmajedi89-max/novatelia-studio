const models = [
  {
    title: 'Fixed-scope launch',
    body: 'Best for websites, landing systems, MVPs and clearly defined product releases with a target timeline.'
  },
  {
    title: 'Monthly growth partner',
    body: 'Best for teams that need continuous design, development, automation, SEO and optimization support.'
  },
  {
    title: 'Enterprise delivery',
    body: 'Best for complex platforms, integrations, AI systems, multi-stakeholder approval and long-term support.'
  }
];

export function EngagementModels() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Engagement models</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            Work with us in the format that fits your decision process.
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Pricing depends on scope, complexity, speed, integrations, content readiness and the level of post-launch support required.
          </p>
        </div>
        <div className="space-y-4">
          {models.map((model, index) => (
            <div key={model.title} className="rounded-3xl border border-brand-border bg-brand-bg p-7">
              <p className="text-sm font-bold text-brand-blue">0{index + 1}</p>
              <h3 className="mt-3 text-2xl font-bold text-brand-navy">{model.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{model.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
