import { motion } from 'framer-motion';
import { 
  Waves, 
  Users, 
  LifeBuoy, 
  Shield, 
  Heart, 
  Award 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import toppoImage from '@/assets/toppo.jpg';

const services = [
  {
    icon: Waves,
    title: 'Free basic swimming lessons',
    titleMr: 'मोफत मूलभूत पोहणे धडे',
    description: 'Only at our designated pools',
    descriptionMr: 'फक्त आमच्या नियुक्त पूलमध्ये',
  },
  {
    icon: Award,
    title: 'Advanced coaching',
    titleMr: 'प्रगत कोचिंग',
    description: 'Preparation for open sea swimming competition',
    descriptionMr: 'खुल्या समुद्र पोहणे स्पर्धेसाठी तयारी',
  },
  {
    icon: Users,
    title: 'Summer camps at pools',
    titleMr: 'पूलमध्ये उन्हाळी शिबिरे',
    description: 'Organising summer camps at pools',
    descriptionMr: 'पूलमध्ये उन्हाळी शिबिरे आयोजित करणे',
  },
  {
    icon: LifeBuoy,
    title: 'Scuba Diving / Padi Diving / Water Aerobics',
    titleMr: 'स्कूबा डायविंग / पॅडी डायविंग / वॉटर एरोबिक्स',
    description: 'Lessons in diving and water aerobics',
    descriptionMr: 'डायविंग आणि वॉटर एरोबिक्सचे धडे',
  },
  {
    icon: Shield,
    title: 'Lifeguards for pools / clubs / Housing Societies / Beaches',
    titleMr: 'पूल / क्लब / हाऊसिंग सोसायटी / समुद्रकिनाऱ्यांसाठी जीवरक्षक',
    description: 'Providing lifeguards for pools, clubs, Housing Societies, beaches, shores',
    descriptionMr: 'पूल, क्लब, सोसायटी, समुद्रकिनारे यांसाठी जीवरक्षक',
  },
  {
    icon: Heart,
    title: 'Lifeguard training & Disaster Management',
    titleMr: 'जीवरक्षक प्रशिक्षण आणि आपत्ती व्यवस्थापन',
    description: 'Training in CPR, lifesaving equipment, disaster management',
    descriptionMr: 'CPR, जीव वाचवणारे उपकरण, आपत्ती व्यवस्थापन प्रशिक्षण',
  },
];

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={toppoImage}
          alt="Beach background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t('OUR SERVICES', 'आमच्या सेवा')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'We provide comprehensive water safety services to ensure the safety of all citizens during festivals and beyond.',
              'सणांदरम्यान आणि त्यापुढे सर्व नागरिकांची सुरक्षितता सुनिश्चित करण्यासाठी आम्ही सर्वसमावेशक जल सुरक्षा सेवा प्रदान करतो.'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full border border-border transition-all duration-300 hover:shadow-ocean hover:border-primary/30 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {t(service.title, service.titleMr)}
                </h3>
                <p className="text-muted-foreground">
                  {t(service.description, service.descriptionMr)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
