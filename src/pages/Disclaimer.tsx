import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

const disclaimerEn = `JALJIV RAKSHAK FOUNDATION (Regd.), Mumbai is an NGO comprising of swimmers/lifeguards/volunteers, etc. who have been co-ordinating with Traffic Control Branch (R.T.O.) MUMBAI for more than 25 years. Ours is a Non-political, Non-religious voluntary organisation with about 400 volunteers. We initiate Non-profit assistance and provide voluntary service "FREE OF COST" to Brihan Mumbai Mahanagar Palika (BMC) and assist Mumbai Police in traffic management, crowd control, drowning incidents etc.

During several religious occasions the beaches and shores around Maharashtra are heavily crowded, traffic is chaotic, followed by unruly behaviour of mobs. Hence, it becomes essential for relevant authorities to seek our help in maintaining law and order and drowning incidents in particular.

During festivities, where crowds gather for idol immersions at various beach points and shores our lifeguards are stationed to take care of children and elderly who venture into the sea for sheer joy of it, ignoring the currents which might sweep them off.

Ganpati festival being celebrated in State of Maharashtra with great fanfare, is associated with festivities for 10 days. The 2nd, 5th, 7th & final day known as Anant Chaturdashi, crowds around beaches and shores are chaotic, for idol immersion and it is on these days our presence on shores is necessitated.

Our volunteers (Lifeguards) are very devoted and put in hard work of 12 to 16 hours during immersion days. The service is completely free. All help is provided by our volunteers as and when asked for. In fact, it is our way of serving the Elephant God.

We also provide lifeguards at Housing Societies, Private Pools, Club Houses, etc. We impart basic swimming lessons free of cost at our designated pools. A detailed list of services can be browsed under the "SERVICES" section of our website.`;

export default function Disclaimer() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-heading font-bold text-3xl text-foreground">
              {t('Disclaimer', 'अस्वीकरण')}
            </h1>
            <div className="w-24 h-1 bg-gold rounded-full my-6" />
            <div className="text-muted-foreground prose prose-lg max-w-none">
              <p className="leading-relaxed whitespace-pre-line">{disclaimerEn}</p>
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
