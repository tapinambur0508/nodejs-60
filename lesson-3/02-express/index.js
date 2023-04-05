const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.method, req.url);
  res.end("Hello World!");
});

app.get("/movies", (req, res) => {
  res.json([{ title: "The Godfather" }]);
  // res.send([{ title: "The Godfather" }]);
});

app.post("/movies", (req, res) => {
  console.log(req.method, req.url);
  res.end("Movies");
});

app.all("/products", (req, res) => {
  console.log(req.method, req.url);
  res.send("Products");
});

app.get("/null", (req, res) => {
  res.json(null);
  // res.send(null);
});

app.all("*", (req, res) => {
  res.json({ method: req.method, url: req.url });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
