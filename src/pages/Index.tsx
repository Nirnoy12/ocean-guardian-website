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
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground max-w-7xl mx-auto mb-6 "
        >
          {
          t(
            'JAL JIV RAKSHAK FOUNDATION (Regd.), MUMBAI is an NGO comprising of swimmers /lifeguards/volunteers, etc. who have been co-ordinating with Traffic Control Branch (R.T.O.) MUMBAI for more than 25 years and in active co-ordination with Mumbai Police and BrihanMumbai Mahanagerpallika (BMC) is providing Lifeguards for Ganesh immersion, Devi visarjan, Mahamanav Bharat Ratna Dr Babasaheb Ambedkar Mahaparinirvan din – 6th December, 31st December, New year celebrations, Haji – Ali Darga Badi Raat, Ramzan Eid, etc. and for other Emergency Services. We provide “FREE OF COST” services on above occasions at various beaches of Mumbai. With an army of more than 400 volunteers (Lifeguards) stationed on shores putting in dedication of selfless service & hard work by standing in waters for 12 – 16 hours, are responsible for safety and security of general public and drowning incidences in particular.',
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
