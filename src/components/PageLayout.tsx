import { ReactNode } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { TopVideoSection } from '@/components/TopVideoSection';
import { Footer } from '@/components/Footer';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <TopVideoSection />
        <main>{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
