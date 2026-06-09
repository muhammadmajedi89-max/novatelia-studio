import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { AIAgents } from '@/components/ai-showcase/ai-agents';
import { AICapabilities } from '@/components/ai-showcase/ai-capabilities';
import { AICTA } from '@/components/ai-showcase/ai-cta';
import { AIHero } from '@/components/ai-showcase/ai-hero';
import { AIUseCases } from '@/components/ai-showcase/ai-use-cases';
import { AIWorkflow } from '@/components/ai-showcase/ai-workflow';

export default function AIShowcasePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <AIHero />
      <AICapabilities />
      <AIUseCases />
      <AIAgents />
      <AIWorkflow />
      <AICTA />
      <Footer />
    </main>
  );
}
