import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="nav-container">
          <div className="logo">
            <img src="./img/logo.webp" />
          </div>
          <div className="navbar">
            <ul>
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'/about'}>About</NavLink>
              <NavLink to={'/gallery'}>Gallery</NavLink>
              <NavLink to={'/blog'}>Blog</NavLink>
              <NavLink to={'/contact'}>Contact</NavLink>
            </ul>
          </div>
        </div>
      </header>
      <Outlet/>
    </>
  );
}

export default Header;
