import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Banknote, 
  FileText, 
  Building2, 
  Gift,
  MapPin,
  Phone,
  Mail,
  FileCheck,
  Megaphone
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const donationMethods = [
  { icon: CreditCard, label: 'Donate Online', labelMr: 'ऑनलाइन दान करा' },
  { icon: Banknote, label: 'Cash', labelMr: 'रोख' },
  { icon: FileText, label: 'Cheque/Draft', labelMr: 'चेक/ड्राफ्ट' },
  { icon: Building2, label: 'NEFT', labelMr: 'NEFT' },
  { icon: Gift, label: 'Non-Financial Support', labelMr: 'वस्तू मदत' },
];

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="donation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t('SUPPORT OUR MISSION', 'आमच्या मिशनला सहाय्य करा')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
              {t('HOW YOU CAN DONATE', 'तुम्ही कसे दान करू शकता')}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {donationMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-muted rounded-xl p-4 text-center transition-all duration-300 hover:bg-primary hover:shadow-ocean">
                    <method.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:text-primary-foreground transition-colors" />
                    <p className="text-sm font-medium text-foreground group-hover:text-primary-foreground transition-colors">
                      {t(method.label, method.labelMr)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full bg-gold hover:bg-gold-dark text-ocean-deep font-heading font-bold rounded-full pulse-glow"
            >
              {t('Donate Now', 'आता दान करा')}
            </Button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div id="contact" className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
                {t('CONTACT US', 'आमच्याशी संपर्क साधा')}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {t('Office Address', 'कार्यालयाचा पत्ता')}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      14/A Navprabhat Chambers, Ranade Rd, Near Shivaji Park,
                      Dadar West, Mumbai, Maharashtra 400028
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {t('Phone', 'फोन')}
                    </p>
                    <a href="tel:+917666766625" className="text-primary hover:underline">
                      (+91) 7666 7666 25
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {t('Email', 'ईमेल')}
                    </p>
                    <a href="mailto:support@jaljivrakshakngo.org" className="text-primary hover:underline">
                      support@jaljivrakshakngo.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      PAN
                    </p>
                    <p className="text-muted-foreground font-mono">
                      AADTJ9519N
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ad Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-gold/20 to-coral/20 rounded-xl p-6 border border-gold/30"
            >
              <div className="flex items-center gap-3 mb-2">
                <Megaphone className="w-6 h-6 text-gold" />
                <h4 className="font-heading font-bold text-foreground">
                  {t('Advertise Your Business', 'तुमचा व्यवसाय जाहीर करा')}
                </h4>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                {t(
                  'Get your business advertised and support a noble cause.',
                  'तुमचा व्यवसाय जाहीर करा आणि एका उदात्त कार्याला पाठिंबा द्या.'
                )}
              </p>
              <p className="text-foreground font-medium">
                {t('Contact:', 'संपर्क:')} Rajkumar Bhatia @ 
                <a href="tel:+917666766625" className="text-primary hover:underline ml-1">
                  (+91) 7666 7666 25
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
