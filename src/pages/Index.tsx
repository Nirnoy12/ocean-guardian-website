import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { EventsSection } from '@/components/EventsSection';
import { IntroductionSection } from '@/components/IntroductionSection';
import { ServicesSection } from '@/components/ServicesSection';
import { SponsorsSection } from '@/components/SponsorsSection';
import { MissionSection } from '@/components/MissionSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <EventsSection />
          <IntroductionSection />
          <ServicesSection />
          <SponsorsSection />
          <MissionSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
