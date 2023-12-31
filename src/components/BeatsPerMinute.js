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
    <div className="">
      <div className="flex justify-center text-4xl font-semibold">
        <div>{bpm}</div>
      </div>
      <div className=" flex flex-col justify-around items-center">
        <button
          className="mt-2 text-black bg-gradient-to-br from-gray-500 via-gray-200 to-gray-700 py-12 px-5 rounded-full text-5xl font-bold shadow-xl hover:shadow-lg transition-all transform active:scale-95 duration-100"
          onClick={handleBeatClick}
        >
          BPM
        </button>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white text-xl  font-bold py-1 px-7 rounded-full transition-all transform active:scale-95 duration-100"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default BeatsPerMinute;
