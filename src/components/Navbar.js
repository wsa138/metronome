import { Link } from 'react-router-dom';

export const Navbar = () => {
  const user = false;

  const handleSignOut = () => {
    console.log('handleSignOut');
  };

  return (
    <div id="navPage">
      <h1>Firebase Google Auth & Context</h1>
      <div className="navbar">
        <Link className="navButton" to="/">
          <h2>Home</h2>
        </Link>
        {user?.displayName ? (
          <h2 onClick={handleSignOut}>Logout</h2>
        ) : (
          <Link className="navButton" to="/signin">
            <h2>Sign in</h2>
          </Link>
        )}
      </div>
    </div>
  );
};
