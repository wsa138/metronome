import { provider } from '../firebase';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const SignIn = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

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
      console.log('Signed Out', user);
    } catch (error) {
      console.log(error);
    }
  }

  // If not signed in, show sign in button, and opposite.

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
