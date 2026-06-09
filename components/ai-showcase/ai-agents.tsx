const agents = [
  {
    role: 'Support Agent',
    task: 'Answers common questions, routes complex issues and keeps response quality consistent.'
  },
  {
    role: 'Sales Agent',
    task: 'Qualifies leads, summarizes requirements and prepares structured follow-up actions.'
  },
  {
    role: 'Operations Agent',
    task: 'Tracks recurring workflows, extracts information and prepares internal reports.'
  },
  {
    role: 'Knowledge Agent',
    task: 'Connects teams to trusted internal documents, service details and technical references.'
  }
];

export function AIAgents() {
  return (
    <section className="bg-brand-navy px-6 py-24 text-white">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">AI agents</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-5xl">
            Specialized agents that support teams instead of replacing judgment.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            We design agent workflows with clear boundaries, review steps and business context so teams can move faster with control.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {agents.map((agent) => (
            <div key={agent.role} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-white">{agent.role}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{agent.task}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
