const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./app/routes");
const dotenv = require("dotenv");
require("dotenv").config();

app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    exposedHeaders: "Authorization",
    credentials: true,
  })
);
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, async () => {
  try {
    await connectToDatabase();
  } catch (error) {
    console.log(error);
  }
});

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};
