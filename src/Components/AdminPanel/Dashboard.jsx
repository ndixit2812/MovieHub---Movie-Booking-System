import React from "react";
import { GiClapperboard } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { GiBookPile } from "react-icons/gi";
import { PiCurrencyInrBold } from "react-icons/pi";
import { MdOutlineTheaters } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import PyChart from "./DashBoard_Part/PyChart";
import TableBooking from "./DashBoard_Part/TableBooking";
import PaymentSummary from "./DashBoard_Part/PaymentSummary";
import QuickActions from "./DashBoard_Part/QuickActions";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid my-1 admin_panel_board">
        <div className="row first_row p-0">
          <div className="col-md-2 card_box">
            <div className="admin_dashboard_card1">
              <div className="row">
                <div className="col-md-4  my-auto text-center">
                  <div className="admin_panel_icon1">
                    <GiClapperboard className="admin_icon" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="admin_card_content">
                    <p className="admin_heading">Total Movies</p>
                    <p className="admin_count">24</p>
                    <p className="admin_status">12% more than last month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2 card_box">
            <div className="admin_dashboard_card2">
              <div className="row">
                <div className="col-md-4 my-auto text-center">
                  <div className="admin_panel_icon2">
                    <FaUserAlt className="admin_icon" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="admin_card_content">
                    <p className="admin_heading">Total Users</p>
                    <p className="admin_count">1,150</p>
                    <p className="admin_status">18% more than last month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2 card_box">
            <div className="admin_dashboard_card3">
              <div className="row">
                <div className="col-md-4 my-auto text-center">
                  <div className="admin_panel_icon3">
                    <GiBookPile className="admin_icon" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="admin_card_content">
                    <p className="admin_heading">Total Bookings</p>
                    <p className="admin_count">4485</p>
                    <p className="admin_status">22% more than last month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2 card_box">
            <div className="admin_dashboard_card4">
              <div className="row">
                <div className="col-md-4 my-auto text-center">
                  <div className="admin_panel_icon4">
                    <PiCurrencyInrBold className="admin_icon" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="admin_card_content">
                    <p className="admin_heading">Total revenue</p>
                    <p className="admin_count">7,42,000</p>
                    <p className="admin_status">25% more than last month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2 card_box">
            <div className="admin_dashboard_card5">
              <div className="row">
                <div className="col-md-4 my-auto text-center">
                  <div className="admin_panel_icon5">
                    <MdOutlineTheaters className="admin_icon" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="admin_card_content">
                    <p className="admin_heading">Total Theatres</p>
                    <p className="admin_count">4</p>
                    <p className="admin_status">No Changes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2 card_box">
            <div className="admin_dashboard_card6">
              <div className="row">
                <div className="col-md-4 my-auto text-center">
                  <div className="admin_panel_icon6">
                    <FaPlay className="admin_icon" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="admin_card_content">
                    <p className="admin_heading">Active Shows</p>
                    <p className="admin_count">32</p>
                    <p className="admin_status">8% more than last month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ======================================== */}
        <div className="row my-1 second_row">
          <div className="col-md-3 p-1">
            <PyChart />
          </div>
          <div className="col-md-6 p-1">
            <TableBooking />
          </div>
          <div className="col-md-3 p-1">
            <PaymentSummary />
          </div>
        </div>
        <div className="row my-1 third_row">
          <div className="col-md-12 p-1">
            <QuickActions />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
