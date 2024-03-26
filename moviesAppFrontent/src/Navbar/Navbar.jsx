import { StyledNav, StyledNavLink } from './Navbar.styles';

export const Navbar = () => {
  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
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
            <StyledNavLink to="/profile">What&apos;s on</StyledNavLink>
          </li>
          {console.log(localStorage.getItem('isAdmin'))}
          {localStorage.getItem('isAdmin') === 'true' && <li>siema</li>}
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
            <li>
              <button onClick={logoutUser}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </StyledNav>
  );
};
