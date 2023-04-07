const express = require("express");

const app = express();

// Body parser middleware
app.use(express.json());

const jsonParser = express.json();

app.post("/products", jsonParser, (req, res) => {
  const newProduct = req.body;

  console.log({ newProduct });

  res.end();
});

app.post("/customers", (req, res) => {
  const newCustomers = req.body;

  console.log({ newCustomers });

  res.end();
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
