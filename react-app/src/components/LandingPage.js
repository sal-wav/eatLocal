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
                <div className='landingLink'>
                  <NavLink className="navLink" to="/login" exact={true} activeClassName="active">
                    Login
                  </NavLink>
                  <NavLink className="navLink" to="/sign-up" exact={true} activeClassName="active">
                    Sign Up
                  </NavLink>
                </div>
                <div>
                    <h1 id='landingHeading'>Find food you'll love</h1>
                    <div className='landingSubhead'>
                      <h3 id='subhead' className='input'>Right in your neighborhood</h3>
                      <NavLink id='btnLink' to="/login" exact={true} activeClassName="active">Find Food</NavLink>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default LandingPage;
