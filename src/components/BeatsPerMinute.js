import { useEffect, useState } from 'react';

const BeatsPerMinute = ({ bpm, setBPM }) => {
  const [beats, setBeats] = useState(0);
  const [beatTime, setBeatTime] = useState({ lastTime: 0, seconds: 0 });

  useEffect(() => {
    calculateBPM(beatTime.seconds, beats);
  }, [beatTime, beats]);

  // TODO: Reset if no click for 5 seconds or add reset button.
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

  const handleReset = () => {
    setBeats(0);
    setBeatTime({ lastTime: 0, seconds: 0 });
    setBPM(0);
  };

  const calculateBPM = (time, beats) => {
    if (time === 0) {
      return;
    }
    setBPM(Math.round(((beats - 1) / time) * 60));
  };

  return (
    <div>
      <button
        className="bg-gradient-to-r from-gray-700 via-gray-200 to-gray-700 py-10 px-9 rounded-full"
        onClick={handleBeatClick}
      >
        BPM
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-4 px-2 rounded-full"
        onClick={handleReset}
      >
        Reset
      </button>
      <div>{bpm}</div>
    </div>
  );
};

export default BeatsPerMinute;
