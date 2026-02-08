import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection'; // Now the Auto Slider
import { IntroductionSection } from '@/components/IntroductionSection'; // The Static "About" content
import { SponsorsSection } from '@/components/SponsorsSection'; // Our Sponsors
import { EventsSection } from '@/components/EventsSection'; // Upcoming Events
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* 1. Hero Auto Slider with Donate Button */}
        <HeroSection />
        
        <main>
          {/* 2. Static Content (Intro/About) - "Just below image slider... slide nhi krwana" */}
          <IntroductionSection />
          
          {/* 3. Our Sponsors (Images only) */}
          <SponsorsSection />

          {/* 4. Upcoming Events (Date Updated) */}
          <EventsSection />
        </main>

        {/* 5. Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;