import React, { useEffect, useState } from "react";
import axios from "axios";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:5000/api/booking/allBookings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setBookings(response.data.bookings || []);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError(err.response?.data?.message || "Unable to fetch bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <p>Loading bookings...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div className="container-fluid py-3">
      <h3 className="mb-4">Manage Bookings</h3>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>SR.NO</th>
                <th>Customer</th>
                <th>Movie</th>
                <th>Theatre</th>
                <th>Show Date</th>
                <th>Show Time</th>
                <th>Seats</th>
                <th>Snacks</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Booking Status</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking._id}>
                  <td>{index + 1}</td>

                  <td>
                    {booking.user?.userName || "N/A"}
                    <br />
                    <small>{booking.user?.email || ""}</small>
                  </td>

                  <td>
                    {booking.show?.movie?.title ||
                      booking.show?.movie?.name ||
                      "N/A"}
                  </td>

                  <td>{booking.show?.theatre?.name || "N/A"}</td>

                  <td>
                    {booking.show?.showDate
                      ? new Date(booking.show.showDate).toLocaleDateString(
                          "en-IN",
                        )
                      : "N/A"}
                  </td>

                  <td>{booking.show?.startTime || "N/A"}</td>

                  <td>
                    {booking.seats?.length
                      ? booking.seats.map((seat) => seat.seatNumber).join(", ")
                      : "N/A"}
                  </td>

                  <td>
                    {booking.snacks?.length
                      ? booking.snacks
                          .map(
                            (snack) =>
                              `${snack.name || snack.snack?.name || "Snack"} x${snack.quantity}`,
                          )
                          .join(", ")
                      : "None"}
                  </td>

                  <td>₹{booking.totalAmount ?? 0}</td>

                  <td>{booking.paymentStatus || "N/A"}</td>

                  <td>{booking.bookingStatus || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Booking;
