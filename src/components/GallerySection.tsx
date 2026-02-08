import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Gallery images (from public/). Reorder or replace paths to match your intended gallery.
const GALLERY_IMAGES = [
  'img1-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
  'volunteers.webp',
  'img2-2-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
  'img3-2-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
  'img4-2-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
  'img5-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
  'img7-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
  'img5-1-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
  'img7-1-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
  'img8-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
  'img6-1-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
  'a5.webp',
  'a6.webp',
  'a7.webp',
  'a8.webp',
  'a9.webp',
  't1.webp',
  't2.webp',
  't3.webp',
  't4.webp',
  't5.webp',
  't6.webp',
  't7.webp',
  't8.webp',
  't9.webp',
  't10.webp',
  't11.webp',
  't12.webp',
  'awards1.webp',
  'awards2.webp', 
  'awards3.webp',
  'awards4.webp',
  'awards5.webp'
];

export const GallerySection = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedIndex, closeLightbox]);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t('GALLERY', 'गॅलरी')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Moments from our lifeguard operations and community events.',
              'आमच्या जीवरक्षक कार्य आणि समुदाय कार्यक्रमातील क्षण.'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((src, index) => (
            <motion.button
              key={src}
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedIndex(index)}
              className="aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-card hover:shadow-ocean hover:border-primary/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <img
                src={src}
                alt={`${t('Gallery', 'गॅलरी')} ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            >
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label={t('Close', 'बंद करा')}
              >
                <X className="w-6 h-6" />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={GALLERY_IMAGES[selectedIndex]}
                alt={`${t('Gallery', 'गॅलरी')} ${selectedIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
