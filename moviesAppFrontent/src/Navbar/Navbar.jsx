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
        </ul>
        <ul>
          {console.log(localStorage.getItem('token'))}
          <li>
            {localStorage.getItem('token') === null ? (
              <>
                <StyledNavLink to="/login">Log in</StyledNavLink>
                <StyledNavLink to="/signup">Sign up</StyledNavLink>
              </>
            ) : (
              <button onClick={logoutUser}>Logout</button>
            )}
          </li>
        </ul>
      </div>
    </StyledNav>
 );
};
