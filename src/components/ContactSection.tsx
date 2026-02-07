import { Link } from 'react-router-dom';
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
  Megaphone,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const donationMethods = [
  { icon: CreditCard, label: 'Donate Online', labelMr: 'ऑनलाइन दान करा' },
  { icon: Banknote, label: 'Donate in Cash', labelMr: 'रोख दान करा' },
  { icon: FileText, label: 'Donate in Cheque or Draft', labelMr: 'चेक किंवा ड्राफ्ट दान करा' },
  { icon: Building2, label: 'Donate in NEFT (Bank to Bank)', labelMr: 'NEFT दान' },
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
              asChild
              size="lg"
              className="w-full bg-gold hover:bg-gold-dark text-ocean-deep font-heading font-bold rounded-full pulse-glow"
            >
              <Link to="/donation">{t('Donate Now', 'आता दान करा')}</Link>
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
                      14/A, Navprabhat Chambers, 2nd Floor, Ranade Road, Dadar (W),
                      Mumbai, Maharashtra, India-400028
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-medium text-foreground">{t('Phone', 'फोन')}</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                      {t('Donations, Accounts, Membership:', 'देणगी, खाते, सदस्यत्व:')}{' '}
                      <a href="tel:+917666766625" className="text-primary hover:underline">(+91) 7666 7666 25</a>
                    </p>
                    <p className="text-muted-foreground">
                      {t('General & Administration:', 'सामान्य आणि प्रशासन:')}{' '}
                      <a href="tel:+919819029078" className="text-primary hover:underline">Sanjaykumar (+91) 9819 0290 78</a>,{' '}
                      <a href="tel:+919833859902" className="text-primary hover:underline">Sandeep (+91) 9833 8599 02</a>
                    </p>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" /> WhatsApp:{' '}
                      <a href="https://wa.me/917666766625" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(+91) 7666 7666 25</a>
                    </p>
                    <p className="text-muted-foreground">
                      {t('For Basic Swimming Coaching:', 'मूलभूत पोहणे कोचिंग:')}{' '}
                      <a href="tel:+919324709962" className="text-primary hover:underline">Babu (+91) 9324 7099 62</a>,{' '}
                      <a href="tel:+919930316162" className="text-primary hover:underline">Vijay (+91) 9930 3161 62</a>
                    </p>
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
                  {t('Get your Business Advertised on our Website', 'तुमचा व्यवसाय आमच्या वेबसाइटवर जाहीर करा')}
                </h4>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                {t(
                  'For More Details, Kindly contact Rajkumar Bhatia',
                  'अधिक माहितीसाठी कृपया राजकुमार भाटिया यांच्याशी संपर्क साधा'
                )}
              </p>
              <p className="text-foreground font-medium">
                <a href="tel:+917666766625" className="text-primary hover:underline">
                  (+91) 7666 7666 25
                </a>
              </p>
            </motion.div>

            {/* Feel Free to contact us - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border"
            >
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                {t('Feel Free to contact us', 'आमच्याशी संपर्क साधण्यास मोकळेपणाने')}
              </h3>
              <form
                action="mailto:support@jaljivrakshakngo.org"
                method="get"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <Label htmlFor="contact-name">{t('Name', 'नाव')} *</Label>
                  <Input id="contact-name" name="name" required className="mt-1" placeholder={t('Your name', 'तुमचे नाव')} />
                </div>
                <div>
                  <Label htmlFor="contact-email">{t('Email', 'ईमेल')} *</Label>
                  <Input id="contact-email" name="email" type="email" required className="mt-1" placeholder="email@example.com" />
                </div>
                <div>
                  <Label htmlFor="contact-phone">{t('Phone No.', 'फोन नंबर')} *</Label>
                  <Input id="contact-phone" name="phone" type="tel" required className="mt-1" placeholder="+91" />
                </div>
                <div>
                  <Label>{t('Query type', 'प्रश्नाचा प्रकार')}</Label>
                  <select
                    name="subject"
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="General Enquiry">{t('General Enquiry', 'सामान्य चौकशी')}</option>
                    <option value="For Basic Swimming Coaching">{t('For Basic Swimming Coaching', 'मूलभूत पोहणे कोचिंग')}</option>
                    <option value="Donation">{t('Donation', 'देणगी')}</option>
                    <option value="Membership">{t('Membership', 'सदस्यत्व')}</option>
                  </select>
                </div>
                <Button type="submit" className="w-full rounded-full font-heading">
                  {t('Send', 'पाठवा')}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
