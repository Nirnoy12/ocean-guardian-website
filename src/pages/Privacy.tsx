import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

export default function Privacy() {
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
              {t('Privacy Policy', 'गोपनीयता धोरण')}
            </h1>
            <div className="w-24 h-1 bg-gold rounded-full my-6" />
            <p className="text-muted-foreground">
              {t('Last updated:', 'अंतिम अद्यतन:')} {new Date().toLocaleDateString('en-IN')}
            </p>
            <div className="text-muted-foreground space-y-4 mt-8">
              <p>
                {t(
                  'Jaljiv Rakshak Foundation ("we") respects your privacy. This policy describes how we collect, use, and protect information when you visit our website or contact us.',
                  'जलजीव रक्षक फाउंडेशन ("आम्ही") तुमची गोपनीयता पाळतो. तुम्ही आमची वेबसाइट भेट दिल्यावर किंवा आमच्याशी संपर्क साधल्यावर आम्ही माहिती कशी गोळा करतो, वापरतो आणि संरक्षित करतो हे या धोरणात वर्णन केले आहे.'
                )}
              </p>
              <h2 className="font-heading font-bold text-xl text-foreground mt-8">
                {t('Information We Collect', 'आम्ही गोळा करत असलेली माहिती')}
              </h2>
              <p>
                {t(
                  'We may collect contact details (name, email, phone) when you reach out for donations, volunteering, or inquiries. We do not sell or share your data with third parties for marketing.',
                  'देणगी, स्वयंसेवा किंवा चौकशीसाठी संपर्क केल्यावर आम्ही संपर्क तपशील (नाव, ईमेल, फोन) गोळा करू शकतो. आम्ही तुमचा डेटा मार्केटिंगसाठी तृतीय पक्षांना विकत नाही किंवा सामायिक करत नाही.'
                )}
              </p>
              <h2 className="font-heading font-bold text-xl text-foreground mt-8">
                {t('Contact', 'संपर्क')}
              </h2>
              <p>
                {t(
                  'For privacy-related questions, contact us at support@jaljivrakshakngo.org or (+91) 7666 7666 25.',
                  'गोपनीयतेशी संबंधित प्रश्नांसाठी support@jaljivrakshakngo.org किंवा (+91) 7666 7666 25 वर संपर्क करा.'
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
