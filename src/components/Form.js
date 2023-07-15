import { useEffect, useState } from 'react';

const Form = ({ bpm }) => {
  const [newBPM, setNewBPM] = useState(0);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setNewBPM(bpm);
  }, [bpm]);

  // TODO: Functionality to add to database
  const addBPM = (e) => {
    e.preventDefault();
    console.log('Adding new BPM');
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
