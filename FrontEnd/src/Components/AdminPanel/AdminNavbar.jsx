import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const [time, setTime] = useState(new Date().toLocaleString());

  // Update date and time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("role");

    navigate("/");
  };

  return (
    <div className="admin_header">
      <nav>
        <div className="first_slot">
          <span className="admin_time">{time}</span>
        </div>

        <div className="second_slot">
          <span className="admin_profile">
            <FaUserCircle className="admin_icon" /> Admin
          </span>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
