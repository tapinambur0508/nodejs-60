const User = require("../models/user");

async function create(req, res, next) {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  try {
    await User.create(user);

    return res.status(201).end();
  } catch (error) {
    next(error);
  }
}

async function uploadAvatar(req, res, next) {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      avatarURL: req.file.filename,
    });

    return res.status(200).end();
  } catch (error) {
    next(error);
  }
}

module.exports = { create, uploadAvatar };
