import { StyledNav, StyledNavLink } from './Navbar.styles';

export const Navbar = () => {
  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <StyledNav>
      <div className="center-content">
        <ul>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/profile">My movies</StyledNavLink>
          </li>
          {console.log(localStorage.getItem('isAdmin'))}
          {localStorage.getItem('isAdmin') === 'true' && (
            <li>
              <StyledNavLink to="/admin-panel">ADMIN PANEL</StyledNavLink>
            </li>
          )}
        </ul>
        <ul>
          {localStorage.getItem('token') === null ? (
            <>
              <li>
                <StyledNavLink to="/login">Log in</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/signup">Sign up</StyledNavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <button onClick={logoutUser}>Logout</button>
              </li>
              <li>
                <StyledNavLink to="/settings">Settings</StyledNavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </StyledNav>
  );
};
