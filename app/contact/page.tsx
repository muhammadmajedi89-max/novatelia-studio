import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ContactCTA } from '@/components/contact/contact-cta';
import { ContactForm } from '@/components/contact/contact-form';
import { ContactHero } from '@/components/contact/contact-hero';
import { ContactOptions } from '@/components/contact/contact-options';
import { OfficeLocations } from '@/components/contact/office-locations';

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <ContactHero />
      <ContactForm />
      <ContactOptions />
      <OfficeLocations />
      <ContactCTA />
      <Footer />
    </main>
  );
}
