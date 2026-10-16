import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Admin from "./Components/AdminPanel/Admin";
import Login from "./Components/Login";
import About from "./Components/About";
import Users from "./Components/UserPanel/Users";
import Dashboard from "./Components/AdminPanel/Dashboard";
// import Movie from "./Components/AdminPanel/AddMovie";
// import Theatre from "./Components/AdminPanel/AddTheatre";
import Booking from "./Components/AdminPanel/Booking";
// import Shows from "./Components/AdminPanel/Shows";
// import Seats from "./Components/AdminPanel/AddSeats";
// import Snacks from "./Components/AdminPanel/AddSnack";
import Feedback from "./Components/AdminPanel/Feedback";
import Payments from "./Components/AdminPanel/Payments";
import UserProfile from "./Components/UserPanel/UserProfile";
import UserBooking from "./Components/UserPanel/UserBooking";
import UserPayment from "./Components/UserPanel/UserPayment";
import UserFeedback from "./Components/UserPanel/UserFeedback";
import UserHelp from "./Components/UserPanel/UserHelp";
import MovieDisplay from "./Components/Movies/MovieDisplay";
import MovieDetails from "./Components/MovieDetails";
import Register from "./Components/Register";
// import SelectShow from "./Components/Selection/SelectShow";
import SelectScreen from "./Components/Selection/SelectScreen";
import SelectSeat from "./Components/Selection/SelectSeat";
import SelectSnacks from "./Components/Selection/SelectSnacks";
// import SelectPayment from "./Components/Selection/SelectPayment";
// import MakePayment from "./Components/Selection/MakePayment";
import AddScreen from "./Components/AdminPanel/AddScreen";
import AddMovie from "./Components/AdminPanel/AddMovie";
import AddTheatre from "./Components/AdminPanel/AddTheatre";
import AddSeats from "./Components/AdminPanel/AddSeats";
import AddSnack from "./Components/AdminPanel/AddSnack";
import AddShow from "./Components/AdminPanel/AddShow";
import BookingSummary from "./Components/Selection/BookingSummary";
import Payment from "./Components/Selection/Payment";
import SelectTheatre from "./Components/Selection/SelectTheatre";
import SelectShow from "./Components/Selection/SelectShow";
import MyBooking from "./Components/Selection/MyBooking";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<MovieDisplay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
        <Route path="/selectTheatre/:id" element={<SelectTheatre />} />
        <Route
          path="/selectScreen/:movieId/:theatreId"
          element={<SelectScreen />}
        />
        <Route
          path="/selectShow/:movieId/:theatreId/:screenId"
          element={<SelectShow />}
        />
        <Route path="/selectSeat/:showId" element={<SelectSeat />} />
        <Route path="/selectSnacks" element={<SelectSnacks />} />
        <Route path="/bookingSummary" element={<BookingSummary />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/myBooking" element={<MyBooking />} />
        {/* ********************************************************************************* */}
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="movie" element={<AddMovie />} />
          <Route path="theatres" element={<AddTheatre />} />
          <Route path="booking" element={<Booking />} />
          <Route path="shows" element={<AddShow />} />
          <Route path="addScreen" element={<AddScreen />} />
          <Route path="seats" element={<AddSeats />} />
          <Route path="snacks" element={<AddSnack />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="payment" element={<Payments />} />
        </Route>
        {/* *************************************************************************************** */}
        <Route path="/user" element={<Users />}>
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="userBooking" element={<UserBooking />} />
          <Route path="userPayment" element={<UserPayment />} />
          <Route path="userFeedback" element={<UserFeedback />} />
          <Route path="userHelp" element={<UserHelp />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
