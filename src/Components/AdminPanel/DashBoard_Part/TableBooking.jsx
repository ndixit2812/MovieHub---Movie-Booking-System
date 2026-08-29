import React from "react";

const TableBooking = () => {
  return (
    <div className="table_booking_main_frame">
      <p>Recent Bookings</p>
      <div className="row">
        <div className="col-md-12">
          <table class="table table-custom">
            <thead>
              <tr>
                <th scope="col">BookID</th>
                <th scope="col">Users</th>
                <th scope="col">Movie</th>
                <th scope="col">Show Time</th>
                <th scope="col">Seat</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">BK1025</td>
                <td>Rahul</td>
                <td>Avenger</td>
                <td>Today 7.30 P.M</td>
                <td>A1,A2</td>
                <td>&#8377;480</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success button-custom"
                  >
                    Confirm
                  </button>
                </td>
              </tr>
              <tr>
                <td scope="row">BK1026</td>
                <td>Mayank</td>
                <td>Black Day</td>
                <td>Today 1.30 P.M</td>
                <td>C3,C4</td>
                <td>&#8377;500</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger button-custom"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
              <tr>
                <td scope="row">BK1027</td>
                <td>Ravi</td>
                <td>Spider-Man</td>
                <td>Yesterday 1.00 P.M</td>
                <td>B3,B4</td>
                <td>&#8377;480</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning button-custom"
                  >
                    Pending
                  </button>
                </td>
              </tr>
              <tr>
                <td scope="row">BK1025</td>
                <td>Shivam</td>
                <td>Infinity</td>
                <td>Today 10.30 P.M</td>
                <td>A3,A4</td>
                <td>&#8377;480</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success button-custom"
                  >
                    Confirm
                  </button>
                </td>
              </tr>
              <tr>
                <td scope="row">BK1026</td>
                <td>Mayank</td>
                <td>Black Day</td>
                <td>Today 1.30 P.M</td>
                <td>C3,C4</td>
                <td>&#8377;500</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger button-custom"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableBooking;
