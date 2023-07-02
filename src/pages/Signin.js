import { auth, googleProvider } from '../firebase';

export const Signin = () => {
  const handleGoogleSignIn = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
      // Handle successful sign-in
    } catch (error) {
      // Handle sign-in error
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      // Handle successful sign-out
    } catch (error) {
      // Handle sign-out error
      console.log(error);
    }
  };

  const printUserName = () => {
    const user = auth.currentUser;
    if (user) {
      console.log('Signed-in user name:', user.displayName);
    } else {
      console.log('No user');
    }
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      <button onClick={handleSignOut}>Sign Out</button>
      <button onClick={printUserName}>Print User Id</button>
    </div>
  );
};
