import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import beachImage from '@/assets/beach.jpg';
// You can add more images to your assets folder and import them here
// import hero2 from '@/assets/hero2.jpg';
// import hero3 from '@/assets/hero3.jpg';

// Placeholder array for slider images. Replace these with your actual images.
const SLIDER_IMAGES = [
  {
    id: 1,
    src: beachImage,
    alt: "Mumbai Beach Safety"
  },
  {
    id: 2,
    // Use a different image variable here if you have one, e.g., hero2
    src: beachImage, 
    alt: "Volunteers in Action"
  },
  {
    id: 3,
    // Use a different image variable here, e.g., hero3
    src: beachImage, 
    alt: "Crowd Management"
  }
];

export const HeroSection = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);

  const badges = [
    { icon: Shield, label: t('Regd. NGO', 'नोंदणीकृत NGO') },
    { icon: Award, label: t('25+ Years', '२५+ वर्षे') },
    { icon: Users, label: t('400+ Volunteers', '४००+ स्वयंसेवक') },
  ];

  return (
    <section id="home" className="flex flex-col w-full mt-16 relative group">
      
      {/* --- SLIDER SECTION --- */}
      <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-black">
        
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <img
              src={SLIDER_IMAGES[currentSlide].src}
              alt={SLIDER_IMAGES[currentSlide].alt}
              className="w-full h-full object-cover opacity-60"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-ocean-deep/90" />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay (Static on top of slider) */}
        <div className="absolute inset-0 z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium"
              >
                <badge.icon className="w-4 h-4 text-gold" />
                {badge.label}
              </div>
            ))}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-white mb-6 drop-shadow-xl leading-tight"
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
            {t(
              "Saving Lives at Mumbai's Shores for ",
              'मुंबईच्या किनाऱ्यांवर जीव वाचवत आहोत '
            )}
            <span className="text-gold font-bold">
              {t('25+ Years', '२५+ वर्षे')}
            </span>
          </motion.p>
          
          {/* CTA Buttons - Donate Now Added */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-ocean-deep font-heading font-bold text-lg px-10 py-7 rounded-full shadow-lg pulse-glow border-none scale-110"
            >
              <Link to="/donation">
                {t('Donate Now', 'आता दान करा')}
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-ocean-deep font-heading font-semibold text-lg px-8 py-6 rounded-full transition-all"
            >
              <Link to="/about">
                {t('Read More', 'अधिक वाचा')}
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Slider Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};