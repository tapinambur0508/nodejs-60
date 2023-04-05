const cors = require("cors");
const express = require("express");

const app = express();

// app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", cors(), (req, res) => {
  res.send("Products");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
