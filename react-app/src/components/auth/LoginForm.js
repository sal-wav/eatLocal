import React, { useState } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { login } from "../../services/auth";

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
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <h2>Log in to eat local</h2>
      <h3>New to eat local? <NavLink className="navLink navbarLink" to="/sign-up">Sign up</NavLink></h3>
      <div>
        <input className="input" name="email" type="text" placeholder="email" value={email} onChange={updateEmail} required/>
      </div>
      <div>
        <input className="input" name="password" type="password" placeholder="password" value={password} onChange={updatePassword} required/>
      </div>
      <button className="btn" type="submit">Log In</button>
      <h3>New to eat local? <NavLink className="navLink navbarLink" to="/sign-up">Sign up</NavLink></h3>
    </form>
  );
};

export default LoginForm;
