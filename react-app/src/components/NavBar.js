import React, { useState } from 'react';
import { NavLink, useHistory, Redirect } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import "./styles/navbar.css";

const NavBar = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${value}`)
    // return (
    //   // <Redirect to={`search/${value}`}/>
    // )
  }

  // const SearchInput = () => (
  //   <>
  //     <form className="searchForm" onSubmit={handleSubmit}>
  //       <input className="searchInput" type="search" value={value} placeholder="In the mood for ..." onChange={(e) => setValue(e.target.value)}></input>
  //       <button className="searchBtn" type="submit">
  //         <span className="iconContainer">
  //           <i className="fas fa-search fa-2x"></i>
  //         </span>
  //       </button>
  //     </form>
  //   </>
  // )

  return (
    <nav className="nav">
      <ul className="navList">
        <li className="left">
          <NavLink className="navLink navbarLink" to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="middle">
          {/* <SearchInput/> */}
          <>
            <form className="searchForm" onSubmit={handleSubmit}>
              <input className="searchInput" type="search" value={value} placeholder="In the mood for ..." onChange={(e) => setValue(e.target.value)}></input>
              <button className="searchBtn" type="submit">
                <span className="iconContainer">
                  <i className="fas fa-search fa-2x"></i>
                </span>
              </button>
            </form>
          </>
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
