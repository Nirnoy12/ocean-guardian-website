import { ReactNode } from 'react';
// Removed LanguageProvider import as it's now in App.tsx
import { Navigation } from '@/components/Navigation';
import { TopVideoSection } from '@/components/TopVideoSection';
import { Footer } from '@/components/Footer';

// 1. Define the props to accept 'headerImage'
interface PageLayoutProps {
  children: ReactNode;
  headerImage?: string; // Optional string for the image URL
}

export function PageLayout({ children, headerImage }: PageLayoutProps) {
  return (
    // CHANGED: Removed <LanguageProvider> wrapper
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* 2. Pass the 'headerImage' prop to the TopVideoSection */}
      <TopVideoSection image={headerImage} />
      
      <main>{children}</main>
      <Footer />
    </div>
  );
}