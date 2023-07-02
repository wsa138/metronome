import { useState } from 'react';

const BeatsPerMinute = () => {
  const [beats, setBeats] = useState(0);
  const [beatTime, setBeatTime] = useState({ lastTime: 0, seconds: 0 });

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
  };

  return (
    <div>
      <button onClick={handleBeatClick}>BPM</button>
      <div>{beats}</div>
      <div>{beatTime.seconds}</div>
    </div>
  );
};

export default BeatsPerMinute;
