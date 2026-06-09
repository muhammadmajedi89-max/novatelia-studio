import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const fields = ['Name', 'Email', 'Company', 'Project type'];

export function ContactForm() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Project inquiry</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            Send the context. We will help shape the scope.
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Use this structure as a production-ready form foundation. It can later connect to email, CRM or a backend endpoint.
          </p>
        </div>
        <Card>
          <form className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              {fields.map((field) => (
                <label key={field} className="block">
                  <span className="text-sm font-semibold text-brand-navy">{field}</span>
                  <input
                    className="mt-2 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-blue"
                    placeholder={field}
                  />
                </label>
              ))}
            </div>
            <label className="block">
              <span className="text-sm font-semibold text-brand-navy">Project details</span>
              <textarea
                className="mt-2 min-h-40 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-blue"
                placeholder="Tell us about your goals, timeline, budget range and current challenges."
              />
            </label>
            <Button type="submit">Submit inquiry</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
