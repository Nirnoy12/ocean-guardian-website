import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <Button
        onClick={toggleLanguage}
        variant="outline"
        size="sm"
        className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white gap-2"
      >
        <Languages className="w-4 h-4" />
        {language === 'en' ? 'मराठी' : 'English'}
      </Button>
    </motion.div>
  );
};
