import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineLocalMovies } from "react-icons/md";
import { BsProjector } from "react-icons/bs";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdOutlineChair } from "react-icons/md";
import { TbReservedLine } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { GoX } from "react-icons/go";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  let time = new Date().toLocaleString();

  return (
    <>
      <div>
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
                class="btn btn-outline-warning"
                onClick={() => navigate("/")}
              >
                Logout
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div className="main_admin_board py-0">
        <div className="row">
          <div className="col-md-2">
            <div className="container-fluid side_bar">
              <span>
                <GoX className="icon" />
              </span>
              <div className="box">
                <span className="title">MovieHub</span>
              </div>
              <hr />
              <Link to="dashboard">
                <MdOutlineDashboardCustomize className="admin_board_icon" />
                Dashboard
              </Link>
              <hr />
              <Link to="movie">
                <MdOutlineLocalMovies className="admin_board_icon" />
                Movies
              </Link>
              <hr />
              <Link to="theatres">
                <BsProjector className="admin_board_icon" />
                Theatre
              </Link>
              <hr />
              <Link to="shows">
                <FaUsersViewfinder className="admin_board_icon" />
                Shows
              </Link>
              <hr />
              <Link to="seats">
                <MdOutlineChair className="admin_board_icon" />
                Seats
              </Link>
              <hr />
              <Link to="booking">
                <TbReservedLine className="admin_board_icon" />
                Bookings
              </Link>
              <hr />
              <Link to="payment">
                <GiTakeMyMoney className="admin_board_icon" />
                Payments
              </Link>
              <hr />
              <Link to="snacks">
                <IoFastFoodOutline className="admin_board_icon" />
                Snacks
              </Link>
              <hr />
              <Link to="feedback">
                <MdOutlineFeedback className="admin_board_icon" />
                FeedBack
              </Link>
              <hr />
            </div>
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-4">seats availability</div>
              <div className="col-md-4">revenue generate</div>
              <div className="col-md-4">snacks</div>
            </div>
            <div className="row">
              <div className="col-md-4">shows availability</div>
              <div className="col-md-4">theatres generate</div>
              <div className="col-md-4">Movies</div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Admin;
