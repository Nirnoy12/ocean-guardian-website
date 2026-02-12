import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

// Page Imports
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Donation from "@/pages/Donation";
import Membership from "@/pages/Membership";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Disclaimer from "@/pages/Disclaimer";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      // 1. INITIAL: New page starts slightly small and invisible (in the back)
      initial={{ 
        scale: 0.9,
        opacity: 0,
        zIndex: 0 // Starts behind
      }} 
      
      // 2. ANIMATE: New page zooms in to full size
      animate={{ 
        scale: 1,
        opacity: 1,
        x: 0,
        zIndex: 1, // Moves to front
        transition: { 
          duration: 0.5, 
          ease: "easeOut",
          delay: 0.1 // Slight delay to let the old page start moving first
        }
      }} 
      
      // 3. EXIT: Old page slides completely to the LEFT
      exit={{ 
        x: "-100%", // Slide off screen
        opacity: 1, // Stay visible while sliding
        zIndex: 10, // Ensure it slides OVER everything else
        transition: { 
          duration: 0.5, 
          ease: "easeInOut" 
        }
      }}
      
      // ABSOLUTE POSITIONING IS CRITICAL FOR OVERLAPPING
      className="absolute top-0 left-0 w-full min-h-screen bg-background origin-center overflow-hidden" 
    >
      {children}
    </motion.div>
  );
};

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <Routes location={location} key={location.pathname}>
        
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/donation" element={<PageTransition><Donation /></PageTransition>} />
        <Route path="/membership" element={<PageTransition><Membership /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/disclaimer" element={<PageTransition><Disclaimer /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        
      </Routes>
    </AnimatePresence>
  );
};