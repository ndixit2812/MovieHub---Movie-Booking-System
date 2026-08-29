import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineLocalMovies } from "react-icons/md";
import { BsProjector } from "react-icons/bs";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdOutlineChair } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { GoX } from "react-icons/go";
import { MdScreenshotMonitor } from "react-icons/md";
import { Link } from "react-router-dom";
import { LiaClipboardListSolid } from "react-icons/lia";

const Sidebars = () => {
  return (
    <>
      <div className="container-fluid side_bar">
        <span>
          <GoX className="icon" />
        </span>
        <div className="box">
          <span className="title1">Movie</span>
          <span className="title2">Hub</span>
          <p>Admin panel</p>
        </div>
        <hr />
        <Link to="dashboard">
          <MdOutlineDashboardCustomize className="admin_board_icon" />
          Dashboard
        </Link>
        <hr />
        <Link to="movie">
          <MdOutlineLocalMovies className="admin_board_icon" />
          Add Movies
        </Link>
        <hr />
        <Link to="theatres">
          <BsProjector className="admin_board_icon" />
          Add Theatre
        </Link>
        <hr />
        <Link to="shows">
          <FaUsersViewfinder className="admin_board_icon" />
          Create Shows
        </Link>
        <hr />
        <Link to="addScreen">
          <MdScreenshotMonitor className="admin_board_icon" />
          Add Screen
        </Link>
        <hr />
        <Link to="seats">
          <MdOutlineChair className="admin_board_icon" />
          Add Seats
        </Link>
        <hr />
        <Link to="booking">
          <LiaClipboardListSolid className="admin_board_icon" />
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
    </>
  );
};

export default Sidebars;
