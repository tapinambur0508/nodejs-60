const express = require("express");

const router = express.Router();

const UserController = require("../controllers/user");

router.get("/verify/:token", UserController.verify);

module.exports = router;
