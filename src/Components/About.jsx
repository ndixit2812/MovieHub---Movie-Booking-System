import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./../Utilities/Navbar";
import {
  FaFilm,
  FaBuilding,
  FaChair,
  FaTicketAlt,
  FaSearch,
  FaClock,
  FaCreditCard,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about_page">
        {/* ================= HERO SECTION ================= */}
        <section className="about_hero">
          <div className="about_hero_overlay">
            <div className="container text-center">
              <h1>
                About <span>MovieHub</span>
              </h1>

              <p>Your Movie. Your Theatre. Your Seat.</p>

              <div className="about_hero_line"></div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT MOVIEHUB ================= */}
        <section className="about_intro section_padding">
          <div className="container">
            <div className="row align-items-center">
              {/* IMAGE */}
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="about_image_wrapper">
                  <img
                    src="/Theatre/Cineworld.jpg"
                    alt="Movie Theatre"
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="col-lg-6">
                <div className="about_content">
                  <p className="section_small_title">WELCOME TO MOVIEHUB</p>

                  <h2>
                    Your Ultimate <span>Movie Booking</span> Experience
                  </h2>

                  <p>
                    MovieHub is a modern movie booking platform designed to make
                    discovering movies and booking cinema tickets simple,
                    convenient and enjoyable.
                  </p>

                  <p>
                    From exploring movies to selecting your preferred theatre,
                    showtime and seat, MovieHub brings the entire booking
                    experience together in one place.
                  </p>

                  <p>
                    Whether you are planning a movie night with friends, family
                    or simply enjoying a movie by yourself, MovieHub helps you
                    find the perfect show and seat.
                  </p>

                  <Link to="/movies" className="about_btn">
                    Explore Movies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE MOVIEHUB ================= */}
        <section className="why_moviehub section_padding">
          <div className="container">
            <div className="section_heading text-center">
              <p className="section_small_title">WHY MOVIEHUB</p>

              <h2>
                Everything You Need For A <span>Perfect Movie</span>
              </h2>

              <p>
                We make your movie booking experience simple from start to
                finish.
              </p>
            </div>

            <div className="row mt-5">
              {/* CARD 1 */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="feature_card">
                  <div className="feature_icon">
                    <FaFilm />
                  </div>

                  <h4>Explore Movies</h4>

                  <p>
                    Discover available movies and explore their details, genres
                    and information before booking.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="feature_card">
                  <div className="feature_icon">
                    <FaBuilding />
                  </div>

                  <h4>Choose Theatre</h4>

                  <p>
                    Select your preferred theatre and find the showtime that
                    works best for you.
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="feature_card">
                  <div className="feature_icon">
                    <FaChair />
                  </div>

                  <h4>Select Your Seat</h4>

                  <p>
                    Choose your preferred available seat from Silver, Golden or
                    Diamond categories.
                  </p>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="feature_card">
                  <div className="feature_icon">
                    <FaTicketAlt />
                  </div>

                  <h4>Easy Booking</h4>

                  <p>
                    Complete your booking through a simple and convenient
                    booking process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="how_it_works section_padding">
          <div className="container">
            <div className="section_heading text-center">
              <p className="section_small_title">SIMPLE PROCESS</p>

              <h2>
                How <span>MovieHub</span> Works
              </h2>

              <p>Book your favourite movie in just a few simple steps.</p>
            </div>

            <div className="row mt-5">
              {/* STEP 1 */}
              <div className="col-lg-3 col-md-6">
                <div className="step_card">
                  <div className="step_number">01</div>

                  <div className="step_icon">
                    <FaSearch />
                  </div>

                  <h4>Find a Movie</h4>

                  <p>
                    Browse through available movies and select the movie you
                    want to watch.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="col-lg-3 col-md-6">
                <div className="step_card">
                  <div className="step_number">02</div>

                  <div className="step_icon">
                    <FaClock />
                  </div>

                  <h4>Select Show</h4>

                  <p>Choose your preferred theatre and available showtime.</p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="col-lg-3 col-md-6">
                <div className="step_card">
                  <div className="step_number">03</div>

                  <div className="step_icon">
                    <FaChair />
                  </div>

                  <h4>Choose Seat</h4>

                  <p>
                    Select the available seats according to your preference.
                  </p>
                </div>
              </div>

              {/* STEP 4 */}
              <div className="col-lg-3 col-md-6">
                <div className="step_card">
                  <div className="step_number">04</div>

                  <div className="step_icon">
                    <FaCreditCard />
                  </div>

                  <h4>Make Payment</h4>

                  <p>
                    Complete the payment and get your movie booking
                    confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="moviehub_features section_padding">
          <div className="container">
            <div className="row align-items-center">
              {/* LEFT CONTENT */}
              <div className="col-lg-6 mb-4 mb-lg-0">
                <p className="section_small_title">MOVIEHUB FEATURES</p>

                <h2>
                  Everything In <span>One Place</span>
                </h2>

                <p className="features_intro">
                  MovieHub provides all the essential features needed for a
                  smooth movie booking experience.
                </p>

                <div className="feature_list">
                  <div className="feature_list_item">
                    <FaCheckCircle />
                    <span>Browse and discover movies</span>
                  </div>

                  <div className="feature_list_item">
                    <FaCheckCircle />
                    <span>View detailed movie information</span>
                  </div>

                  <div className="feature_list_item">
                    <FaCheckCircle />
                    <span>Select theatres and showtimes</span>
                  </div>

                  <div className="feature_list_item">
                    <FaCheckCircle />
                    <span>Choose available seats</span>
                  </div>

                  <div className="feature_list_item">
                    <FaCheckCircle />
                    <span>Secure booking and payment process</span>
                  </div>

                  <div className="feature_list_item">
                    <FaCheckCircle />
                    <span>Manage your movie bookings</span>
                  </div>
                </div>
              </div>

              {/* RIGHT BOX */}
              <div className="col-lg-6">
                <div className="experience_box">
                  <FaFilm className="experience_icon" />

                  <h3>Your Movie.</h3>

                  <h3>Your Theatre.</h3>

                  <h3 className="highlight_text">Your Seat.</h3>

                  <p>Sit back, relax and enjoy the show.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="about_cta">
          <div className="container text-center">
            <h2>Ready For Your Next Movie?</h2>

            <p>Find your movie, choose your seat and enjoy the show.</p>

            <Link to="/movies" className="about_cta_btn">
              Book Your Movie
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
