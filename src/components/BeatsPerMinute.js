import { useState } from 'react';

const BeatsPerMinute = () => {
  const [beats, setBeats] = useState(0);
  const [beatTime, setBeatTime] = useState({ lastTime: 0, seconds: 0 });
  const [bpm, setBPM] = useState(0);

  const handleBeatClick = () => {
    setBeats((oldBeats) => oldBeats + 1);
    setBeatTime((prevBeatTime) => {
      if (prevBeatTime.lastTime === 0) {
        return { lastTime: Date.now(), seconds: 0 };
      }
      return {
        lastTime: prevBeatTime.lastTime,
        seconds: (Date.now() - prevBeatTime.lastTime) / 1000,
      };
    });
    calculateBPM(beatTime.seconds, beats);
  };

  const calculateBPM = (time, beats) => {
    if (time === 0) {
      return;
    }
    setBPM(((beats - 1) / time) * 60);
  };

  return (
    <div>
      <button onClick={handleBeatClick}>BPM</button>
      <div>{bpm}</div>
    </div>
  );
};

export default BeatsPerMinute;
