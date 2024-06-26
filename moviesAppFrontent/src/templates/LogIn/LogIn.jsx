/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import { StyledLogin, StyledCenter, StyledForm } from './LogIn.styles';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleExclamation,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const LogIn = () => {
  const [inputs, setInputs] = useState({});
  const [isloginwrong, setIsLoginWrong] = useState(false);
  const navigate = useNavigate();
  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/user/login', {
        email: inputs.email,
        password: inputs.password,
      })
      .then((response) => {
        if (response.status === 202) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('isAdmin', response.data.user.admin);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          setIsLoginWrong(false);
          navigate('/');
          window.location.reload();
        } else {
          setIsLoginWrong(true);
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        setIsLoginWrong(true);
      });
  };

  // const changePath = () => {
  //   if (isLogIn) {

  //   }
  // };

  return (
    <StyledCenter>
      <div className="wrapper">
        <StyledLogin isloginwrong={isloginwrong ? 'true' : undefined}>
          <h1>Login</h1>
          <StyledForm onSubmit={handleSubmit}>
            <div className="form-input">
              <input
                placeholder="Email"
                type="text"
                name="email"
                onChange={handleChange}
              />
              <div className="icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
            <div className="form-input">
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
              />
              <div className="icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
            <div className="info">
              <div className="error">
                {isloginwrong && (
                  <>
                    <FontAwesomeIcon
                      className="error-icon"
                      icon={faCircleExclamation}
                    />
                    <p>Entered data is incorrect</p>
                  </>
                )}
              </div>
              <p className="forgot">Forgot Password?</p>
            </div>
            <button type="submit">Login</button>
            <div className="register">
              <p>
                Dont have an accont?
                <span onClick={() => navigate('/signup')}> Register</span>
              </p>
            </div>
          </StyledForm>
        </StyledLogin>
      </div>
    </StyledCenter>
  );
};

export default LogIn;
