import beatAudio from '../audio/BPM.mp3';
import { useRef, useState } from 'react';
import '../styling/audio.css';

const Audio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // When Play is clicked, audio plays on loop
  // TODO: It needs to play once per beat per minute.
  const handlePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isPlaying) {
      audioRef.current.pause();
      console.log('Paused');
    } else {
      audioRef.current.play();
      console.log('Playing');
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio
        ref={audioRef}
        controls
        play="true"
        src={beatAudio}
        type="audio/mpeg"
        loop
      ></audio>
      <button onClick={handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default Audio;
