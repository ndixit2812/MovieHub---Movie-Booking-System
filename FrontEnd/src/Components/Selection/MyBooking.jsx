import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Utilities/Navbar";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMyBookings = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("Please log in to view your bookings.");
          return;
        }

        const response = await axios.get(
          "http://localhost:5000/api/booking/myBookings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setBookings(response.data.bookings || []);
      } catch (err) {
        console.error(
          "Fetch My Bookings Error:",
          err.response?.data || err.message,
        );

        setError(
          err.response?.data?.message || "Unable to load your bookings.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMyBookings();
  }, []);

  if (loading) {
    return <div className="container mt-4">Loading your bookings...</div>;
  }

  if (error) {
    return (
      <div className="container mt-4">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="booking_page">
        <p className="p_r mb-4">My Booking</p>

        <div className="container mt-4 booking_main_layout">
          {bookings.length === 0 ? (
            <p>You haven't booked any movies yet.</p>
          ) : (
            bookings.map((booking) => (
              <div
                className="booking_movie_box mb-4 shadow-sm"
                key={booking._id}
              >
                <div className="booking_movie_title">
                  <h4>
                    {booking.show?.movie?.title || "Movie details unavailable"}
                  </h4>

                  <p className="booking_theatre_title">
                    <strong>Theatre:</strong>{" "}
                    {booking.show?.theatre?.name || "N/A"}
                  </p>

                  <p className="booking_screen_title">
                    <strong>Screen: </strong>
                    {""}
                    {booking.show?.screen?.screenName || "N/A"}
                  </p>

                  <p className="booking_show_date">
                    <strong>Show Date:</strong>{" "}
                    {booking.show?.showDate
                      ? new Date(booking.show.showDate).toLocaleDateString()
                      : "N/A"}
                  </p>

                  <p className="booking_show_time">
                    <strong>Show Time:</strong>{" "}
                    {booking.show?.startTime || "N/A"}
                  </p>

                  <p className="booking_seats">
                    <strong>Seats:</strong>{" "}
                    {booking.seats
                      .map(
                        (seat) => `${seat.seatNumber} (${seat.seatCategory})`,
                      )
                      .join(", ")}
                  </p>

                  <p className="booking_snacks">
                    <strong>Snacks:</strong>{" "}
                    {booking.snacks.length > 0
                      ? booking.snacks
                          .map((snack) => `${snack.name} x ${snack.quantity}`)
                          .join(", ")
                      : "None"}
                  </p>

                  {/* <hr /> */}

                  <p className="booking_ticket_amount">
                    <strong>Ticket Amount:</strong> ₹{booking.seatAmount}
                  </p>

                  <p className="booking_snacks_amount">
                    <strong>Snacks Amount:</strong> ₹{booking.snackAmount}
                  </p>

                  <p className="booking_convenience_fee">
                    <strong>Convenience Fee:</strong> ₹{booking.convenienceFee}
                  </p>

                  <p className="booking_total_amount">
                    <span className="booking_title">Total Amount:</span>
                    <span className="booking_amount">
                      {" "}
                      ₹{booking.totalAmount}
                    </span>
                  </p>

                  <p className="booking_payment_status">
                    <strong>Payment Status:</strong>{" "}
                    <span>{booking.paymentStatus}</span>
                  </p>

                  <p className="booking_booking_status">
                    <strong>Booking Status:</strong>{" "}
                    <span>{booking.bookingStatus}</span>
                  </p>

                  <p className="booking_booking_id">
                    <strong>Booking ID:</strong> {booking._id}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* <div className="container mb-5">
          {bookings.length === 0 ? (
            <p>You haven't booked any movies yet.</p>
          ) : (
            bookings.map((booking) => (
              <div className="card mb-4 shadow-sm" key={booking._id}>
                <div className="card-body">
                  <h4>
                    {booking.show?.movie?.title || "Movie details unavailable"}
                  </h4>

                  <p>
                    <strong>Theatre:</strong>{" "}
                    {booking.show?.theatre?.name || "N/A"}
                  </p>

                  <p>
                    <strong>Screen: </strong>
                    {""}
                    {booking.show?.screen?.screenName || "N/A"}
                  </p>

                  <p>
                    <strong>Show Date:</strong>{" "}
                    {booking.show?.showDate
                      ? new Date(booking.show.showDate).toLocaleDateString()
                      : "N/A"}
                  </p>

                  <p>
                    <strong>Show Time:</strong>{" "}
                    {booking.show?.startTime || "N/A"}
                  </p>

                  <p>
                    <strong>Seats:</strong>{" "}
                    {booking.seats
                      .map(
                        (seat) => `${seat.seatNumber} (${seat.seatCategory})`,
                      )
                      .join(", ")}
                  </p>

                  <p>
                    <strong>Snacks:</strong>{" "}
                    {booking.snacks.length > 0
                      ? booking.snacks
                          .map((snack) => `${snack.name} x ${snack.quantity}`)
                          .join(", ")
                      : "None"}
                  </p>

                  <hr />

                  <p>
                    <strong>Ticket Amount:</strong> ₹{booking.seatAmount}
                  </p>

                  <p>
                    <strong>Snacks Amount:</strong> ₹{booking.snackAmount}
                  </p>

                  <p>
                    <strong>Convenience Fee:</strong> ₹{booking.convenienceFee}
                  </p>

                  <h5>Total Amount: ₹{booking.totalAmount}</h5>

                  <p>
                    <strong>Payment Status:</strong>{" "}
                    <span className="text-success">
                      {booking.paymentStatus}
                    </span>
                  </p>

                  <p>
                    <strong>Booking Status:</strong>{" "}
                    <span className="text-success">
                      {booking.bookingStatus}
                    </span>
                  </p>

                  <p className="text-muted mb-0">
                    <strong>Booking ID:</strong> {booking._id}
                  </p>
                </div>
              </div>
            ))
          )}
        </div> */}
    </>
  );
};

export default MyBookings;
