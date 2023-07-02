import BeatsPerMinute from '../components/BeatsPerMinute';
import SignIn from '../components/SignIn';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h2>
        <SignIn />
      </h2>
      <BeatsPerMinute />
    </div>
  );
};
