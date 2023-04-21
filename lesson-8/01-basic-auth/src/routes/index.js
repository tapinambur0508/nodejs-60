const router = require("express").Router();

const authMiddleware = require("../middleware/auth");

const authRoutes = require("./auth");
const bookRoutes = require("./books");

router.use("/auth", authRoutes);
router.use("/books", authMiddleware, bookRoutes);

module.exports = router;
