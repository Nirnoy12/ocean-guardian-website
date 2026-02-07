import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import beachImage from '@/assets/beach.jpg';

// Hero video: uses public/hero_background.mp4 by default; override with VITE_HERO_VIDEO_URL in .env
const HERO_VIDEO_URL = import.meta.env.VITE_HERO_VIDEO_URL ?? '/hero_background.mp4';

export const HeroSection = () => {
  const { t } = useLanguage();
  const [videoError, setVideoError] = useState(false);
  const useVideo = HERO_VIDEO_URL && !videoError;

  const badges = [
    { icon: Shield, label: t('Regd. NGO', 'नोंदणीकृत NGO') },
    { icon: Award, label: t('25+ Years', '२५+ वर्षे') },
    { icon: Users, label: t('400+ Volunteers', '४००+ स्वयंसेवक') },
  ];

  return (
    <section 
      id="home" 
      // CHANGED: Added 'mt-20' to push the entire section below the fixed navbar. 
      // CHANGED: 'min-h-[85vh]' makes the video section tall and prominent.
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden mt-20"
    >
      {/* Background Video or Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {useVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={beachImage}
            className="w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
            <img src={beachImage} alt="Mumbai Beach" className="w-full h-full object-cover" />
          </video>
        ) : (
          <img
            src={beachImage}
            alt="Mumbai Beach"
            className="w-full h-full object-cover"
          />
        )}
        
        {/* CHANGED: Light Overlay (Black at 30%) so video is clear but text pops */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Animated Wave Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden z-10">
          <svg
            className="absolute bottom-0 w-[200%] animate-wave"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="hsl(var(--background))" /* Matches the white/light background of the next section */
              fillOpacity="0.2"
              d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z"
            />
          </svg>
           <svg
            className="absolute bottom-0 w-[200%] animate-wave"
            style={{ animationDelay: '-5s', animationDuration: '10s' }}
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
             {/* This path acts as the transition to the next section */}
            <path
               fill="hsl(var(--background))"
              d="M0,70 C360,20 720,80 1080,40 C1260,55 1380,35 1440,60 L1440,100 L0,100 Z"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center py-20">
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="trust-badge"
            >
              <badge.icon className="w-4 h-4" />
              {badge.label}
            </motion.div>
          ))}
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-heading font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 drop-shadow-lg leading-tight"
        >
          {t(
            'JALJIV RAKSHAK FOUNDATION',
            'जलजीव रक्षक फाउंडेशन'
          )}
        </motion.h1>

        {/* Subtitle with Gold Accent */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-white mb-4 font-heading drop-shadow-md"
        >
          {t(
            "Saving Lives at Mumbai's Shores for ",
            'मुंबईच्या किनाऱ्यांवर जीव वाचवत आहोत '
          )}
          <span className="text-gold font-bold">
            {t('25+ Years', '२५+ वर्षे')}
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-10 leading-relaxed drop-shadow-md"
        >
          {t(
            '400+ Dedicated Lifeguards Providing FREE Safety During Ganapati Visarjan, Devi Visarjan, New Year, and More. In Partnership with Mumbai Police & BMC.',
            '४००+ समर्पित जीवरक्षक गणपती विसर्जन, देवी विसर्जन, नववर्ष आणि इतर सणांदरम्यान मोफत सुरक्षा प्रदान करतात. मुंबई पोलीस आणि BMC सह भागीदारी.'
          )}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-ocean-deep font-heading font-bold text-lg px-8 py-6 rounded-full shadow-gold pulse-glow"
          >
            <Link to="/donation">
              {t('Donate Now', 'आता दान करा')}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white/80 bg-black/20 backdrop-blur-sm text-white hover:bg-white hover:text-ocean-deep font-heading font-semibold text-lg px-8 py-6 rounded-full transition-all"
          >
            <Link to="/about">
              {t('Read More', 'अधिक वाचा')}
            </Link>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-white/80 hover:text-gold transition-colors" aria-label={t('Scroll down', 'खाली स्क्रोल करा')}>
            <ChevronDown className="w-10 h-10 drop-shadow-md" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};