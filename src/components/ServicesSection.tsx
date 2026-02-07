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
    icon: LifeBuoy,
    title: 'Lifeguard Services',
    titleMr: 'जीवरक्षक सेवा',
    description: 'Professional lifeguard services during festivals and events',
    descriptionMr: 'सणांदरम्यान व्यावसायिक जीवरक्षक सेवा',
  },
  {
    icon: Waves,
    title: 'Water Rescue',
    titleMr: 'जल बचाव',
    description: '24/7 emergency water rescue operations',
    descriptionMr: '२४/७ आपत्कालीन जल बचाव कार्य',
  },
  {
    icon: Shield,
    title: 'Safety Training',
    titleMr: 'सुरक्षा प्रशिक्षण',
    description: 'CPR and first aid training for volunteers',
    descriptionMr: 'स्वयंसेवकांसाठी CPR आणि प्रथमोपचार प्रशिक्षण',
  },
  {
    icon: Users,
    title: 'Community Awareness',
    titleMr: 'समुदाय जागरूकता',
    description: 'Water safety awareness programs',
    descriptionMr: 'जल सुरक्षा जागरूकता कार्यक्रम',
  },
  {
    icon: Heart,
    title: 'Medical Aid',
    titleMr: 'वैद्यकीय मदत',
    description: 'First aid and emergency medical assistance',
    descriptionMr: 'प्रथमोपचार आणि आपत्कालीन वैद्यकीय सहाय्य',
  },
  {
    icon: Award,
    title: 'Volunteer Training',
    titleMr: 'स्वयंसेवक प्रशिक्षण',
    description: 'Professional training for new lifeguards',
    descriptionMr: 'नवीन जीवरक्षकांसाठी व्यावसायिक प्रशिक्षण',
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
