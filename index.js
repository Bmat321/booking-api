const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");
const roomsRoute = require("./routes/rooms.js");
const hotelsRoute = require("./routes/hotels.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const app = express();
dotenv.config();

mongoose.connection.on("diconnected", () => {
  console.log("mongoDB disconnected!");
});

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("conneted to MongoDB");
  } catch (err) {
    throw err;
  }
};

// middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true)
  next()
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT, () => {
  connect();
  console.log("connected to backend.");
});
