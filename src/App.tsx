import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Components
import ScrollToTop from "@/components/ScrollToTop";
import { IntroVideo } from "@/components/IntroVideo";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import { AnimatedRoutes } from "@/components/AnimatedRoutes"; // <--- Import the new component

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [musicStarted, setMusicStarted] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setMusicStarted(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />

          {/* 1. Intro Video */}
          {showIntro && <IntroVideo onEnter={handleIntroComplete} />}

          {/* 2. Background Music */}
          <BackgroundMusic playTrigger={musicStarted} />

          {/* 3. Main Website */}
          {!showIntro && (
            <BrowserRouter>
              <ScrollToTop />
              
              {/* REPLACED ALL <Routes>... WITH THIS SINGLE LINE: */}
              <AnimatedRoutes />
              
            </BrowserRouter>
          )}
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;