import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { TopVideoSection } from '@/components/TopVideoSection';
import { EventsSection } from '@/components/EventsSection';
import { MissionSection } from '@/components/MissionSection';
import { SponsorsSection } from '@/components/SponsorsSection';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

function HomeIntro() {
  const { t } = useLanguage();
  return (
    <section className="py- bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          {t(
            'Jaljiv Rakshak Foundation has been co-ordinating with R.T.O. Mumbai and Mumbai Police for over 25 years, providing FREE lifeguard services at Mumbai beaches during festivals and emergencies.',
            'जलजीव रक्षक फाउंडेशन २५+ वर्षे R.T.O. मुंबई आणि मुंबई पोलीस सह समन्वय साधून सणांदरम्यान आणि आणीबाणीत मुंबईच्या समुद्रकिनाऱ्यांवर मोफत जीवरक्षक सेवा देत आहे.'
          )}
        </motion.p>
        <Button asChild className="rounded-full font-heading" size="lg">
          <Link to="/about">{t('Read More About Us', 'आमच्याबद्दल अधिक वाचा')}</Link>
        </Button>
      </div>
    </section>
  );
}

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <TopVideoSection />
        <main>
          <HomeIntro />
          <EventsSection />
          <MissionSection />
          <SponsorsSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
