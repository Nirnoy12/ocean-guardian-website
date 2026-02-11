import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Volume2, VolumeX } from 'lucide-react'; // Added Volume icons
import introVideo from '@/assets/intro.mp4'; 

interface IntroVideoProps {
  onEnter: () => void;
}

export const IntroVideo = ({ onEnter }: IntroVideoProps) => {
  const [showSkip, setShowSkip] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  
  // CHANGED: Manage mute state
  const [isMuted, setIsMuted] = useState(true); 

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setShowSkip(true);
    }
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleEnter = () => {
    localStorage.setItem('hasVisited', 'true');
    onEnter();
  };

  // CHANGED: Function to toggle sound
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        src={introVideo}
        className="w-full h-full object-cover"
        autoPlay
        muted={true} // Starts muted to satisfy browser autoplay policy
        playsInline
        onEnded={handleVideoEnd}
      />

      {/* OVERLAY CONTENT */}
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
        
        {/* TOP BAR: Unmute (Left) & Skip (Right) */}
        <div className="flex justify-between items-start w-full">
          
          {/* 1. NEW UNMUTE BUTTON */}
          <button
            onClick={toggleMute}
            className="flex items-center gap-2 px-3 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-black/60 transition-all"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-5 h-5" />
                <span className="text-sm font-medium">Unmute</span>
              </>
            ) : (
              <>
                <Volume2 className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium text-gold">Sound On</span>
              </>
            )}
          </button>

          {/* 2. SKIP BUTTON (Only returning users) */}
          {showSkip ? (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handleEnter}
              className="group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
            >
              Skip Intro <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          ) : <div />} {/* Empty div to keep layout balanced if skip is hidden */}
        </div>

        {/* CENTER/BOTTOM: Visit Website Button */}
        <AnimatePresence>
          {videoEnded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <button
                onClick={handleEnter}
                className="pointer-events-auto bg-gold hover:bg-gold-dark text-ocean-deep font-heading font-bold text-2xl px-12 py-6 rounded-full shadow-2xl pulse-glow flex items-center gap-3 transition-transform hover:scale-105"
              >
                Visit Website <Play className="w-6 h-6 fill-current" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};