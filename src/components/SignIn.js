import { provider } from '../firebase';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';

const SignIn = ({ user, setUser }) => {
  const auth = getAuth();

  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log('Signed In');
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGoogleSignOut() {
    try {
      signOut(auth);
      setUser({});
      console.log('Signed Out');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="">
      {!user.displayName ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleGoogleSignIn}
        >
          Sign In
        </button>
      ) : (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleGoogleSignOut}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default SignIn;
