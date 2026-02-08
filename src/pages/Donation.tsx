import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CreditCard,
  Banknote,
  FileText,
  Building2,
  Gift,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

const donationMethods = [
  { icon: CreditCard, label: 'Donate Online', labelMr: 'ऑनलाइन दान करा' },
  { icon: Banknote, label: 'Donate in Cash', labelMr: 'रोख दान करा' },
  { icon: FileText, label: 'Donate in Cheque or Draft', labelMr: 'चेक किंवा ड्राफ्ट दान करा' },
  { icon: Building2, label: 'Donate in NEFT (Bank to Bank)', labelMr: 'NEFT दान (बँक ते बँक)' },
  { icon: Gift, label: 'Non-Financial Support', labelMr: 'वस्तू मदत' },
];

const OFFICE_ADDRESS = '14/A, Navprabhat Chambers, 2nd Floor, Ranade Road, Dadar (W), Mumbai, Maharashtra, India-400028';

export default function Donation() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              {t('Support Our Mission', 'आमच्या मिशनला सहाय्य करा')}
            </h1>
            <div className="w-24 h-1 bg-gold rounded-full mb-8" />
            <p className="text-muted-foreground text-lg mb-10">
              {t(
                'Your contribution helps us provide free lifeguard services and save lives at Mumbai beaches. Every donation counts.',
                'तुमच्या योगदानामुळे आम्ही मुंबईच्या समुद्रकिनाऱ्यांवर मोफत जीवरक्षक सेवा आणि जीव वाचवणे शक्य होते. प्रत्येक देणगी मोलाची आहे.'
              )}
            </p>

            <h2 className="font-heading font-bold text-xl text-foreground mb-4">
              {t('How You Can Donate', 'तुम्ही कसे दान करू शकता')}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {donationMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border flex flex-col items-center text-center"
                >
                  <method.icon className="w-10 h-10 text-primary mb-2" />
                  <p className="font-medium text-foreground text-sm">{t(method.label, method.labelMr)}</p>
                </div>
              ))}
            </div>

            {/* Online / Bank Details */}
            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* Left column */}
      <div>
        <h2 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-gold" />
          For Online Donation – Account Details
        </h2>

        <div className="space-y-2 text-muted-foreground font-mono text-sm">
          <p><span className="text-foreground font-medium">Bank Name:</span> Federal Bank</p>
          <p><span className="text-foreground font-medium">Branch:</span> Dadar West Branch</p>
          <p><span className="text-foreground font-medium">Account No:</span> 15050200010971</p>
          <p><span className="text-foreground font-medium">IFSC Code:</span> FDRL0001505</p>
          <p><span className="text-foreground font-medium">PAN:</span> AADTJ9519N</p>
          <p><span className="text-foreground font-medium">UPI ID:</span> jaljivrakshak13@fbi</p>
        </div>

        <Button size="lg" className="mt-6 bg-gold hover:bg-gold-dark text-ocean-deep font-bold rounded-full">
          Donate Now
        </Button>
      </div>

      {/* Right column */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/donation.png"
            alt="UPI QR Code"
            className="w-100 h-80 object-contain rounded-xl 
             border-2 border-sky-400/60 
             shadow-[0_0_20px_rgba(56,189,248,0.4)]"
          />
        </div>

      </div>
    </div>

            

            {/* Cheque / DD */}
            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <h2 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-gold" />
                {t('Donation by Cheque & Demand Draft', 'चेक आणि डिमांड ड्राफ्ट द्वारे देणगी')}
              </h2>
              <p className="text-muted-foreground flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                {OFFICE_ADDRESS}
              </p>
            </div>

            {/* Non-Financial Support */}
            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <h2 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5 text-gold" />
                {t('For Non-Financial Support Contact', 'वस्तू मदत / नॉन-फायनान्शियल सहाय्य संपर्क')}
              </h2>
              <p className="text-muted-foreground">
                Rajkumar Srichand Bhatia:{' '}
                <a href="tel:+917700011188" className="text-primary hover:underline font-medium">(+91) 7700 0111 88</a>
              </p>
            </div>

            {/* Donation Rules */}
            <div className="bg-muted/50 rounded-2xl p-6 border border-border mb-10 text-muted-foreground text-sm space-y-2">
              <p>• {t('Donations are acceptable in kind. Donors wishing to donate lifesaving equipment (lifejackets, jetty, speedboats, rings, floats, etc.) can coordinate with core committee members.', 'वस्तू मध्ये देणगी स्वीकारली जाते. जीव वाचवणारे उपकरण दान करू इच्छिणाऱ्यांना कोर कमिटी सदस्यांशी संपर्क साधता येईल.')}</p>
              <p>• {t('Food packets, snacks, T-shirts for volunteers during duty days are welcome. Please contact in advance for quantity.', 'दिवसाच्या दिवसात स्वयंसेवकांसाठी अन्न पॅकेट, स्नॅक्स, टी-शर्ट स्वागतार्ह. प्रमाणासाठी आधी संपर्क करा.')}</p>
              <p>• {t('Donations are not acceptable in cash exceeding ₹20,000. Donations only through A/c Payee cheque, Demand Draft or electronic mode.', '₹20,000 पेक्षा जास्त रोख देणगी स्वीकारली जात नाही. फक्त A/c पेई चेक, डिमांड ड्राफ्ट किंवा इलेक्ट्रॉनिक मोडद्वारे.')}</p>
              <p>• {t('Receipts issued only after donations are credited to NGO account. Financial charges, if any, borne by donor.', 'देणगी NGO खात्यात जमा झाल्यानंतर पावती दिली जाते. बँक शुल्क दात्याने भरावे.')}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-ocean-deep font-heading font-bold rounded-full">
                <a href="tel:+917666766625">{t('Call for Donations', 'देणगीसाठी कॉल करा')}</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full font-heading">
                <Link to="/">{t('Back to Home', 'मुख्यपृष्ठावर परत')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
