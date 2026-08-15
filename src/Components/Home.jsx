import React from "react";
import { ReactTyped } from "react-typed";
import Navbar from "../Utilities/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-content">
          <h2>Book Your Movie Tickets</h2>
          <p>Experience Movies Like never before</p>

          <ReactTyped
            strings={[
              '<span style="color:red; font-size: 30px;">Your Movie.</span>',
              '<span style="color:gold; font-size: 30px;">Your Seat.</span>',
              '<span style="color:blue; font-size: 30px;">Your Moment.</span>',
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop={true}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
