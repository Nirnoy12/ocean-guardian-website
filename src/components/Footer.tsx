import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUp,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const footerLinks = {
  quickLinks: [
    { en: 'Home', mr: 'मुख्यपृष्ठ', href: '/' },
    { en: 'About Us', mr: 'आमच्याबद्दल', href: '/about' },
    { en: 'Services', mr: 'सेवा', href: '/services' },
    { en: 'Donation', mr: 'देणगी', href: '/donation' },
    { en: 'Membership', mr: 'सदस्यत्व', href: '/membership' },
    { en: 'Gallery', mr: 'गॅलरी', href: '/gallery' },
    { en: 'Contact', mr: 'संपर्क', href: '/contact' },
  ],
  legal: [
    { en: 'Privacy Policy', mr: 'गोपनीयता धोरण', href: '/privacy' },
    { en: 'Disclaimer', mr: 'अस्वीकरण', href: '/disclaimer' },
    { en: 'Terms of Service', mr: 'सेवेच्या अटी', href: '/terms' },
  ],
};

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ocean-deep text-white relative">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden -translate-y-full">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
          <path
            fill="hsl(210 100% 12%)"
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-ocean-deep font-heading font-bold text-xl">
                JR
              </div>
              <div>
                <p className="font-heading font-bold text-lg">
                  {t('Jaljiv Rakshak', 'जलजीव रक्षक')}
                </p>
                <p className="text-gold text-sm">
                  {t('Foundation (Regd.)', 'फाउंडेशन (नोंदणीकृत)')}
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {t(
                'An NGO of Lifeguards in Service of the Nation. Saving lives at Mumbai\'s shores since 1998.',
                'राष्ट्राच्या सेवेत जीवरक्षकांची स्वयंसेवी संस्था. १९९८ पासून मुंबईच्या किनाऱ्यांवर जीव वाचवत आहोत.'
              )}
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/917666766625"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="tel:+917666766625"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:support@jaljivrakshakngo.org"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading font-bold text-lg mb-6 text-gold">
              {t('Quick Links', 'द्रुत दुवे')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {t(link.en, link.mr)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading font-bold text-lg mb-6 text-gold">
              {t('Legal', 'कायदेशीर')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {t(link.en, link.mr)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-heading font-bold text-lg mb-6 text-gold">
              {t('Contact', 'संपर्क')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm">
                  14/A, Navprabhat Chambers, 2nd Floor, Ranade Road, Dadar (W), Mumbai 400028
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+917666766625" className="text-white/70 text-sm hover:text-gold">
                  (+91) 7666 7666 25
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:support@jaljivrakshakngo.org" className="text-white/70 text-sm hover:text-gold break-all">
                  support@jaljivrakshakngo.org
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © 2025 Jaljiv Rakshak NGO. {t('All Rights Reserved.', 'सर्व हक्क राखीव.')}
          </p>
          <p className="text-white/40 text-xs">
            Designed By Site Invention
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gold text-ocean-deep flex items-center justify-center shadow-gold hover:bg-gold-dark transition-colors z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};
