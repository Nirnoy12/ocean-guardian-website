import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import beachImage from '@/assets/beach.jpg';

/**
 * Header for Inner Pages (About, Contact, etc.)
 * Includes Branding, Slogan, and CTA Buttons.
 */
export function TopVideoSection() {
  const { t } = useLanguage();

  return (
    <section 
      // 'mt-16' pushes it below the fixed navbar
      // 'min-h-[650px]' ensures a tall, impressive header
      className="relative w-full min-h-[650px] overflow-hidden flex-shrink-0 mt-16 flex items-center justify-center"
    >
      {/* Static Background Image */}
      <img
        src={beachImage}
        alt="Header Background"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
      />
      
      {/* Dark Overlay (50% opacity) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Title */}
          <h1 className="font-heading font-black text-3xl md:text-5xl text-white mb-3 tracking-wide drop-shadow-lg uppercase">
            {t('Jaljiv Rakshak Foundation', 'जलजीव रक्षक फाउंडेशन')}
          </h1>
          
          {/* Subtitle / Tagline */}
          <p className="text-lg md:text-xl text-white/90 font-medium tracking-wider mb-6">
            {t(
              'Govt. Regd. NGO • Est. 1998', 
              'शासन मान्य स्वयंसेवी संस्था • स्थापना १९९८'
            )}
          </p>

          {/* Decorative Divider */}
          <div className="w-24 h-1 bg-gold mx-auto mb-10 rounded-full" />
          
          {/* CTA Buttons - Added Here */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-ocean-deep font-heading font-bold text-lg px-8 py-6 rounded-full shadow-lg pulse-glow border-none"
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
          </div>

        </motion.div>
      </div>

      {/* Wave Transition at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden z-20">
        <svg
          className="absolute bottom-0 w-[200%] animate-wave"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(var(--background))" /* Matches the white page background */
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
}