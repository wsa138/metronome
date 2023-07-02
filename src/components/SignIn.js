import { provider } from '../firebase';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';

const SignIn = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log('Signed In', result.user);
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

  // If not signed in, show sign in button, and opposite.

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign In</button>
      <button onClick={handleGoogleSignOut}>Sign Out</button>
      <div>{user.displayName}</div>
    </div>
  );
};

export default SignIn;
