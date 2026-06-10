import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ProcessSection } from '@/components/services/process-section';
import { ServicesCTA } from '@/components/services/services-cta';
import { ServicesGrid } from '@/components/services/services-grid';
import { ServicesHero } from '@/components/services/services-hero';
import { TechnologyStack } from '@/components/services/technology-stack';
import { getServices } from '@/lib/sanity/fetchers';

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <ServicesHero />
      <ServicesGrid cmsServices={services} />
      <ProcessSection />
      <TechnologyStack />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
