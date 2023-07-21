import beatAudio from '../audio/BPM.mp3';

const Audio = () => {
  const handlePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Playing');
  };

  return (
    <div>
      <audio controls play="true" src={beatAudio} type="audio/mpeg"></audio>
      <button onClick={handlePlay}>Play</button>
    </div>
  );
};

export default Audio;
