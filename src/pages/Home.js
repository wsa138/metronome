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
    <div className="bg-black text-white  h-screen pt-3 space-y-3 ">
      <div className="flex justify-around">
        <h1 className="text-3xl font-extrabold md:text-4xl bg-gradient-to-r from-gray-400 via-white to-gray-400 text-transparent bg-clip-text inline">
          BPM Calculator
        </h1>
        <h2>
          <SignIn user={user} setUser={setUser} />
        </h2>
      </div>
      <BeatsPerMinute bpm={bpm} setBPM={setBPM} />
      <div class=" flex flex-col items-center">
        {userUID === null ? null : (
          <Form bpm={bpm} setBPM={setBPM} userUID={userUID} db={db} />
        )}

        <div class=" flex flex-col w-72 p-1">
          <List userUID={userUID} db={db} />
        </div>
      </div>
    </div>
  );
};
