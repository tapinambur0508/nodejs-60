require("dotenv").config();

const mongoose = require("mongoose");

const url = process.env.DB_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
