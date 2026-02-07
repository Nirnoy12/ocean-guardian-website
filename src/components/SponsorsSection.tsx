import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

function SponsorLogo({ src, alt, fallbackLetter }: { src: string; alt: string; fallbackLetter: string }) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <span className="w-full h-full flex items-center justify-center text-2xl font-heading font-bold text-muted-foreground group-hover:text-gold">
        {fallbackLetter}
      </span>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain p-1"
      onError={() => setError(true)}
    />
  );
}

// Add logo files in public/sponsors/ to show sponsor logos
const sponsors = [
  {
    name: 'GSB Sarvajanik Ganeshotsava Samiti, Wadala',
    nameMarathi: 'GSB सार्वजनिक गणेशोत्सव समिती, वडाळा',
    logo: '/sponsors/gsb.png',
  },
  {
    name: 'Shri Siddhivinayak Ganapati Nyas, Prabhadevi',
    nameMarathi: 'श्री सिद्धिविनायक गणपती न्यास, प्रभादेवी',
    logo: '/sponsors/siddhivinayak.png',
  },
  {
    name: 'Brihan Mumbai Mahanagar Palika, Shivaji Park Shakha',
    nameMarathi: 'बृहन्मुंबई महानगरपालिका, शिवाजी पार्क शाखा',
    logo: '/sponsors/bmc.png',
  },
];

export const SponsorsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sponsors" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t('OUR SPONSORS & PARTNERS', 'आमचे प्रायोजक आणि भागीदार')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'We are grateful to our sponsors and partners who support our mission of saving lives.',
              'आमच्या जीव वाचवण्याच्या मिशनला पाठिंबा देणाऱ्या आमच्या प्रायोजक आणि भागीदारांचे आम्ही आभारी आहोत.'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl p-6 min-h-[8rem] flex items-center justify-center border border-border transition-all duration-300 hover:shadow-gold hover:border-gold/50 cursor-pointer">
                <div className="text-center w-full">
                  <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center overflow-hidden bg-muted rounded-full group-hover:bg-gold/10 transition-colors">
                    <SponsorLogo src={sponsor.logo} alt={sponsor.name} fallbackLetter={sponsor.name.charAt(0)} />
                  </div>
                  <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">
                    {t(sponsor.name, sponsor.nameMarathi)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
