import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import policeImage from '@/assets/police.jpg';

const englishText = `JALJIV RAKSHAK FOUNDATION (Regd.), MUMBAI is an NGO comprising of swimmers/lifeguards/volunteers, etc. who have been co-ordinating with Traffic Control Branch (R.T.O.) MUMBAI for more than 25 years and in active co-ordination with Mumbai Police and Brihan Mumbai Mahanagar Palika (BMC) is providing Lifeguards for Ganesh immersion, Devi visarjan, Mahamanav Bharat Ratna Dr Babasaheb Ambedkar Mahaparinirvan din – 6th December, 31st December, New year celebrations, Haji Ali Darga Badi Raat, Ramzan Eid, etc. and for other Emergency Services. We provide "FREE OF COST" services on above occasions at various beaches of Mumbai. With an army of more than 400 volunteers (Lifeguards) stationed on shores putting in dedication of selfless service & hard work by standing in waters for 12–16 hours, are responsible for safety and security of general public and drowning incidences in particular.`;

const coreCommittee = [
  { name: 'Sanjaykumar Gyanprakash Mishra', role: 'Chairman', roleMr: 'अध्यक्ष' },
  { name: 'Rajkumar Srichand Bhatia', role: 'CEO / Treasurer', roleMr: 'CEO / खजिनदार' },
  { name: 'Sandeep Balkrishna Shivtarkar', role: 'General Secretary', roleMr: 'सचिव' },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              {t('About Our Foundation', 'आमच्या फाउंडेशनबद्दल')}
            </h1>
            <div className="w-24 h-1 bg-gold rounded-full mb-8" />
            <div className="relative rounded-2xl overflow-hidden shadow-card mb-8">
              <img
                src={policeImage}
                alt={t('Partnership with Mumbai Police', 'मुंबई पोलीस सह भागीदारी')}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ocean-deep/90 to-transparent p-4">
                <p className="text-white text-sm font-medium">
                  {t('In Partnership with Mumbai Police & BMC', 'मुंबई पोलीस आणि BMC सह भागीदारी')}
                </p>
              </div>
            </div>
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <p className="leading-relaxed whitespace-pre-line">{englishText}</p>
            </div>

            <h2 className="font-heading font-bold text-2xl text-foreground mt-12 mb-6">
              {t('Core Committee Members', 'केंद्रीय समिती सदस्य')}
            </h2>
            <div className="grid gap-6 md:grid-cols-3 mb-10">
              {coreCommittee.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-heading font-semibold text-foreground">{member.name}</p>
                  <p className="text-sm text-gold font-medium mt-1">{t(member.role, member.roleMr)}</p>
                </motion.div>
              ))}
            </div>

            <Button asChild className="rounded-full font-heading">
              <Link to="/">{t('Back to Home', 'मुख्यपृष्ठावर परत')}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
