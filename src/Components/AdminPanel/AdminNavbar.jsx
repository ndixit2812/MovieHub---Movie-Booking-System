import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const AdminNavbar = () => {
  const navigate = useNavigate();
  let time = new Date().toLocaleString();

  return (
    <>
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
              class="btn btn-outline-danger"
              onClick={() => navigate("/")}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default AdminNavbar;
