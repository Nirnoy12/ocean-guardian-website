import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

const navItems = [
  { en: 'Home', mr: 'मुख्यपृष्ठ', href: '#home' },
  { en: 'About Us', mr: 'आमच्याबद्दल', href: '#about' },
  { en: 'Services', mr: 'सेवा', href: '#services' },
  { en: 'Donation', mr: 'देणगी', href: '#donation' },
  { en: 'Gallery', mr: 'गॅलरी', href: '#gallery' },
  { en: 'Contact Us', mr: 'संपर्क', href: '#contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ocean-deep/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-ocean-deep font-heading font-bold text-lg">
              JR
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-heading font-bold text-sm leading-tight">
                {t('Jaljiv Rakshak', 'जलजीव रक्षक')}
              </p>
              <p className="text-gold text-xs">
                {t('Foundation', 'फाउंडेशन')}
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white/90 hover:text-gold transition-colors text-sm font-medium relative group"
              >
                {t(item.en, item.mr)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 border-t border-white/10"
          >
            <div className="flex flex-col gap-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/90 hover:text-gold transition-colors py-2"
                >
                  {t(item.en, item.mr)}
                </a>
              ))}
              <div className="pt-2">
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
