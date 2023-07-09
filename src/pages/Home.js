import BeatsPerMinute from '../components/BeatsPerMinute';
import SignIn from '../components/SignIn';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [user, setUser] = useState({});
  const [userUID, setUserUID] = useState();
  const db = getDatabase();

  useEffect(() => {
    console.log('setting uid');
    setUserUID(user.uid);
  }, [user]);

  const addToDatabase = () => {
    console.log('Adding user to database');
  };

  const readDatabase = () => {
    const data = ref(db);
    onValue(data, (snapshot) => {
      console.log(userUID);
      if (user.uid in snapshot.val().Users) {
        console.log(snapshot.val().Users[userUID]);
      }
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <h2>
        <SignIn user={user} setUser={setUser} />
      </h2>
      <BeatsPerMinute />
      <button onClick={addToDatabase}>AddToDatabase</button>
      <button onClick={readDatabase}>ReadDatabase</button>
    </div>
  );
};
