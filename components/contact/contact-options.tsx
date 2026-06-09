const options = [
  {
    title: 'General inquiries',
    value: 'business@novatelia.com',
    href: 'mailto:business@novatelia.com'
  },
  {
    title: 'Executive contact',
    value: 'Muhammad.Majeedi@novatelia.com',
    href: 'mailto:Muhammad.Majeedi@novatelia.com'
  },
  {
    title: 'Phone',
    value: '+968 7808 2410',
    href: 'tel:+96878082410'
  }
];

export function ContactOptions() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Direct contact</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            Reach the right channel for your request.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {options.map((option) => (
            <a key={option.title} href={option.href} className="rounded-3xl border border-brand-border bg-brand-bg p-7 transition hover:-translate-y-1 hover:shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">{option.title}</p>
              <p className="mt-4 text-xl font-bold text-brand-navy">{option.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
