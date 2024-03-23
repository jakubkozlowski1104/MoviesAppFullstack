import styled from 'styled-components';

export const StyledStrongPasswordFeature = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  .feature > * {
    position: relative;
    background-color: green;
    height: 4px;
    width: 22%;
    border-radius: 20px;
    margin: 0 2px 0 2px;
  }

  .feature > *::after {
    content: '';
    display: block;
    background-color: lightgreen;
    height: inherit;
    width: 0%;
    border-radius: 20px;
    transition: 0.3s;
  }

  .feature {
    width: 40%;
    display: flex;
    .low {
      background-color: lightgreen;
    }
    .better::after {
      ${(props) =>
        props.stronglevel >= 5 &&
        `
          width: 100%;
        `}
    }
    .strong::after {
      ${(props) =>
        props.stronglevel >= 7 &&
        `
          width: 100%;
        `}
    }
    .very-strong::after {
      ${(props) =>
        props.stronglevel >= 9 &&
        `
          width: 100%;
        `}
    }
  }

  .passwordPowerInfo {
    font-size: 0.8rem;
  }
`;
