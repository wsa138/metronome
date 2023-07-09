import { provider } from '../firebase';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const SignIn = ({ user, setUser }) => {
  const auth = getAuth();

  useEffect(() => {
    console.log('User change from SignIn.js user');
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
