const categories = ['AI', 'Web Design', 'UI/UX', 'Automation', 'Growth', 'Product', 'Strategy'];

export function Categories() {
  return (
    <section className="bg-brand-bg px-6 py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Topics</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-brand-navy md:text-4xl">
              Browse by focus area.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-brand-border bg-white px-5 py-3 text-sm font-semibold text-brand-navy shadow-soft">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
