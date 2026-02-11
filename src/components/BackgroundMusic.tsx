import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import musicFile from '@/assets/background_music.mp3';

interface BackgroundMusicProps {
  playTrigger: boolean; // Signal to start playing
}

export const BackgroundMusic = ({ playTrigger }: BackgroundMusicProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Watch for the trigger from App.tsx
  useEffect(() => {
    if (playTrigger && audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3; // Low volume
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Audio playback failed:", err));
      }
    }
  }, [playTrigger]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <audio ref={audioRef} src={musicFile} loop />
      
      {/* Show button only after site is entered */}
      {playTrigger && (
        <button
          onClick={togglePlay}
          className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center border-2 ${
            isPlaying 
              ? 'bg-gold text-ocean-deep border-white animate-pulse-slow' 
              : 'bg-black/50 backdrop-blur-md text-white border-white/30 hover:bg-black/70'
          }`}
          title={isPlaying ? "Mute Music" : "Play Music"}
        >
          {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
      )}
    </div>
  );
};