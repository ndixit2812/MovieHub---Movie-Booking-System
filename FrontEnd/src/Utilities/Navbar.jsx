import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const navigate = useNavigate();

  // Update login state when the user returns to the page
  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", checkLoginStatus);
    window.addEventListener("focus", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
      window.removeEventListener("focus", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("role");

    setIsLoggedIn(false);
    setIsOpen(false);
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

        {/* Mobile Hamburger Toggle */}
        <div className="hamburger-icon d-lg-none" onClick={toggleMenu}>
          {isOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={26} />}
        </div>

        {/* Navigation Links */}
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

            {isLoggedIn ? (
              <>
                <li className="nav-item mx-3">
                  <NavLink
                    to="/movies"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Movies
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

                <li className="nav-item mx-3">
                  {/* {isLoggedIn ? ( */}
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mx-3">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => {
                      closeMenu();
                      navigate("/login");
                    }}
                  >
                    Login
                  </button>
                </li>

                <li className="nav-item mx-3">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => {
                      closeMenu();
                      navigate("/register");
                    }}
                  >
                    Sign Up
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
