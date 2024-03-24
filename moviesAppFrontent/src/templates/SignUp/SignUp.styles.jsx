import styled from 'styled-components';

export const StyledCenter = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 150px;
  width: 84%;
  height: 100vh;
  padding-left: 500px;

  .wrapper {
    margin-right: 150px;
    position: relative;
    width: 70%;
    display: flex;
    justify-content: center;
  }
`;

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 500px;
  background-color: #232123;
  border-radius: 1%;
  color: #18c9ec;
  margin: 0;
  padding: 0;

  h1 {
    font-size: 1.4rem;
    margin: 0;
    padding: 10px 0;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  button {
    cursor: pointer;
    font-weight: bold;
    padding: 10px 10px;
    width: 270px;
    height: 40px;
    border-radius: 2px;
    outline: none;
    border: none;
    margin: 5px 0;
    background-color: #03b8e9;
    font-size: 1.1rem;
  }

  .passwordInfo {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .register {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .p-navigate {
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
  }
  .register p {
    margin: 0;
    font-size: 0.85rem;
    padding-bottom: 25px;

    span:hover {
      color: #5fd1e8;
    }
  }
`;

export const DataExistError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 8px 0;
  height: 40px;
  padding: 0px 0px 0px 8px;
  width: 100%;
  outline: none;
  border: none;
  background-color: #dba29e;
  color: black;
  font-size: 0.8rem;
  border: 2px solid red;
  font-weight: bold;
`;
