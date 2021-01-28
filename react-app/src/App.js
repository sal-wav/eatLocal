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
import EditFoodForm from "./components/EditFoodForm";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import ReviewForm from "./components/ReviewForm";
import EditReviewForm from "./components/EditReviewForm";

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
      <Route path="/login" exact={true}>
        <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <LoginForm
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/sign-up" exact={true}>
        <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
      {/* <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
        <User />
      </ProtectedRoute> */}
      <Route path="/" exact={true} authenticated={authenticated} setAuthenticated={setAuthenticated}>
        { !authenticated ? <LandingPage/> :
        <>
          <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
          <HomePage />
        </>
        }
      </Route>
      <Route path="/search/:term">
        <>
          <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
          <SearchResults/>
        </>
      </Route>
      <ProtectedRoute path="/bizform" exact={true} authenticated={authenticated}>
        <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <BizForm />
      </ProtectedRoute>
      <ProtectedRoute path="/biz/:bizId" exact={true} authenticated={authenticated}>
        <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <BizPage currentUser={currentUser} />
      </ProtectedRoute>
      <ProtectedRoute path="/foodform/biz/:bizId" exact={true} authenticated={authenticated}>
        <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <FoodForm />
      </ProtectedRoute>
      <ProtectedRoute path="/foodform/biz/:bizId/food/:foodId" exact={true} authenticated={authenticated}>
        <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <EditFoodForm />
      </ProtectedRoute>
      <ProtectedRoute path="/reviewform/biz/:bizId" exact={true} authenticated={authenticated}>
        <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <ReviewForm />
      </ProtectedRoute>
      <ProtectedRoute path="/reviewform/biz/:bizId/review/:reviewId" exact={true} authenticated={authenticated}>
        <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
        <EditReviewForm />
      </ProtectedRoute>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
