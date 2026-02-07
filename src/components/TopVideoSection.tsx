import { useState } from 'react';
import beachImage from '@/assets/beach.jpg';

// Uses the same video environment variable as the Hero section
const HERO_VIDEO_URL = import.meta.env.VITE_HERO_VIDEO_URL ?? '/hero_background.mp4';

/**
 * Video banner shown at the top of every page (shared header).
 */
export function TopVideoSection() {
  const [videoError, setVideoError] = useState(false);
  const useVideo = HERO_VIDEO_URL && !videoError;

  return (
    <section 
      // CHANGED: Added 'mt-20' to push this section below the fixed navbar
      // CHANGED: Added 'shadow-md' for a subtle separation from the content below
      className="relative w-full h-[40vh] min-h-[640px] flex-shrink-0 mt-20 shadow-md"
    >
      {useVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={beachImage}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
          <img src={beachImage} alt="Header Background" className="absolute inset-0 w-full h-full object-cover" />
        </video>
      ) : (
        <img
          src={beachImage}
          alt="Header Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      
      {/* CHANGED: Switched to 'bg-black/30' (30% opacity) so the video is clearly visible */}
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
}