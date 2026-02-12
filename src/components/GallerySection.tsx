import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Gallery images grouped by category
const GALLERY_GROUPS = [
  {
    id: 'Latest',
    title: 'Latest Updates',
    titleMarathi: 'नवीन अद्यतन',
    count: 7,
    images: [
      'lu1.jpeg',
      'lu2.jpeg',
      'lu3.jpeg',
      'lu4.jpeg',
      'lu5.jpeg',
      'lu6.jpeg',
      'lu7.jpeg'
    ]
  },
  {
    id: 'events',
    title: 'Sunk Rock To Gateway Of India, 2KM',
    titleMarathi: 'सनक रॉक ते गेटवे ऑफ इंडिया, २ किमी',
    count: 7,
    images: [
      'img1-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
      'n1.webp',
      'img2-2-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
      'img3-2-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
      'img4-2-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
      'img5-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
      'img7-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
    ]
  },
  {
    id: 'awards',
    title: 'Open Sea Swimming Competition Winners',
    titleMarathi: 'खुल्या समुद्र पोहणे स्पर्धा विजेते',
    count: 10,
    images: [
      'volunteers.webp',
      'img5-1-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
      'img7-1-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
      'img8-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
      'img6-1-qsotey5zrkdvyj505g05x49gpn4tqb6pzqeppmlns0.webp',
      'p1.webp',
      'p2.webp',
      'p3.webp',
      'p4.webp',
      'p5.webp'
      
    ]
  },
  {
    id: 'training',
    title: 'Training',
    titleMarathi: 'प्रशिक्षण',
    count: 12,
    images: [
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
      't12.webp'
    ]
  },
  {
    id: 'Prize Distribution',
    title: 'Prize Distribution',
    titleMarathi: 'प्राइज वितरण',
    count: 5,
    images: [
      'awards1.webp',
      'awards2.webp', 
      'awards3.webp',
      'awards4.webp',
      'awards5.webp'
    ]
  }
];

// Flatten images with their group information for lightbox navigation
const ALL_IMAGES = GALLERY_GROUPS.flatMap(group => 
  group.images.map(image => ({
    src: image,
    groupId: group.id,
    groupTitle: group.title,
    groupTitleMarathi: group.titleMarathi
  }))
);

export const GallerySection = () => {
  const { t, language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentGroupImages, setCurrentGroupImages] = useState<typeof ALL_IMAGES>([]);
  
  // Store slide index for each group separately
  const [slideIndices, setSlideIndices] = useState<Record<string, number>>({});

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

  const nextSlide = (groupId: string, totalImages: number) => {
    setSlideIndices(prev => ({
      ...prev,
      [groupId]: ((prev[groupId] || 0) + 1) % totalImages
    }));
  };

  const prevSlide = (groupId: string, totalImages: number) => {
    setSlideIndices(prev => ({
      ...prev,
      [groupId]: ((prev[groupId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const openGroupLightbox = (groupId: string, slideIndex: number) => {
    const groupImages = ALL_IMAGES.filter(img => img.groupId === groupId);
    setCurrentGroupImages(groupImages);
    setSelectedIndex(slideIndex);
  };

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

        {/* Gallery Groups - Side by Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_GROUPS.map((group) => {
            const currentSlideIndex = slideIndices[group.id] || 0;
            
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-xl overflow-hidden flex flex-col"
              >
                {/* Group Header */}
                <div className="p-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ImageIcon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading font-medium text-sm text-foreground truncate">
                        {language === 'en' ? group.title : group.titleMarathi}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {group.count} {t('Photos', 'फोटो')}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Image Slider with Text Overlay */}
                <div className="relative flex-1">
                  <button
                    onClick={() => openGroupLightbox(group.id, currentSlideIndex)}
                    className="w-full relative aspect-[4/3] group focus:outline-none"
                  >
                    <img
                      src={group.images[currentSlideIndex]}
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    {/* Text Overlay - Bottom Left */}
                    <div className="absolute bottom-0 left-0 p-3 text-left">
                      <h4 className="text-white text-sm md:text-base font-heading font-bold mb-0.5 line-clamp-1">
                        {language === 'en' ? group.title : group.titleMarathi}
                      </h4>
                      <p className="text-white/80 text-xs">
                        {group.count} {t('Photos', 'फोटो')}
                      </p>
                    </div>
                    
                    {/* Slide Counter - Top Right */}
                    <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-0.5 rounded-full text-[10px] font-medium">
                      {currentSlideIndex + 1}/{group.count}
                    </div>
                  </button>
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide(group.id, group.images.length);
                    }}
                    className="absolute left-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors focus:outline-none"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide(group.id, group.images.length);
                    }}
                    className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors focus:outline-none"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            >
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus:outline-none"
                aria-label={t('Close', 'बंद करा')}
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((selectedIndex - 1 + currentGroupImages.length) % currentGroupImages.length);
                }}
                className="absolute left-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus:outline-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((selectedIndex + 1) % currentGroupImages.length);
                }}
                className="absolute right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus:outline-none"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <motion.img
                key={currentGroupImages[selectedIndex]?.src}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                src={currentGroupImages[selectedIndex]?.src}
                alt=""
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs">
                {selectedIndex + 1}/{currentGroupImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};