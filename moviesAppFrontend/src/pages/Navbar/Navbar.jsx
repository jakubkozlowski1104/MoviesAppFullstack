import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/signup" activeClassName="active">
          Sign Up
        </NavLink>
        <NavLink to="/signin" activeClassName="active">
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
