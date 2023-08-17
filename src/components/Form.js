import { useEffect, useState } from 'react';
import { ref, set, child, push, update } from 'firebase/database';

const Form = ({ bpm, userUID, db, setBPM }) => {
  const [newBPM, setNewBPM] = useState(0);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setNewBPM(bpm);
  }, [bpm]);

  // Add new BPM to database if a user is signed in.
  const addTrack = (e) => {
    e.preventDefault();
    if (userUID === null) {
      console.log('No user found');
      return;
    }
    // Find matching userUID and add BPM value to database
    console.log('Adding new track to database');
    const newTrackKey = push(child(ref(db), 'Users')).key;
    const updates = {};
    updates['/Users/' + userUID + '/' + newTrackKey] = {
      trackName: title,
      tempo: newBPM,
    };
    resetForm();
    setBPM(0);
    return update(ref(db), updates);
  };

  const handleManualBPM = (e) => {
    setNewBPM(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const resetForm = () => {
    setNewBPM(0);
    setTitle('');
  };

  return (
    <div>
      <form>
        <div className="flex flex-col m-1">
          <label className="text-lg" htmlFor="title">
            Title:
          </label>
          <input
            className="bg-gray-100 text-black w-52 m-1 pl-1 text-xl"
            value={title}
            onChange={handleTitleChange}
            type="text"
            name="title"
            maxLength={24}
          ></input>
        </div>

        <div className="flex flex-col m-1">
          <label className="text-lg" htmlFor="beatsPerMinute">
            Beats Per Minute:
          </label>
          <input
            className="bg-gray-100 text-black w-52 m-1 pl-1 text-xl"
            value={newBPM}
            onChange={handleManualBPM}
            type="number"
            name="beatsPerMinute"
          ></input>
        </div>

        <button
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white text-xl  font-bold py-1 px-5 rounded-full transition-all transform active:scale-95 duration-100"
          onClick={addTrack}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
