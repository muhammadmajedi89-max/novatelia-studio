import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { HomeCTA } from '@/components/home/cta';
import { HomeHero } from '@/components/home/hero';
import { HomeMetrics } from '@/components/home/metrics';
import { ServicesPreview } from '@/components/home/services-preview';

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <HomeHero />
      <HomeMetrics />
      <ServicesPreview />
      <HomeCTA />
      <Footer />
    </main>
  );
}
