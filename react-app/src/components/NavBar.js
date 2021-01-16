import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import "./styles/navbar.css";

const NavBar = ({ authenticated, setAuthenticated }) => {
  const [searchValue, setSearchValue] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   return (
  //     // <Redirect to={`/search/${searchValue}`}/>
  //   )
  // }

  // const handleSearchValue = (e) => {
  //   e.preventDefault();
  //   setSearchValue(e.target.value)
  // };

  const SearchInput = () => (
    <>
      <form className="searchForm">
        <input className="searchInput" type="search" placeholder="In the mood for ..."></input>
        <button className="searchBtn" type="submit">
          <span className="iconContainer">
            <i className="fas fa-search fa-2x"></i>
          </span>
        </button>
      </form>
    </>
  )

  return (
    <nav className="nav">
      <ul className="navList">
        <li className="left">
          <NavLink className="navLink navbarLink" to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="middle">
          <SearchInput/>
        </li>
        <div className="right">
          {!authenticated ?
          <>
            <li>
              <NavLink className="navLink navbarLink" to="/login" exact={true} activeClassName="active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/sign-up" exact={true} activeClassName="active">
                Sign Up
              </NavLink>
            </li>
          </> :
          <div className="rightLinkContainer">
            <li>
              <NavLink className="navLink navbarLink" to="/bizform" exact={true} activeClassName="active">
                Share Your Biz
              </NavLink>
            </li>
            <li>
              <LogoutButton setAuthenticated={setAuthenticated} />
            </li>
          </div>
          }
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
