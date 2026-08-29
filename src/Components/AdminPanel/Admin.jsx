import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Sidebars from "./Sidebars";

const Admin = () => {
  return (
    <>
      <AdminNavbar />
      <div className="row">
        <div className="col-md-2 admin_left_board">
          <Sidebars />
        </div>

        <div className="col-md-10 admin_right_board">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
