const path = require("path");
const crypto = require("crypto");

const multer = require("multer");
const express = require("express");

const UserController = require("../controllers/user");

const router = express.Router();
const jsonParser = express.json();

const storage = multer.diskStorage({
  destination: function (__, ___, cb) {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: function (__, file, cb) {
    // TrevorPhilips-GTAV.png - file.originalname
    const uniqueSuffix = crypto.randomUUID(); // 1b2469b9-befd-46b9-b042-fae200698888
    const ext = path.extname(file.originalname); // .png
    const baseName = path.basename(file.originalname, ext); // TrevorPhilips-GTAV

    cb(null, baseName + "-" + uniqueSuffix + ext); //  TrevorPhilips-GTAV-1b2469b9-befd-46b9-b042-fae200698888.png
  },
});

const upload = multer({ storage });

router.get("/", (req, res, next) => {
  res.send("User list");
});

router.get("/:id", (req, res, next) => {
  res.end(`User ${req.params.id}`);
});

router.post("/", jsonParser, UserController.create);

router.post(
  "/:id/avatar",
  upload.single("avatar"),
  UserController.uploadAvatar
);

router.put("/:id", (req, res, next) => {
  res.end("Update user");
});

router.delete("/:id", (req, res, next) => {
  res.end("Delete user");
});

module.exports = router;
