import { useState, useEffect, useRef } from 'react';
import Cover from './components/Cover';
import Introduction from './components/Introduction';
import Quote from './components/Quote';
import BrideSection from './components/BrideSection';
import Countdown from './components/Countdown';
import EventSection from './components/EventSection';
import Gallery from './components/Gallery';
import Cashless from './components/Cashless';
import Wishes from './components/Wishes';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import { weddingData } from './data/weddingData';
import './App.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  // Lock scroll on cover
  useEffect(() => {
    document.body.style.overflow = isOpened ? 'auto' : 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpened]);

  // Audio setup
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.volume = 0.5;
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
    // Try to play music after user interaction
    const audio = audioRef.current;
    if (audio) {
      audio.play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => setIsMusicPlaying(false));
    }
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMusicPlaying) {
      audio.pause();
      setIsMusicPlaying(false);
    } else {
      audio.play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <div className="app-container">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={weddingData.audio} preload="none" />

      {/* Cover – fixed overlay before opening */}
      {!isOpened && (
        <div className="cover-overlay">
          <Cover onOpen={handleOpen} data={weddingData} />
        </div>
      )}

      {/* Invitation content */}
      {isOpened && (
        <div className="invitation-content animate-fade-in">
          <Introduction data={weddingData} />
          <Quote />
          <BrideSection data={weddingData} />
          <Countdown date={weddingData.date} data={weddingData} />
          <EventSection events={weddingData.events} />
          <Gallery images={weddingData.gallery} />
          <Cashless accounts={weddingData.cashless} />
          <Wishes initialWishes={weddingData.initialWishes} />
          <Footer data={weddingData} />

          {/* Floating music button */}
          <MusicPlayer
            isPlaying={isMusicPlaying}
            onToggle={toggleMusic}
            hasAudio={!!weddingData.audio}
          />
        </div>
      )}
    </div>
  );
}

export default App;
