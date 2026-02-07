import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ganpatiImage from '@/assets/ganpati.jpg';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const EventsSection = () => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Ganapati Visarjan 2025 date (Anant Chaturdashi)
  const eventDate = new Date('2025-09-06T00:00:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: t('Days', 'दिवस') },
    { value: timeLeft.hours, label: t('Hours', 'तास') },
    { value: timeLeft.minutes, label: t('Mins', 'मिनिटे') },
    { value: timeLeft.seconds, label: t('Secs', 'सेकंद') },
  ];

  return (
    <section id="events" className="py-20 bg-ocean-gradient relative overflow-hidden">
      {/* Wave Pattern Top */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden rotate-180">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
          <path
            fill="hsl(var(--background))"
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            {t('UPCOMING EVENT', 'आगामी कार्यक्रम')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl overflow-hidden shadow-ocean">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Event Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={ganpatiImage}
                  alt="Ganapati Visarjan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="trust-badge text-xs">
                    {t('Major Event', 'मुख्य कार्यक्रम')}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                  {t('Ganapati Visarjan 2025', 'गणपती विसर्जन २०२५')}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-white/80">
                    <Calendar className="w-5 h-5 text-gold" />
                    <span>{t('September 6-7, 2025', '६-७ सप्टेंबर, २०२५')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin className="w-5 h-5 text-gold" />
                    <span>{t('All Mumbai Beaches', 'सर्व मुंबई समुद्रकिनारे')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Clock className="w-5 h-5 text-gold" />
                    <span>{t('24-Hour Service', '२४ तास सेवा')}</span>
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {timeUnits.map((unit, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded-lg p-3 text-center"
                    >
                      <div className="font-heading font-bold text-2xl md:text-3xl text-gold">
                        {unit.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-xs text-white/70">{unit.label}</div>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-ocean-deep font-heading font-bold rounded-full"
                >
                  <Link to="/contact">{t('Join Us as Volunteer', 'स्वयंसेवक म्हणून सामील व्हा')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave Pattern Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
          <path
            fill="hsl(var(--background))"
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
};
