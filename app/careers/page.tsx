import { Benefits } from '@/components/careers/benefits';
import { CareersCTA } from '@/components/careers/careers-cta';
import { CareersHero } from '@/components/careers/careers-hero';
import { HiringProcess } from '@/components/careers/hiring-process';
import { OpenRoles } from '@/components/careers/open-roles';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export default function CareersPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <CareersHero />
      <OpenRoles />
      <Benefits />
      <HiringProcess />
      <CareersCTA />
      <Footer />
    </main>
  );
}
