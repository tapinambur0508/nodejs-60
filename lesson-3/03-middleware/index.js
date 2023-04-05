const fs = require("fs/promises");
const express = require("express");
const morgan = require("morgan");

const app = express();

function checkApiKey(req, res, next) {
  const { apiKey } = req.query;

  if (apiKey === "12345") {
    return next();
  }

  return res.status(401).json({ error: "Unauthorized" });
}

app.use(checkApiKey);
app.use(morgan("combined"));

app.get("/", async (req, res) => {
  try {
    const data = await fs.readFile("data.json", "utf-8");

    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log("Serve listening on port 3000!");
});
