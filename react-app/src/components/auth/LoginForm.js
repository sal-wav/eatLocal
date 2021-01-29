import React, { useState } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { login, demo } from "../../services/auth";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    await demo();
    setAuthenticated(true)
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="authPage container">
      <div className="authFormContainer container">
        <form className="authForm container" onSubmit={onLogin}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <h2 className="authHead">Log in to eat local</h2>
          <p className="authSubhead">New to eat local? <NavLink className="navLink authNavlink" to="/sign-up">Sign up</NavLink></p>
          <button id="demoBtn" className="btn authBtn" type="button" onClick={demoLogin}>Continue as Demo User</button>

          <p id="authDivider">OR</p>
          <div>
            <input className="input authInput" name="email" type="text" placeholder="email" value={email} onChange={updateEmail} required/>
          </div>
          <div>
            <input className="input authInput" name="password" type="password" placeholder="password" value={password} onChange={updatePassword} required/>
          </div>
          <button className="btn authBtn" type="submit">Log In</button>
          <p className="smallText">New to eat local? <NavLink className="navLink authNavlink" to="/sign-up">Sign up</NavLink></p>
        </form>
        <div className="authRight">
          <img alt="" src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"></img>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
