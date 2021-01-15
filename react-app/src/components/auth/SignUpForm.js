import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

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
    <div className="formContainer">
      <form className="authform" onSubmit={onSignUp}>
        <div>
          <input className="input" type="text" name="username" placeholder="username" onChange={updateUsername} value={username}></input>
        </div>
        <div>
          <input className="input" type="text" name="email" placeholder="email" onChange={updateEmail} value={email}></input>
        </div>
        <div>
          <input className="input" type="password" name="password" placeholder="password" onChange={updatePassword} value={password}></input>
        </div>
        <div>
          <input className="input" type="password" name="repeat_password" placeholder="confirm your password" onChange={updateRepeatPassword} value={repeatPassword} required={true}
          ></input>
        </div>
        <button className="btn"type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
