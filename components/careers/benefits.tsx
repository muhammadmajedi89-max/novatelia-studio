const benefits = [
  {
    title: 'Meaningful regional work',
    body: 'Build websites, platforms, AI workflows and automation systems for businesses across emerging and GCC markets.'
  },
  {
    title: 'Multidisciplinary teams',
    body: 'Collaborate across strategy, design, engineering, AI, growth and enterprise delivery.'
  },
  {
    title: 'Remote-friendly culture',
    body: 'Work with flexible collaboration patterns while staying connected to clear delivery goals.'
  },
  {
    title: 'Growth mindset',
    body: 'Learn through real projects, practical feedback and exposure to modern product and AI systems.'
  }
];

export function Benefits() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Why join</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            A studio environment for builders, thinkers and operators.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-3xl border border-brand-border bg-brand-bg p-7 shadow-soft">
              <h3 className="text-xl font-bold text-brand-navy">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{benefit.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
