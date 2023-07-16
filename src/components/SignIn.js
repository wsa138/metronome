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
    <div>
      {!user.displayName ? (
        <button onClick={handleGoogleSignIn}>Sign In</button>
      ) : (
        <button onClick={handleGoogleSignOut}>Sign Out</button>
      )}
      <div>{user.displayName}</div>
    </div>
  );
};

export default SignIn;
