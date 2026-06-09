import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { EngagementModels } from '@/components/pricing/engagement-models';
import { PricingCards } from '@/components/pricing/pricing-cards';
import { PricingCTA } from '@/components/pricing/pricing-cta';
import { PricingFAQ } from '@/components/pricing/faq';
import { PricingHero } from '@/components/pricing/pricing-hero';

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <PricingHero />
      <PricingCards />
      <EngagementModels />
      <PricingFAQ />
      <PricingCTA />
      <Footer />
    </main>
  );
}
