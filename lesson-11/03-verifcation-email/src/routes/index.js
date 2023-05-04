const router = require("express").Router();

const authMiddleware = require("../middleware/auth");

const authRoutes = require("./auth");
const bookRoutes = require("./books");
const userRoutes = require("./users");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/books", authMiddleware, bookRoutes);

module.exports = router;
