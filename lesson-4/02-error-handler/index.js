const fs = require("fs/promises");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.get("/products", (req, res, next) => {
  fs.readFile("./products.json", "utf-8")
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => next(err));
});

app.get("/products/:id", (req, res, next) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  fs.readFile("./products.json", "utf-8").then((data) => {
    const products = JSON.parse(data);

    const product = products.find((product) => product.id === id);

    if (typeof product === "undefined") {
      // return res.status(404).json({ message: "Product not found" });
      const error = new Error("Product not found");
      error.status = 404;
      return next(error);
    }

    res.json(product);
  });
});

// Handle 404
app.use((req, res) => {
  return res.status(404).json({ error: "Route not found" });
});

// Handle 500
app.use((err, __, res, ___) => {
  console.log(err);
  return res
    .status(err.status || 500)
    .json({ error: err.message || "Internal server error" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
