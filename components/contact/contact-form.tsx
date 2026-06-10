'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const initialFormState = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  projectDetails: ''
};

export function ContactForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  function updateField(field: keyof typeof initialFormState, value: string) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Unable to submit your inquiry.');
      }

      setStatus('success');
      setMessage(result.message || 'Thank you. We received your inquiry.');
      setFormState(initialFormState);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to submit your inquiry.');
    }
  }

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Project inquiry</p>
          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-brand-navy md:text-5xl">
            Send the context. We will help shape the scope.
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Use this form to share your goals, timeline and requirements with Novatelia Studio.
          </p>
        </div>
        <Card>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-brand-navy">Name</span>
                <input
                  required
                  name="name"
                  value={formState.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-blue"
                  placeholder="Name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-brand-navy">Email</span>
                <input
                  required
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-blue"
                  placeholder="Email"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-brand-navy">Company</span>
                <input
                  name="company"
                  value={formState.company}
                  onChange={(event) => updateField('company', event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-blue"
                  placeholder="Company"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-brand-navy">Project type</span>
                <input
                  name="projectType"
                  value={formState.projectType}
                  onChange={(event) => updateField('projectType', event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-blue"
                  placeholder="Project type"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-semibold text-brand-navy">Project details</span>
              <textarea
                required
                name="projectDetails"
                value={formState.projectDetails}
                onChange={(event) => updateField('projectDetails', event.target.value)}
                className="mt-2 min-h-40 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-blue"
                placeholder="Tell us about your goals, timeline, budget range and current challenges."
              />
            </label>
            {message ? (
              <p className={status === 'success' ? 'text-sm font-semibold text-brand-teal' : 'text-sm font-semibold text-red-600'}>
                {message}
              </p>
            ) : null}
            <Button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting...' : 'Submit inquiry'}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
