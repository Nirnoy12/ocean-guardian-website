import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

export default function Terms() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto prose prose-lg dark:prose-invert"
          >
            <h1 className="font-heading font-bold text-3xl text-foreground">
              {t('Terms of Service', 'सेवेच्या अटी')}
            </h1>
            <div className="w-24 h-1 bg-gold rounded-full my-6" />
            <div className="text-muted-foreground space-y-4">
              <p>
                {t(
                  'By accessing and using the Jaljiv Rakshak Foundation website, you agree to these terms. The website and its content are provided for informational purposes about our lifeguard and water safety services.',
                  'जलजीव रक्षक फाउंडेशन वेबसाइट ऍक्सेस करून आणि वापरून, तुम्ही या अटींशी सहमत आहात. आमच्या जीवरक्षक आणि जल सुरक्षा सेवांबद्दल माहितीच्या हेतूंसाठी वेबसाइट आणि त्याची सामग्री प्रदान केली जाते.'
                )}
              </p>
              <p>
                {t(
                  'You may not use this site for any unlawful purpose or to harm the Foundation\'s reputation. Donations and volunteer sign-ups are subject to our internal policies. We reserve the right to update these terms at any time.',
                  'तुम्ही कोणत्याही बेकायदेशीर हेतूसाठी किंवा फाउंडेशनची प्रतिष्ठा नुकसान पोहोचवण्यासाठी या साइटचा वापर करू शकत नाही. देणगी आणि स्वयंसेवक नोंदणी आमच्या अंतर्गत धोरणांना अधीन आहेत. आम्ही कोणत्याही वेळी या अटी अद्यतनित करण्याचा अधिकार राखून ठेवतो.'
                )}
              </p>
            </div>
            <Button asChild className="mt-10 rounded-full font-heading">
              <Link to="/">{t('Back to Home', 'मुख्यपृष्ठावर परत')}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
