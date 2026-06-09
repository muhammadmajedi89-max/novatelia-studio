const stacks = [
  ['Strategy', 'Product discovery, UX research, information architecture'],
  ['Design', 'Figma systems, interface design, prototypes, design tokens'],
  ['Frontend', 'Next.js, React, TypeScript, Tailwind CSS'],
  ['Backend', 'APIs, databases, authentication, integrations'],
  ['AI', 'Assistants, retrieval systems, workflow intelligence'],
  ['Growth', 'SEO, analytics, landing pages, conversion funnels']
];

export function TechnologyStack() {
  return (
    <section className="bg-brand-bg px-6 py-24">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Technology stack</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            Built with modern, maintainable and scalable foundations.
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Every service is structured so design, content, engineering and growth can evolve after launch.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stacks.map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-brand-border bg-white p-6 shadow-card">
              <h3 className="text-lg font-bold text-brand-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
