import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg p-0 bg-body-tertiary sticky-navbar">
      <div className="container-fluid header d-flex justify-content-between align-items-center">
        {/* Brand / Logo */}
        <div className="navbar-brand">
          <span className="logo1">movie</span>
          <span className="logo2">Hub</span>
        </div>

        {/* Mobile Hamburger Toggle Icon from React Icons */}
        <div className="hamburger-icon d-lg-none" onClick={toggleMenu}>
          {isOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={26} />}
        </div>

        {/* Navigation Menu Links */}
        <div className={`navbar-collapse ${isOpen ? "show-menu" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <NavLink to="/" className="nav-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/movies" className="nav-link" onClick={closeMenu}>
                Movies
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/login" className="nav-link" onClick={closeMenu}>
                Login
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/admin" className="nav-link" onClick={closeMenu}>
                Admin
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/user" className="nav-link" onClick={closeMenu}>
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
