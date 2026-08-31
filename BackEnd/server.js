const express = require("express");
const path = require("path");
const connectDB = require("./Configuration/config");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

//Load environment variable here
dotenv.config();

// Package use for UI Intregation
app.use(cors());

// middleware
app.use(express.json());

// connection to database
connectDB(process.env.MONGO_URI);

// Routing set up for User
app.use("/api/user", require("./Routes/UserRoutes"));

// Routing set up for admin
app.use("/api/admin", require("./Routes/MovieRoutes"));
app.use("/api/admin", require("./Routes/TheatreRoutes"));
app.use("/api/admin", require("./Routes/SnacksRoutes"));

// Routing set up for publically access
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running at Port : ${PORT}`);
});
