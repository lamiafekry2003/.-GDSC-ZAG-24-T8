import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

  const deleteAccount=()=>{ 
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div >
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand text-light" to="">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="">
                  Home
                </NavLink>
              </li>
              {localStorage.getItem('name')?<>
                <li className="nav-item">
                 <Link  onClick={deleteAccount} className="nav-link curser-pointer text-light">
                 Logout
                 </Link>
                </li>
                <li className="nav-item">
                <Link   className="nav-link text-light fw-bold" to="register">
                 Hi {localStorage.getItem("name")}
                </Link>
              </li></> :<>
              {/* <li className="nav-item">
                <NavLink className="nav-link text-light" to="register">
                  Register
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="login">
                  Login
                </NavLink>
              </li>
              </>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
