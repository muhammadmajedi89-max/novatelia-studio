import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { CaseStudyPreview } from '@/components/portfolio/case-study-preview';
import { ClientResults } from '@/components/portfolio/client-results';
import { PortfolioCTA } from '@/components/portfolio/portfolio-cta';
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid';
import { PortfolioHero } from '@/components/portfolio/portfolio-hero';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <PortfolioHero />
      <PortfolioGrid />
      <ClientResults />
      <CaseStudyPreview />
      <PortfolioCTA />
      <Footer />
    </main>
  );
}
