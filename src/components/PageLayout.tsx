import { ReactNode } from 'react';
// Removed LanguageProvider import as it's now in App.tsx
import { Navigation } from '@/components/Navigation';
import { TopVideoSection } from '@/components/TopVideoSection';
import { Footer } from '@/components/Footer';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    // CHANGED: Removed <LanguageProvider> wrapper
    <div className="min-h-screen bg-background">
      <Navigation />
      <TopVideoSection />
      <main>{children}</main>
      <Footer />
    </div>
  );
}