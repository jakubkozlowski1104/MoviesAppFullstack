import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  StyledLogin,
  StyledCenter,
  StyledForm,
  DataExistError,
} from './SignUp.styles';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import InputField from './InputField/InputField';
import StrongPasswordFeature from './StrongPasswordFeature/StrongPasswordFeature';

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASS_REGEX = /^(?=.*[A-Z]).{6,}$/;

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isDataCorrect, setIsDataCorrect] = useState({
    name: 'none',
    email: 'none',
    password: 'none',
  });
  const [dataExistError, setIsDataExist] = useState('');
  const [canSignUp, setCanSignUp] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const validateInputs = () => {
      const isNameValid = inputs.name.length >= 6 && inputs.name.length <= 24;
      const isEmailValid = EMAIL_REGEX.test(inputs.email);
      const isPasswordValid = PASS_REGEX.test(inputs.password);

      setIsDataCorrect({
        name: isNameValid ? 'true' : 'false',
        email: isEmailValid ? 'true' : 'false',
        password: isPasswordValid ? 'true' : 'false',
      });

      setCanSignUp(isNameValid && isEmailValid && isPasswordValid);
    };

    validateInputs();
  }, [inputs]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const checkIfDataAlreadyExist = (status) => {
    if (status === 1) {
      setIsDataExist('email and name already exist');
    } else if (status === 2) {
      setIsDataExist('email already exist');
    } else if (status === 3) {
      setIsDataExist('name already exist');
    } else {
      setIsDataExist('');
    }
  };

  const createUser = async () => {
    try {
      await axios
        .post('api/user/register/check', {
          username: inputs.name,
          email: inputs.email,
          password: inputs.password,
        })
        .then((response) => {
          if (response.status === 201) {
            console.log('Użytkownik został pomyślnie zarejestrowany');
            navigate('/');
          } else if (response.status === 200) {
            checkIfDataAlreadyExist(response.data.status);
          }
        });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (canSignUp) {
      createUser();
    }
  };

  return (
    <StyledCenter>
      <div className="wrapper">
        <StyledLogin>
          <h1>Sign up and start traveling!</h1>
          <StyledForm onSubmit={handleSubmit}>
            {dataExistError.length > 0 && (
              <DataExistError>{dataExistError}</DataExistError>
            )}
            <InputField
              placeholder="Name"
              type="text"
              name="name"
              onChange={handleChange}
              icon={faUser}
              infoContent="Between 6 and 24 characters"
              canSignUp={isDataCorrect.name}
            />
            <InputField
              placeholder="Email"
              type="text"
              name="email"
              onChange={handleChange}
              icon={faEnvelope}
              infoContent="One @, and domain name"
              canSignUp={isDataCorrect.email}
            />
            <InputField
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              icon={faLock}
              infoContent="One big letter, at least 6 characters"
              canSignUp={isDataCorrect.password}
            />
            <StrongPasswordFeature inputs={inputs} />
            <button type="submit">Register</button>
            <div className="register">
              <p>Already have an account?</p>
              <p
                className="p-navigate"
                onClick={() => {
                  navigate('/login');
                }}
              >
                {' '}
                Login{' '}
              </p>
            </div>
          </StyledForm>
        </StyledLogin>
      </div>
    </StyledCenter>
  );
};

export default SignUp;
