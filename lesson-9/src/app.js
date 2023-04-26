const path = require("path");
const express = require("express");

const app = express();

app.use("/avatar", express.static(path.join(__dirname, "uploads")));

app.get("/ping", (__, res) => {
  res.send("pong");
});

app.use(require("./routes"));

module.exports = app;
