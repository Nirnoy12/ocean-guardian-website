import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import policeImage from '@/assets/police.jpg';

export const IntroductionSection = () => {
  const { t, language } = useLanguage();
  const [isMarathiExpanded, setIsMarathiExpanded] = useState(false);

  const englishText = `JALJIV RAKSHAK FOUNDATION (Regd.), MUMBAI is an NGO comprising of swimmers/lifeguards/volunteers who have swimming skills. It was formed in year 1998 to reduce and minimize water mishaps during Shri Ganapati Visarjan, Shri Devi Visarjan & New year and from 2014 onwards during all important festivals like Gudi Padva, Chhath, Holi as well on weekends during monsoon season.

Since inception, this NGO has been working at Mumbai and Navi Mumbai beaches in co-ordination with Brihan Mumbai Muncipal Corporation (BMC) and Mumbai Police for Public Safety, providing our services absolutely free of cost. We provide proper infrastructure and training to all the lifeguards, equip them with life saving articles and other aids such as First Aid Kits, CPR Kits, Life Jackets, etc. for water rescues, provide drinking water and eatables without any expectation of returns whatsoever and sincerely strive for prevention and minimization of drowning incidences in particular.`;

  const marathiText = `जलजीव रक्षक फाउंडेशन (नोंदणीकृत), मुंबई ही एक स्वयंसेवी संस्था आहे जी पोहणे कौशल्य असलेल्या जीवरक्षक/स्वयंसेवकांची बनलेली आहे. श्री गणपती विसर्जन, श्री देवी विसर्जन आणि नववर्षादरम्यान पाण्यातील अपघात कमी करण्यासाठी १९९८ मध्ये याची स्थापना करण्यात आली. २०१४ पासून गुढी पाडवा, छठ, होळी तसेच पावसाळ्यात शनिवार-रविवारी सर्व महत्त्वाच्या सणांदरम्यान सेवा दिली जाते.

स्थापनेपासून, ही संस्था बृहन्मुंबई महानगरपालिका (BMC) आणि मुंबई पोलिसांच्या समन्वयाने मुंबई आणि नवी मुंबईच्या समुद्रकिनाऱ्यांवर सार्वजनिक सुरक्षेसाठी पूर्णपणे विनामूल्य सेवा देत आहे. आम्ही सर्व जीवरक्षकांना योग्य पायाभूत सुविधा आणि प्रशिक्षण प्रदान करतो, त्यांना जीव वाचवणारे साहित्य जसे की प्रथमोपचार किट, CPR किट, लाइफ जॅकेट इत्यादींनी सुसज्ज करतो आणि बुडण्याच्या घटना रोखण्यासाठी प्रामाणिक प्रयत्न करतो.`;

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
                {language === 'en' ? englishText : englishText}
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
