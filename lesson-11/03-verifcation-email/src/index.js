require("./db");

const express = require("express");

const routes = require("./routes");

const app = express();

app.use(routes);

const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
