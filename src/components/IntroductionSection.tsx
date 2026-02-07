import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import policeImage from '@/assets/police.jpg';

export const IntroductionSection = () => {
  const { t, language } = useLanguage();
  const [isMarathiExpanded, setIsMarathiExpanded] = useState(false);

  const englishText = `JALJIV RAKSHAK FOUNDATION (Regd.), MUMBAI is an NGO comprising of swimmers/lifeguards/volunteers, etc. who have been co-ordinating with Traffic Control Branch (R.T.O.) MUMBAI for more than 25 years and in active co-ordination with Mumbai Police and Brihan Mumbai Mahanagar Palika (BMC) is providing Lifeguards for Ganesh immersion, Devi visarjan, Mahamanav Bharat Ratna Dr Babasaheb Ambedkar Mahaparinirvan din – 6th December, 31st December, New year celebrations, Haji Ali Darga Badi Raat, Ramzan Eid, etc. and for other Emergency Services. We provide "FREE OF COST" services on above occasions at various beaches of Mumbai. With an army of more than 400 volunteers (Lifeguards) stationed on shores putting in dedication of selfless service & hard work by standing in waters for 12–16 hours, are responsible for safety and security of general public and drowning incidences in particular.`;

  const marathiText = `जलजीव रक्षक ही अधिकृत संघटना असून या मधील सदस्य गेली २५ वर्ष पेक्ष्या अधिक वर्षे मुंबई वाहतूक नियंत्रण शाखेच्या (R.T.O.) विद्यमानाने आणि मुंबई पोलीस, बृहन्मुंबई महानगरपालिके बरोबर सर्तक सहकार्य करत आहे. हि संस्था, जनहितारत, स्वयंसेवी करणारी असून, श्री गणेशमुर्ती विसर्जन (गणेशोत्सव), देवी विसर्जन (दसरा), महामानव भारतरत्न डॉ. बाबासाहेब आंबेडकर महापरीनिर्वाण दिन (६ डिसेंबर), नववर्ष स्वागत (३१ डिसेंबर), बडी रात व रमजान ईद साठी हाजी अली दर्गाह इत्यादी आणि इतर अत्यावश्यक प्रसंगी आम्ही मुंबईतील सर्व समुद्रकिनारी वर नमूद केलेल्या सण आणि उत्सवासाठी विनामूल्य सेवा देते.

जलजीव रक्षकच्या ताफ्यात ४०० हुन अधिक अधिकृत जलजीव सुरक्षा रक्षक आणि सभासद आहेत. हे सर्व सुरक्षा रक्षक आपल्या जीवाची पर्वा न करता, स्वतःच्या जबाबदारीवर १४-१६ तास समुद्राच्या पाण्यात उभे राहुन आलेल्या भाविकांना, सामान्य जनसमुदायाच्या सुरक्षिततेकरिता आणि समुद्राच्या पाण्यात बुडण्याचा विवीध दुर्घटना टाळण्या साठी कार्यरत असतात.`;

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t('About Our Foundation', 'आमच्या फाउंडेशनबद्दल')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* English Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card mb-6">
              <img
                src={policeImage}
                alt="Partnership with Mumbai Police"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ocean-deep/90 to-transparent p-4">
                <p className="text-white text-sm font-medium">
                  {t('In Partnership with Mumbai Police & BMC', 'मुंबई पोलीस आणि BMC सह भागीदारी')}
                </p>
              </div>
            </div>

            <div className="prose prose-lg text-muted-foreground">
              <p className="leading-relaxed">
                {language === 'en' ? englishText : marathiText}
              </p>
            </div>

            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold rounded-full"
            >
              <a href="/about">
                {t('Read More About Us', 'आमच्याबद्दल अधिक वाचा')}
              </a>
            </Button>
          </motion.div>

          {/* Marathi Content - Collapsible */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
              <button
                onClick={() => setIsMarathiExpanded(!isMarathiExpanded)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="font-marathi font-semibold text-xl text-foreground">
                  मराठी मध्ये वाचा
                </h3>
                {isMarathiExpanded ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: isMarathiExpanded ? 'auto' : 0,
                  opacity: isMarathiExpanded ? 1 : 0,
                }}
                className="overflow-hidden"
              >
                <div className="pt-4 font-marathi text-muted-foreground leading-relaxed">
                  {marathiText}
                </div>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '25+', label: t('Years of Service', 'सेवेची वर्षे') },
                { value: '400+', label: t('Active Volunteers', 'सक्रिय स्वयंसेवक') },
                { value: '1000+', label: t('Lives Saved', 'वाचवलेले जीव') },
                { value: '15+', label: t('Beach Locations', 'समुद्रकिनारे') },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 text-center shadow-card border border-border"
                >
                  <div className="font-heading font-bold text-3xl text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
