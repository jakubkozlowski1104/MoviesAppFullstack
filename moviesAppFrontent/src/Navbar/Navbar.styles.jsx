// navbar.styles.jsx
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavContent = styled.div``;

export const StyledNav = styled.nav`
  background-color: darkblue;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%;

  .center-content {
    display: flex;
    width: 100%;
    max-width: 1200px;
    justify-content: space-between;

    ul {
      display: flex;
      list-style: none;
      padding: 0;

      li {
        text-transform: uppercase;
        margin-right: 10px;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;
