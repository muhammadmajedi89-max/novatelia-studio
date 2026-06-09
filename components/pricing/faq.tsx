const faqs = [
  {
    question: 'Do you publish fixed prices?',
    answer: 'We use proposal-based pricing because scope, integrations, content, timelines and support needs vary by project.'
  },
  {
    question: 'Can we start small?',
    answer: 'Yes. Many clients begin with a focused strategy sprint, landing page, website refresh or MVP scope before expanding.'
  },
  {
    question: 'Do you support after launch?',
    answer: 'Yes. Growth and enterprise engagements can include optimization, feature development, analytics, SEO and automation support.'
  },
  {
    question: 'Can Novatelia Studio handle AI projects?',
    answer: 'Yes. We can support AI assistants, workflow intelligence, document systems and AI-enabled product experiences.'
  }
];

export function PricingFAQ() {
  return (
    <section className="bg-brand-bg px-6 py-24">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">FAQ</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            Common pricing questions.
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-brand-border bg-white p-7 shadow-card">
              <h3 className="text-xl font-bold text-brand-navy">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
