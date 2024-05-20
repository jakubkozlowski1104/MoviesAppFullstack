import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .settings-container {
    display: flex;
    flex-direction: column;
    border: 5px solid purple;
    padding: 20px 40px;
    border-radius: 30px;

    .wallet {
      input {
        margin: 0 5px;
        margin-bottom: 15px;
        display: inline-block;
        outline: 0;
        border: 0;
        cursor: pointer;
        color: #fff;
        font-weight: 500;
        border-radius: 4px;
        font-size: 1.3rem;
        line-height: 30px;
        padding: 5px 10px;
        height: 60px;
        width: 100px;
        text-shadow: rgb(0 0 0 / 25%) 0px 3px 8px;
        background: rgb(69, 94, 181) 9.16%;
      }
      button {
        margin: 0 5px;
        margin-bottom: 15px;
        display: inline-block;
        outline: 0;
        border: 0;
        cursor: pointer;
        color: #fff;
        font-weight: 500;
        border-radius: 4px;
        font-size: 1.3rem;
        line-height: 30px;
        padding: 15px 50px;
        text-shadow: rgb(0 0 0 / 25%) 0px 3px 8px;
        background: linear-gradient(
          92.88deg,
          rgb(69, 94, 181) 9.16%,
          rgb(86, 67, 204) 43.89%,
          rgb(103, 63, 215) 64.72%
        );
        transition: all 0.5s ease 0s;
        :hover {
          box-shadow: rgb(80 63 205 / 50%) 0px 1px 40px;
          transition: all 0.1s ease 0s;
        }
      }
    }
  }
`;
