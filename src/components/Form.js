import { useEffect, useState } from 'react';
import { ref, set } from 'firebase/database';

const Form = ({ bpm, userUID, db }) => {
  const [newBPM, setNewBPM] = useState(0);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setNewBPM(bpm);
  }, [bpm]);

  // Add new BPM to database if a user is signed in.
  const addBPM = (e) => {
    e.preventDefault();
    if (userUID === null) {
      console.log('No user found');
      return;
    }
    // Find matching userUID and add BPM value to database
    console.log('Updating user database');
    set(ref(db, 'Users/' + userUID), {
      title: newBPM,
    });
    resetForm();
  };

  const handleManualBPM = (e) => {
    setNewBPM(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const resetForm = () => {
    setNewBPM(0);
    setTitle(0);
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input
            value={title}
            onChange={handleTitleChange}
            type="text"
            name="title"
          ></input>
        </div>

        <div>
          <label htmlFor="beatsPerMinute">Beats Per Minute:</label>
          <input
            value={newBPM}
            onChange={handleManualBPM}
            type="number"
            name="beatsPerMinute"
          ></input>
        </div>

        <button onClick={addBPM}>Add</button>
        <div>{bpm}</div>
        <div>{title}</div>
      </form>
    </div>
  );
};

export default Form;
