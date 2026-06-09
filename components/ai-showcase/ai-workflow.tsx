const workflow = [
  {
    title: 'Map the workflow',
    body: 'Identify the exact process, users, data sources, risks and success metrics before selecting an AI approach.'
  },
  {
    title: 'Prepare knowledge',
    body: 'Organize documents, FAQs, policies, service details and operational information into usable source material.'
  },
  {
    title: 'Design the interface',
    body: 'Create the assistant, dashboard or workflow UI so teams can use AI inside a clear product experience.'
  },
  {
    title: 'Launch with control',
    body: 'Add review steps, analytics, handoff rules and improvement cycles so the system can evolve safely.'
  }
];

export function AIWorkflow() {
  return (
    <section className="bg-brand-bg px-6 py-24">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Workflow</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            From AI idea to controlled business system.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {workflow.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-brand-border bg-white p-7 shadow-card">
              <p className="text-sm font-bold text-brand-blue">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-bold text-brand-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
