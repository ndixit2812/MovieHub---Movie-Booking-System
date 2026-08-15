import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-0 bg-body-tertiary">
        <div className="container-fluid header">
          <span className="logo">MovieHub</span>

          <div className="navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/about" className="nav-link ">
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/movies" className="nav-link">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/bookings" className="nav-link">
                  Bookings
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/admin" className="nav-link">
                  Admin
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/user" className="nav-link">
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
