import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import cyanImage from '@/assets/cyan.jpg';

export const MissionSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={cyanImage}
          alt="Ocean background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ocean-deep/80" />
        
        {/* Indian Flag Wave Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#FF9933] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#138808] to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Quote className="w-16 h-16 mx-auto text-gold/50" />
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight"
          >
            {t(
              '"An NGO of Lifeguards in Service of the Nation"',
              '"राष्ट्राच्या सेवेत जीवरक्षकांची स्वयंसेवी संस्था"'
            )}
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-32 h-1 bg-gold mx-auto rounded-full mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            {t(
              'Non-political, Non-religious organization dedicated to saving lives and serving humanity through water safety.',
              'जल सुरक्षेद्वारे जीव वाचवण्यासाठी आणि मानवतेची सेवा करण्यासाठी समर्पित अराजकीय, धर्मनिरपेक्ष संस्था.'
            )}
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { value: '400+', label: t('Volunteers', 'स्वयंसेवक') },
              { value: '24/7', label: t('Service', 'सेवा') },
              { value: '₹0', label: t('Cost to Public', 'खर्च') },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-4"
              >
                <div className="font-heading font-bold text-2xl md:text-3xl text-gold">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
