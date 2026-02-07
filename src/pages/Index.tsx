import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';

// ERROR WAS LIKELY HERE:
// Change '@/components/home/HeroSection' to '@/components/HeroSection'
// (or wherever your HeroSection.tsx file is actually located)
import { HeroSection } from '@/components/HeroSection'; 

import { EventsSection } from '@/components/EventsSection';
import { MissionSection } from '@/components/MissionSection';
import { SponsorsSection } from '@/components/SponsorsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    // Note: LanguageProvider is now in App.tsx, so we can use a simple div here
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <main>
        <EventsSection />
        <MissionSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;