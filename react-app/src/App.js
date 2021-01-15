import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import UsersList from "./components/UsersList";
// import User from "./components/User";
import { authenticate } from "./services/auth";
import BizForm from "./components/BizForm";
import BizPage from "./components/BizPage";
import FoodForm from "./components/FoodForm";
import LandingPage from "./components/LandingPage";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        setCurrentUser(user);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <Route path="/login" exact={true}>
        <LoginForm
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/sign-up" exact={true}>
        <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
      {/* <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
        <User />
      </ProtectedRoute> */}
      <Route path="/" exact={true} authenticated={authenticated}>
        { !authenticated ? <LandingPage/> :
        <h1>My Home Page</h1>
        }
      </Route>
      <ProtectedRoute path="/bizform" exact={true} authenticated={authenticated}>
        <BizForm />
      </ProtectedRoute>
      <ProtectedRoute path="/biz/:bizId" exact={true} authenticated={authenticated}>
        <BizPage currentUser={currentUser} />
      </ProtectedRoute>
      <ProtectedRoute path="/foodform/biz/:bizId" exact={true} authenticated={authenticated}>
        <FoodForm />
      </ProtectedRoute>
    </BrowserRouter>
  );
}

export default App;
