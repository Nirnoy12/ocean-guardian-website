import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X, FileText, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

const REQUIREMENTS = [
  'Any style swimming 50 mtrs less than 2 minutes.',
  'Fit and healthy.',
  'Language not a constraint.',
  'Height not a constraint.',
  'Differently-able athletes also welcome.',
  'Swimming Certificate from any Govt. / Semi Govt. institute will be an added advantage.',
];

const DISQUALIFICATIONS = [
  'Criminal record.',
  'Unruly behaviour.',
  'Person of unsound mind.',
  'Sole discretion of core committee.',
];

const DOCUMENTS = [
  'Aadhar Card',
  'Voter ID',
  'Driving License',
  'Passport',
  'PAN Card (Additional Address Proof required)',
  'Any Govt. Document envisaging both Identity & address proof.',
];

const MEMBERSHIP_RULES = [
  'One-time Membership fee: ₹500 and yearly contribution of ₹100 from each member.',
  'A SELF DECLARATION has to be signed compulsorily to complete Membership formalities.',
  'Any member found taking money for Visarjan duty or extra benefits will have membership terminated.',
  'Membership fees once paid are Non-refundable.',
  'Members are deemed to be aware about NGO\'s Rules & Regulations, Privacy Policy and Disclaimer on the website.',
  'Good swimmers less than 18 years can participate only after authorised permission from Parents/Guardians.',
  'Non-swimmers can participate only as "Swayamsevaks".',
];

// Path to your PDF file in the public folder
const MEMBERSHIP_FORM_URL = '/final-membership-form_compressed-1.pdf';

export default function Membership() {
  const { t } = useLanguage();

  // Function to handle download
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = MEMBERSHIP_FORM_URL;
    link.download = 'Jaljiv-Rakshak-Membership-Form.pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <PageLayout headerImage="/lu4.jpeg">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              {t('Membership', 'सदस्यत्व')}
            </h1>
            <div className="w-24 h-1 bg-gold rounded-full mb-8" />
            <p className="text-muted-foreground text-lg mb-10">
              {t(
                'Join Jaljiv Rakshak Foundation as a volunteer lifeguard. Read the requirements and rules below.',
                'जलजीव रक्षक फाउंडेशनमध्ये स्वयंसेवक जीवरक्षक म्हणून सामील व्हा. आवश्यकता आणि नियम खाली वाचा.'
              )}
            </p>

            {/* Requirements */}
            <div className="mb-10">
              <h2 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                {t('Requirements for Membership', 'सदस्यत्वासाठी आवश्यकता')}
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                {REQUIREMENTS.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-gold">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Disqualifications */}
            <div className="mb-10">
              <h2 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-destructive" />
                {t('Disqualifications', 'अपात्रता')}
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                {DISQUALIFICATIONS.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-destructive">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents */}
            <div className="mb-10">
              <h2 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-gold" />
                {t('Documents Required (Copy of any ONE)', 'आवश्यक कागदपत्रे (कोणत्याही एकाची प्रत)')}
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                {DOCUMENTS.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-gold">•</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mt-4">
                {t('The form (only in coloured format) can be downloaded, filled and should be submitted at our Head Office in person.', 'फॉर्म (फक्त रंगीत स्वरूपात) डाउनलोड करून भरून आमच्या मुख्य कार्यालयात व्यक्तीला सादर करावा.')}
              </p>
            </div>

            {/* Rules summary */}
            <div className="bg-muted/50 rounded-2xl p-6 border border-border mb-10">
              <h2 className="font-heading font-bold text-xl text-foreground mb-4">
                {t('Rules & Regulations (Summary)', 'नियम आणि नियमन (सारांश)')}
              </h2>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {MEMBERSHIP_RULES.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">•</span> {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" size="sm" className="mt-4 rounded-full">
                <Link to="/disclaimer">{t('Full Disclaimer & Rules', 'पूर्ण अस्वीकरण आणि नियम')}</Link>
              </Button>
            </div>

            {/* Download Form + Address */}
            <div className="bg-card rounded-2xl p-8 border border-border mb-10">
              <h2 className="font-heading font-bold text-xl text-foreground mb-4">
                {t('Head Office – Submit Form', 'मुख्य कार्यालय – फॉर्म सादर करा')}
              </h2>
              <p className="text-muted-foreground mb-4">
                14/A, Navprabhat Chambers, 2nd Floor, Ranade Road, Dadar (W), Mumbai, Maharashtra, India-400028
              </p>
              <Button onClick={handleDownload} className="rounded-full font-heading gap-2">
                <Download className="w-4 h-4" />
                {t('Download Membership Form', 'सदस्यत्व फॉर्म डाउनलोड करा')}
              </Button>
            </div>

            <Button asChild variant="outline" className="rounded-full font-heading">
              <Link to="/">{t('Back to Home', 'मुख्यपृष्ठावर परत')}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}