import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import beachImage from '@/assets/beach.jpg';

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
  
  // CHANGED: 'text-sm' -> 'text-lg' for desktop
  // CHANGED: Added 'text-lg' for mobile to match
  const className = isMobile
    ? 'text-white/90 hover:text-gold transition-colors py-2 block text-lg font-medium'
    : 'text-white/90 hover:text-gold transition-colors text-lg font-medium relative group';

  return (
    <Link to={item.href} className={className} onClick={onNavigate}>
      {t(item.en, item.mr)}
      {!isMobile && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />}
    </Link>
  );
}

export const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const { t } = useLanguage();

  const isHome = location.pathname === '/';
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolidNav = !isHome || isScrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center ${
        showSolidNav ? 'shadow-lg' : 'py-4'
      }`}
    >
      {/* Background Image Layer */}
      {showSolidNav && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={beachImage} 
            alt="Navbar Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        </div>
      )}

      {/* Content Container */}
      <div className="container mx-auto px-8 w-full relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link to="/" className="flex items-center gap-3">
              {!logoError ? (
                <img
                  src={LOGO_SRC}
                  alt={t('Jaljiv Rakshak Foundation', 'जलजीव रक्षक फाउंडेशन')}
                  className="h-16 w-auto max-w-[120px] object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-ocean-deep font-heading font-bold text-lg">
                  JR
                </div>
              )}
              <div className="hidden sm:block">
                <p className="text-white font-heading font-bold text-xl leading-tight">
                  {t('Jaljiv Rakshak', 'जलजीव रक्षक')}
                </p>
                <p className="text-gold text-xl">
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

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-20 left-0 right-0 overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
                 <img src={beachImage} className="w-full h-full object-cover" alt="" />
                 <div className="absolute inset-0 bg-black/90" />
            </div>

            <div className="relative z-10 flex flex-col gap-3 p-4 border-t border-white/10">
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