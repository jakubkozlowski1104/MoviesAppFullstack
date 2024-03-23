import styled from 'styled-components';

export const StyledInputField = styled.div.attrs((props) => ({
  cansignup: props.cansignup,
}))`
  position: relative;
  width: 270px;
  margin: 10px;
  height: 40px;
  background-color: #343334;
  padding: 0;
  margin: 8px 0;

  input {
    padding: 0px 0px 0px 8px;
    background-color: #343334;
    width: 85%;
    height: 100%;
    outline: none;
    border: none;
    background-color: #343334;
    color: white;
  }

  input:-webkit-autofill {
    transition: background-color 5000s;
    -webkit-text-fill-color: white;
  }

  .icon {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    font-size: 0.9rem;
  }
`;

export const HoverInfo = styled.div`
  position: absolute;
  width: 10%;
  top: 50%;
  transform: translateY(-50%);
  left: -9%;
  transition: 1s;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  z-index: 1;

  &:hover::after {
    content: '${(props) => props.content}';
    transition: 1s;
    width: 110px;
    position: absolute;
    font-size: 0.9rem;
    bottom: 50%;
    right: 40%;
    transform: translateY(50%);
    padding: 5px;
    background-color: #dba29e;
    border: 2px solid red;
    color: black;
    z-index: 10;
  }
`;

export const IconName = styled.div`
  color: ${(props) => {
    if (props.cansignup === 'true' || props.cansignup === 'none') {
      return '#03b8e9';
    } else {
      return 'red';
    }
  }};
`;
