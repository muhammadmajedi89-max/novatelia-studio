const steps = [
  {
    title: 'Apply',
    body: 'Share your profile, portfolio or relevant work samples with a short note about the role you want.'
  },
  {
    title: 'Intro conversation',
    body: 'We discuss experience, goals, working style and the type of projects you want to help build.'
  },
  {
    title: 'Practical review',
    body: 'Depending on the role, we review a practical task, portfolio case or technical conversation.'
  },
  {
    title: 'Join the studio',
    body: 'We align on scope, collaboration model, expectations and onboarding into active delivery work.'
  }
];

export function HiringProcess() {
  return (
    <section className="bg-brand-bg px-6 py-24">
      <div className="container mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Hiring process</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            A clear path from application to collaboration.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
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
