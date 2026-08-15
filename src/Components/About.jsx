import React from "react";
import Navbar from "../Utilities/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid about_page">
        <div className="about_title">
          <h2>MovieHub - Movie Booking System </h2>
        </div>
        <div className="about_description">
          <p>
            The **Movie Hub** is a MERN stack web application built to simulate
            a real-world online movie ticket booking platform. The project is
            structured into separate modules for users, movies, theatres, shows,
            seats, bookings, payments, and administration. ### Project Features
            * **User Module** * User registration and login * Secure
            authentication and authorization * User profile management * View
            booking history * **Movie Module** * Browse available movies * Movie
            details and descriptions * Movie categories/types * Movie poster and
            related information * Movie search and filtering * **Theatre &
            Screen Module** * Manage multiple theatres * Manage screens within
            theatres * Different seating layouts for screens * Seat categories
            such as Silver, Gold, and Diamond * **Show Module** * Create and
            manage movie shows * Different show timings for the same movie *
            Assign movies to specific theatres and screens * Manage show
            schedules * **Seat Management** * Display seat layout for each show
            * Track individual seat availability * Seat status management: *
            Available * Locked * Booked * Show-specific seat availability *
            **Booking Module** * Select multiple seats * Create ticket bookings
            * Calculate total booking amount * Temporarily lock selected seats *
            Confirm or cancel bookings * View booking details * **Payment
            Module** * Payment initiation * Payment status management *
            Successful payment handling * Failed payment handling * Booking
            confirmation after successful payment * **Snacks Module** * Browse
            available snacks * Different snack categories * Add snacks to
            booking * Calculate snack charges with ticket amount * **Admin
            Module** * Admin authentication * Manage movies * Manage theatres *
            Manage screens * Manage seats * Manage shows * Manage bookings *
            Manage users * Manage snacks * Monitor payment and booking
            information * **Booking Automation** * Automatic release of
            temporarily locked seats * Scheduled background process for expired
            bookings * Maintain accurate seat availability ### Core Project Flow
            **User → Movie → Theatre → Screen → Show → ShowSeat → Seat Selection
            → Booking → Payment → Confirmed Booking** The application is built
            using **React.js** for the frontend, **Node.js and Express.js** for
            the backend, and **MongoDB** for database management, with a modular
            architecture designed to handle the complete movie booking
            lifecycle.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
