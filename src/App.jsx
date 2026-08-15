import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import Bookings from "./Components/Bookings";
import About from "./Components/About";
import Users from "./Components/Users";
import Dashboard from "./Components/AdminPanel/Dashboard";
import Movie from "./Components/AdminPanel/Movie";
import Theatre from "./Components/AdminPanel/Theatre";
import Booking from "./Components/AdminPanel/Booking";
import Shows from "./Components/AdminPanel/Shows";
import Seats from "./Components/AdminPanel/Seats";
import Snacks from "./Components/AdminPanel/Snacks";
import Feedback from "./Components/AdminPanel/Feedback";
import Payments from "./Components/AdminPanel/Payments";
import UserProfile from "./Components/UserPanel/UserProfile";
import UserBooking from "./Components/UserPanel/UserBooking";
import UserPayment from "./Components/UserPanel/UserPayment";
import UserFeedback from "./Components/UserPanel/UserFeedback";
import UserHelp from "./Components/UserPanel/UserHelp";
import MovieDisplay from "./Components/Movies/MovieDisplay";
import MovieDetails from "./Components/MovieDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<MovieDisplay />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="movie" element={<Movie />} />
          <Route path="theatres" element={<Theatre />} />
          <Route path="booking" element={<Booking />} />
          <Route path="shows" element={<Shows />} />
          <Route path="seats" element={<Seats />} />
          <Route path="snacks" element={<Snacks />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="payment" element={<Payments />} />
        </Route>
        <Route path="/user" element={<Users />}>
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="userBooking" element={<UserBooking />} />
          <Route path="userPayment" element={<UserPayment />} />
          <Route path="userFeedback" element={<UserFeedback />} />
          <Route path="userHelp" element={<UserHelp />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
