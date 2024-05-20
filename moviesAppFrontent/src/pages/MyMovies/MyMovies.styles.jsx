import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    margin-top: 50px;

    span {
      color: red;
      cursor: pointer;
    }
  }

  .movies-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
    }

    .movies {
      display: flex;
      list-style-type: none;
      gap: 20px;
      justify-content: flex-start;
      flex-wrap: wrap;
      max-width: 80%;

      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .name {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
