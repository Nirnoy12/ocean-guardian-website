import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const IntroductionSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
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

        <div className='bg-ocean-deep'>
        {/* Foundation Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-12"
        >
          
          <img
            src="/three.png"
            alt="Our Foundation"
            className="w-full h-full md:h-[700px] object-cover rounded-2xl shadow-lg border border-blue-300"
          />
        </motion.div>
        </div>


        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
          {[
            { value: '25+', label: t('Years of Service', 'सेवेची वर्षे') },
            { value: '650+', label: t('Active Volunteers', 'सक्रिय स्वयंसेवक') },
            { value: '400+', label: t('Lives Saved', 'वाचवलेले जीव') },
            { value: '10+', label: t('Beach Locations', 'समुद्रकिनारे') },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-4 text-center shadow-card border border-border"
            >
              <div className="font-heading font-bold text-4xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center">
          <a
            href="/about"
            className="inline-block px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
          >
            {t('Read More', 'अधिक वाचा')}
          </a>
        </div>

      </div>
    </section>
  );
};
