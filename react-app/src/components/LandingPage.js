import React from 'react';
import { NavLink } from 'react-router-dom';
import "./styles/home.css";

const LandingPage = () => {

    return (
        <div className='pageContainer'>
          <div className='landingContainer'>
            <div className='imgContainer'>
                <img className='landingImg' src='https://eatlocalapp.s3.amazonaws.com/burger.jpg'></img>
            </div>
            <div className='landingRight'>
              <div className='rightContainer'>
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
            </div>
          </div>
        </div>
    )
}

export default LandingPage;
