import React from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { GiFilmProjector } from "react-icons/gi";
import { MdScreenShare } from "react-icons/md";
import { PiSlideshowFill } from "react-icons/pi";
import { RiKanbanView } from "react-icons/ri";
import { GoReport } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="quick_action_main_frame">
        <div className="row">
          <div className="col-md-2">
            <button className="action_box_btn1">
              <RiMovie2Fill className="action_icon" />
              Add Movie
            </button>
          </div>

          <div className="col-md-2">
            <button className="action_box_btn2">
              <GiFilmProjector className="action_icon" />
              Add Theatre
            </button>
          </div>

          <div className="col-md-2">
            <button
              className="action_box_btn3"
              onClick={() => navigate("/addScreen")}
            >
              <MdScreenShare className="action_icon" />
              Add Screen
            </button>
          </div>

          <div className="col-md-2">
            <button className="action_box_btn4">
              <PiSlideshowFill className="action_icon" />
              Create Show
            </button>
          </div>

          <div className="col-md-2">
            <button className="action_box_btn5">
              <RiKanbanView className="action_icon" />
              View Bookings
            </button>
          </div>

          <div className="col-md-2">
            <button className="action_box_btn6">
              <GoReport className="action_icon" />
              View Reports
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickActions;
