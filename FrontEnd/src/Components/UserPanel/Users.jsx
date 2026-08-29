import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { TbReservedLine } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineFeedback } from "react-icons/md";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { GoX } from "react-icons/go";

const Users = () => {
  const navigate = useNavigate();
  let time = new Date().toLocaleString();

  return (
    <>
      <div>
        <div className="user_header">
          <nav>
            <div className="first_slot">
              <span className="user_time">{time}</span>
            </div>
            <div className="second_slot">
              <span className="user_profile">
                <FaUserCircle className="user_icon" /> User
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
      </div>
      <div className="main_user_board py-0">
        <div className="row">
          <div className="col-md-2">
            <div className="container-fluid user_side_bar">
              <span>
                <GoX className="icon" />
              </span>
              <div className="box">
                <span className="title1">Movie</span>
                <span className="title2">Hub</span>
                <p>User panel</p>
              </div>
              <hr />
              <Link to="userProfile">
                <CgProfile className="user_board_icon" />
                My Profile
              </Link>
              <hr />
              <Link to="userBooking">
                <TbReservedLine className="user_board_icon" />
                My Bookings
              </Link>
              <hr />
              <Link to="userPayment">
                <GiTakeMyMoney className="user_board_icon" />
                My Payments
              </Link>
              <hr />
              <Link to="userFeedback">
                <MdOutlineFeedback className="user_board_icon" />
                FeedBack
              </Link>
              <hr />
              <Link to="userHelp">
                <LiaHandsHelpingSolid className="user_board_icon" />
                Need Help?
              </Link>
              <hr />
            </div>
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Users;
