// W komponencie Navbar.js
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <button>profile</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <button>Log in</button>
          </NavLink>
          <NavLink to="/signin">
            <button>Sign in</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
