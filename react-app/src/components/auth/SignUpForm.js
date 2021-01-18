import React, { useState } from "react";
import { Redirect, NavLink } from 'react-router-dom';
import { signUp, demo } from '../../services/auth';

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      } else {
        setErrors(user.errors);
      }
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    await demo();
    setAuthenticated(true)
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="authPage container">
      <div className="authFormContainer container">
        <form className="authForm container" onSubmit={onSignUp}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <h2 className="authHead">Sign up for eat local</h2>
          <p className="authSubhead">Connect with great local businesses</p>
          <button id="demoBtn" className="btn authBtn" type="button" onClick={demoLogin}>Continue as Demo User</button>
          <p id="authDivider">OR</p>
          <div>
            <input className="input authInput" type="text" name="username" placeholder="username" onChange={updateUsername} value={username}></input>
          </div>
          <div>
            <input className="input authInput" type="text" name="email" placeholder="email" onChange={updateEmail} value={email}></input>
          </div>
          <div>
            <input className="input authInput" type="password" name="password" placeholder="password" onChange={updatePassword} value={password}></input>
          </div>
          <div>
            <input className="input authInput" type="password" name="repeat_password" placeholder="confirm your password" onChange={updateRepeatPassword} value={repeatPassword} required={true}></input>
          </div>
          <button className="btn authBtn" type="submit">Sign Up</button>
          <p className="smallText">Already on eat local? <NavLink className="navLink authNavlink" to="/login">Log in</NavLink></p>
        </form>
        <div className="authRight">
          <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"></img>
        </div>
      </div>
    </div>

  );
};

export default SignUpForm;
