import { StyledNav, StyledNavLink } from './Navbar.styles';

export const Navbar = () => {
 return (
    <StyledNav>
      <div className="center-content">
        <ul>
          <li>
            <StyledNavLink to="/">
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/profile">
              What&apos;s on
            </StyledNavLink>
          </li>
        </ul>
        <ul>
          <li>
            <StyledNavLink to="/login">
              Log in
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/signup">
              Sign up
            </StyledNavLink>
          </li>
        </ul>
      </div>
    </StyledNav>
 );
};
