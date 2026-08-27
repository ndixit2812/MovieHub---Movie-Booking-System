import React from "react";
import { ReactTyped } from "react-typed";
import Navbar from "../Utilities/Navbar";

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
                  src="/Movies/m0.jpg"
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
                  src="/Movies/m4.jpg"
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
                  src="/Movies/m3.jpg"
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
                  src="/Movies/m0.jpg"
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
                  src="/Movies/m4.jpg"
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
                  src="/Movies/m3.jpg"
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
        <section className="snack_section">
          <p className="para1">Snacks</p>
          <p className="para2">
            <span>Taste & Entertainment</span> like <span>Snacks & Movie </span>
            together
          </p>
          <div className="snack_main_board">
            {/* snack 1 */}
            <div className="snack_card">
              <div className="snack_image">
                <img src="/Snack/snack16.jpg" alt="image" />
              </div>
            </div>

            {/* Snack 2 */}
            <div className="snack_card">
              <div className="snack_image">
                <img src="/Snack/snack24.jpg" alt="image" />
              </div>
            </div>

            {/* snack 3 */}
            <div className="snack_card">
              <div className="snack_image">
                <img src="/Snack/snack25.jpg" alt="image" />
              </div>
            </div>

            {/* Snack 4 */}
            <div className="snack_card">
              <div className="snack_image">
                <img src="/Snack/snack6.jpg" alt="image" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
