import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import beachImage from '@/assets/beach.jpg';

// Placeholder array for slider images.
const SLIDER_IMAGES = [
  {
    id: 1,
    src: "/hero.png",
    mobileSrc: "/hero_mobile.jpg",
    alt: "Slide 1"
  },
  {
    id: 2,
    src: "/ER.png", // Replace with different image if available
    alt: "Slide 2"
  },
  {
    id: 3,
    src: "/lg.png",
    mobileSrc: "/mission_mobile.jpg", // Replace with different image if available
    alt: "Slide 3"
  },
  {
    id: 4,
    src: "/safety.png", // Replace with different image if available
    alt: "Slide 4"
  },
  {
    id: 5,
    src: "/who.png",
    mobileSrc: "who-mobile.jpg",
    alt: "Slide 5"
  },
  {
    id: 6,
    src: "/community.png",
    alt: "Slide 6"
  },
];

export const HeroSection = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="flex flex-col w-full mt-16 relative group">
      
      {/* --- SLIDER SECTION --- */}
      <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-black">
        
        {/* Animated Images */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* --- UPDATED IMAGE LOGIC --- */}
            <picture className="w-full h-full block">
                {/* 1. If mobileSrc exists, use it for screens max-width 640px */}
                {SLIDER_IMAGES[currentSlide].mobileSrc && (
                    <source 
                        media="(max-width: 640px)" 
                        srcSet={SLIDER_IMAGES[currentSlide].mobileSrc} 
                    />
                )}
                
                {/* 2. Standard Image (Desktop/Default) */}
                <img
                    src={SLIDER_IMAGES[currentSlide].src}
                    alt={SLIDER_IMAGES[currentSlide].alt}
                    className="w-full h-full object-cover" 
                />
            </picture>
            {/* Very light overlay to ensure buttons are visible but images stay clear */}
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </AnimatePresence>

        {/* Buttons Overlay */}
        <div className="absolute inset-0 z-10 container px-4 h-[98%] flex flex-col justify-end items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-20"
          >
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-ocean-deep font-heading font-bold text-xl px-10 py-7 rounded-full shadow-2xl pulse-glow border-2 border-white/20"
            >
              <Link to="/donation">
                {t('Donate Now', 'आता दान करा')}
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-ocean-deep backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-ocean-deep font-heading font-bold text-xl px-10 py-7 rounded-full transition-all"
            >
              <Link to="/about">
                {t('Read More', 'अधिक वाचा')}
              </Link>
            </Button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};