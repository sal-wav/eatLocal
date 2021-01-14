import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {

    return (
        <div>
            <div>
                <img ></img>
            </div>
            <div>
                <h1>Find Food You'll Love</h1>
            </div>
            <div>
              <NavLink className="navLink" to="/login" exact={true} activeClassName="active">
                Login
              </NavLink>
            </div>
            <div>
              <NavLink className="navLink" to="/sign-up" exact={true} activeClassName="active">
                Sign Up
              </NavLink>
            </div>
        </div>
    )
}

export default LandingPage;
