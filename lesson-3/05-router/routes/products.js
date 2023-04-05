const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Get Products");
});

router.get("/:id", (req, res) => {
  res.send("Get Product");
});

router.post("/", (req, res) => {
  res.send("Create Product");
});

router.put("/:id", (req, res) => {
  res.send("Update Product");
});

router.delete("/:id", (req, res) => {
  res.send("Delete Product");
});

module.exports = router;
