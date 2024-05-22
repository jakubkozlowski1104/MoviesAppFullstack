import styled from 'styled-components';

export const StyledCenter = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding-top: 150px;
  width: 84%;
  height: 100vh;
  flex-direction: column;
  padding-left: 500px;
  align-items: center;
  gap: 120px;

  .btn {
    margin: 0 5px;
    margin-bottom: 15px;
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    font-size: 14px;
    height: 30px;
    padding: 0px 20px;
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

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      padding: 20px;
      border: 1px solid #ddd;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }

    tr:hover {
      background-color: #f5f5f5;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    label {
      display: flex;
      flex-direction: column;
      gap: 5px;

      input {
        display: flex;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    }

    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    align-self: flex-start;
    margin: 5px 0;
  }

  .btn,
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
    font-size: 14px;
    height: 30px;
    padding: 0px 20px;
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

  h1 {
    text-align: center;
  }
`;
