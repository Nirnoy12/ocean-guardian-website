import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

const LOGO_SRC = '/logo.png';

const navItems = [
  { en: 'Home', mr: 'मुख्यपृष्ठ', href: '/' },
  { en: 'About Us', mr: 'आमच्याबद्दल', href: '/about' },
  { en: 'Services', mr: 'सेवा', href: '/services' },
  { en: 'Donation', mr: 'देणगी', href: '/donation' },
  { en: 'Membership', mr: 'सदस्यत्व', href: '/membership' },
  { en: 'Gallery', mr: 'गॅलरी', href: '/gallery' },
  { en: 'Contact Us', mr: 'संपर्क', href: '/contact' },
];

function NavLink({
  item,
  isMobile,
  onNavigate,
}: {
  item: (typeof navItems)[0];
  isMobile?: boolean;
  onNavigate?: () => void;
}) {
  const { t } = useLanguage();
  const className = isMobile
    ? 'text-white/90 hover:text-gold transition-colors py-2 block'
    : 'text-white/90 hover:text-gold transition-colors text-sm font-medium relative group';

  return (
    <Link to={item.href} className={className} onClick={onNavigate}>
      {t(item.en, item.mr)}
      {!isMobile && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />}
    </Link>
  );
}

// CHANGED: Removed the transparent logic. The navbar is now always solid Ocean Deep.
const NAV_SOLID = 'bg-ocean-deep shadow-lg py-2';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      // CHANGED: Fixed position, but always solid background for high contrast
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${NAV_SOLID}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link to="/" className="flex items-center gap-3">
              {!logoError ? (
                <img
                  src={LOGO_SRC}
                  alt={t('Jaljiv Rakshak Foundation', 'जलजीव रक्षक फाउंडेशन')}
                  className="h-12 w-auto max-w-[120px] object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-ocean-deep font-heading font-bold text-lg">
                  JR
                </div>
              )}
              <div className="hidden sm:block">
                <p className="text-white font-heading font-bold text-sm leading-tight">
                  {t('Jaljiv Rakshak', 'जलजीव रक्षक')}
                </p>
                <p className="text-gold text-xs">
                  {t('Foundation', 'फाउंडेशन')}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink item={item} />
              </motion.div>
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
            className="lg:hidden mt-2 pb-4 border-t border-white/10 bg-ocean-deep"
          >
            <div className="flex flex-col gap-3 pt-4 px-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  isMobile
                  onNavigate={() => setIsMobileMenuOpen(false)}
                />
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