import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import beachImage from '@/assets/beach.jpg';

export const HeroSection = () => {
  const { t } = useLanguage();

  const badges = [
    { icon: Shield, label: t('Regd. NGO', 'नोंदणीकृत NGO') },
    { icon: Award, label: t('25+ Years', '२५+ वर्षे') },
    { icon: Users, label: t('400+ Volunteers', '४००+ स्वयंसेवक') },
  ];

  return (
    <section id="home" className="flex flex-col w-full">
      
      {/* --- HERO BANNER WITH IMAGE BACKGROUND --- */}
      <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
        
        {/* Static Background Image */}
        <img
          src={beachImage}
          alt="Mumbai Beach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium"
              >
                <badge.icon className="w-4 h-4 text-gold" />
                {badge.label}
              </motion.div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading font-black text-4xl md:text-5xl lg:text-7xl text-white mb-6 drop-shadow-xl leading-tight"
          >
            {t('JALJIV RAKSHAK FOUNDATION', 'जलजीव रक्षक फाउंडेशन')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-heading max-w-4xl drop-shadow-md"
          >
            {t("Saving Lives at Mumbai's Shores for ", 'मुंबईच्या किनाऱ्यांवर जीव वाचवत आहोत ')}
            <span className="text-gold font-bold">{t('25+ Years', '२५+ वर्षे')}</span>
          </motion.p>
          
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-ocean-deep font-heading font-bold text-lg px-8 py-6 rounded-full shadow-lg pulse-glow border-none">
              <Link to="/donation">{t('Donate Now', 'आता दान करा')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-ocean-deep font-heading font-semibold text-lg px-8 py-6 rounded-full transition-all">
              <Link to="/about">{t('Read More', 'अधिक वाचा')}</Link>
            </Button>
          </motion.div>
        </div>

        {/* Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden z-20">
          <svg className="absolute bottom-0 w-[200%] animate-wave" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="hsl(var(--background))" d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
};