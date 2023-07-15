import BeatsPerMinute from '../components/BeatsPerMinute';
import SignIn from '../components/SignIn';
import Form from '../components/Form';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [user, setUser] = useState({});
  const [userUID, setUserUID] = useState(null);
  const [bpm, setBPM] = useState(0);
  const db = getDatabase();

  // Update userUID state whenever a new user signs in or out.
  useEffect(() => {
    console.log('setting uid');
    setUserUID(user.uid ? user.uid : null);
  }, [user]);

  // TODO: Build a form to replace this.
  const addToDatabase = () => {
    // If no userUID, return
    if (userUID === null) {
      console.log('No user found');
      return;
    }
    // Find matching userUID and add BPM value to database
    console.log('Updating users database');

    set(ref(db, 'Users/' + userUID), {
      beatsPerMinute: bpm,
    });
  };

  // TODO: Can remove this once I feel confident in List.js reading data.
  const readDatabaseLog = () => {
    const data = ref(db);
    onValue(data, (snapshot) => {
      // Catch if there is no database(Realtime Database defaults to null when delted)
      if (snapshot.val() === null) {
        console.log('No database found');
        return;
      }
      if (user.uid in snapshot.val().Users) {
        console.log(snapshot.val().Users[userUID]);
      } else {
        console.log('UID not found');
      }
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <h2>
        <SignIn user={user} setUser={setUser} />
      </h2>
      <BeatsPerMinute bpm={bpm} setBPM={setBPM} />
      <button onClick={readDatabaseLog}>ReadDatabase</button>
      {userUID === null ? null : <Form bpm={bpm} userUID={userUID} db={db} />}
    </div>
  );
};
