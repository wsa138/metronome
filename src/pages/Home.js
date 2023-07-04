import BeatsPerMinute from '../components/BeatsPerMinute';
import SignIn from '../components/SignIn';
import { getDatabase, ref, onValue } from 'firebase/database';

export const Home = () => {
  const db = getDatabase();

  const addToDatabase = () => {
    console.log('Adding user to database');
  };

  const handleClick = () => {
    const data = ref(db);
    onValue(data, (snapshop) => {
      console.log(snapshop.val());
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <h2>
        <SignIn />
      </h2>
      <BeatsPerMinute />
      <button onClick={addToDatabase}>AddToDatabase</button>
      <button onClick={handleClick}>ReadDatabase</button>
    </div>
  );
};
