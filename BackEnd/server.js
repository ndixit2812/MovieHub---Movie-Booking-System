const express = require("express");
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

// Routing set up
app.use("/api/user", require("./Routes/UserRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running at Port : ${PORT}`);
});
