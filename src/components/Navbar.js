import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div id="navPage">
      <h1>Firebase Google Auth & Context</h1>
      <div className="navbar">
        <Link className="navButton" to="/">
          <h2>Home</h2>
        </Link>
      </div>
    </div>
  );
};
