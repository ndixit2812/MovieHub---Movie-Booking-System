import React from "react";
import { ReactTyped } from "react-typed";
import Navbar from "../Utilities/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home_page">
        {/* MAIN HERO SECTION */}
        <section className="hero">
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
        </section>
        {/* ================= NOW SHOWING MOVIES ================= */}
        <section className="showing_movies">
          <p>
            Now Showing <span>Movies</span>
          </p>
          <div className="showing_movies_board">
            {/* MOVIE CARD 1 */}
            <div className="movies_card">
              <div className="movie_image">
                <img
                  src="/Movies/m0.jpg"
                  alt="image"
                  width={300}
                  height={350}
                />
              </div>
              <div className="movie_details">
                <span>Watch it</span>
              </div>
            </div>

            {/* MOVIE CARD 2 */}
            <div className="movies_card">
              <div className="movie_image">
                <img
                  src="/Movies/m4.jpg"
                  alt="image"
                  width={300}
                  height={350}
                />
              </div>
              <div className="movie_details">
                <span>Experience it</span>
              </div>
            </div>

            {/* MOVIE CARD 3 */}
            <div className="movies_card">
              <div className="movie_image">
                <img
                  src="/Movies/m3.jpg"
                  alt="image"
                  width={300}
                  height={350}
                />
              </div>
              <div className="movie_details">
                <span>Review it</span>
              </div>
            </div>
          </div>
        </section>
        {/* ================= UP COMING MOVIES ================= */}
        <section className="coming_movies">
          <p>
            Up Coming <span>Movies</span>
          </p>
          <div className="showing_movies_board">
            {/* MOVIE CARD 1 */}
            <div className="movies_card">
              <div className="movie_image">
                <img
                  src="/Movies/m11.jpg"
                  alt="image"
                  width={300}
                  height={350}
                />
              </div>
              <div className="coming_movie_details">
                <span>Watch it</span>
              </div>
            </div>

            {/* MOVIE CARD 2 */}
            <div className="movies_card">
              <div className="movie_image">
                <img
                  src="/Movies/m12.jpg"
                  alt="image"
                  width={300}
                  height={350}
                />
              </div>
              <div className="coming_movie_details">
                <span>Experience it</span>
              </div>
            </div>

            {/* MOVIE CARD 3 */}
            <div className="movies_card">
              <div className="movie_image">
                <img
                  src="/Movies/m13.jpg"
                  alt="image"
                  width={300}
                  height={350}
                />
              </div>
              <div className="coming_movie_details">
                <span>Review it</span>
              </div>
            </div>
          </div>
        </section>
        {/* ================= POPULAR MOVIES ================= */}
        <section className="popular_movies">
          <p>
            Popular <span>Movies</span>
          </p>
          <div className="showing_movies_board">
            {/* MOVIE CARD 1 */}
            <div className="movies_card">
              <div className="movie_image">
                <img
                  src="/Movies/m15.jpg"
                  alt="image"
                  width={300}
                  height={350}
                />
              </div>
              <div className="popular_movie_details">
                <span>Watch it</span>
              </div>
            </div>

            {/* MOVIE CARD 2 */}
            <div className="movies_card">
              <div className="movie_image">
                <img
                  src="/Movies/m16.webp"
                  alt="image"
                  width={300}
                  height={350}
                />
              </div>
              <div className="popular_movie_details">
                <span>Experience it</span>
              </div>
            </div>

            {/* MOVIE CARD 3 */}
            <div className="movies_card">
              <div className="movie_image">
                <img
                  src="/Movies/m18.webp"
                  alt="image"
                  width={300}
                  height={350}
                />
              </div>
              <div className="popular_movie_details">
                <span>Review it</span>
              </div>
            </div>
          </div>
        </section>
        {/* =========================THEATRE SECTION================================= */}
        <section className="theatre_section">
          <p className="para1">Theatres</p>
          <p className="para2">
            You will find the experience of <span>Multiple Theatres</span>
          </p>
          <div className="theatre_main_board">
            {/* theatre 1 */}
            <div className="theatre_card">
              <div className="theatre_image">
                <img
                  src="/Theatre/Bharat.webp"
                  alt="image"
                  width={250}
                  height={250}
                />
              </div>
              <div className="theatre_details">
                <p>Multiple Screen | Comfort Seats</p>
                <span>Theatre 01</span>
              </div>
            </div>

            {/* theatre 2 */}
            <div className="theatre_card">
              <div className="theatre_image">
                <img
                  src="/Theatre/PVR.avif"
                  alt="image"
                  width={250}
                  height={250}
                />
              </div>
              <div className="theatre_details">
                <p>Multiple Screen | Comfort Seats</p>
                <span>Theatre 02</span>
              </div>
            </div>

            {/* theatre 3 */}
            <div className="theatre_card">
              <div className="theatre_image">
                <img
                  src="/Theatre/Cineworld.jpg"
                  alt="image"
                  width={250}
                  height={250}
                />
              </div>
              <div className="theatre_details">
                <p>Multiple Screen | Comfort Seats</p>
                <span>Theatre 03</span>
              </div>
            </div>
          </div>
        </section>
        {/* =========================SNACKS SECTION================================= */}
        <section className="about_intro section_padding">
          <div className="container">
            <div className="row align-items-center">
              {/* IMAGE */}
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="about_image_wrapper">
                  <img
                    src="/Snack/snack16.jpg"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </div>
              {/* SNACK CONTENT */}
              <div className="col-lg-6">
                <div className="about_content">
                  <p className="section_small_title">SNACKS</p>

                  <h2>
                    <span>Taste & Entertainment </span> like
                    <span> Snacks & Movie </span>
                    together
                  </h2>

                  <p>
                    Snacks are an optional part of the MovieHub movie-booking
                    experience, allowing users to enjoy their favorite food and
                    beverages while watching a movie.
                  </p>

                  <p>
                    MovieHub provides a convenient way for users to view
                    available snacks along with important details such as the
                    snack name, description, price, image, and availability
                    status.
                  </p>

                  <p>
                    The Snacks feature enhances the overall MovieHub experience
                    by combining movie ticket booking and food selection into a
                    single platform.
                  </p>

                  <Link to="/movies" className="about_btn">
                    Explore Movies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
