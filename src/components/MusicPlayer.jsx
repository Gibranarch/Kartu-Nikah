import { Music, Pause } from 'lucide-react';
import './MusicPlayer.css';

export default function MusicPlayer({ isPlaying, onToggle, hasAudio }) {
  if (!hasAudio) return null;

  return (
    <button
      id="music-player-btn"
      className={`music-fab ${isPlaying ? 'music-fab--playing' : ''}`}
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause musik' : 'Putar musik'}
      title={isPlaying ? 'Pause musik' : 'Putar musik'}
    >
      {isPlaying ? <Pause size={18} strokeWidth={2} /> : <Music size={18} strokeWidth={2} />}
      {isPlaying && <span className="music-fab__ripple" />}
    </button>
  );
}
