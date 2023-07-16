import BeatsPerMinute from '../components/BeatsPerMinute';
import SignIn from '../components/SignIn';
import Form from '../components/Form';
import List from '../components/List';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [user, setUser] = useState({});
  const [userUID, setUserUID] = useState(null);
  const [bpm, setBPM] = useState(0);
  const db = getDatabase();

  // Update userUID state whenever a new user signs in or out.
  useEffect(() => {
    setUserUID(user.uid ? user.uid : null);
  }, [user]);

  return (
    <div>
      <h1>Home</h1>
      <h2>
        <SignIn user={user} setUser={setUser} />
      </h2>
      <BeatsPerMinute bpm={bpm} setBPM={setBPM} />
      {userUID === null ? null : (
        <Form bpm={bpm} setBPM={setBPM} userUID={userUID} db={db} />
      )}
      <List userUID={userUID} db={db} />
    </div>
  );
};
