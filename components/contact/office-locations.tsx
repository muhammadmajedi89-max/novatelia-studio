const offices = [
  {
    city: 'Muscat',
    country: 'Oman',
    role: 'Regional business and operations presence'
  },
  {
    city: 'Kabul',
    country: 'Afghanistan',
    role: 'Field operations and technical delivery presence'
  },
  {
    city: 'Sharjah',
    country: 'United Arab Emirates',
    role: 'GCC coordination and regional client access'
  }
];

export function OfficeLocations() {
  return (
    <section className="bg-brand-bg px-6 py-24">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Regional presence</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            Connected across key regional markets.
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Novatelia works across the region with presence in Oman, Afghanistan and the United Arab Emirates.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {offices.map((office) => (
            <div key={office.city} className="rounded-3xl border border-brand-border bg-white p-7 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">{office.country}</p>
              <h3 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-brand-navy">{office.city}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{office.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
