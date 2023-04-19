const bcrypt = require("bcrypt");

const User = require("../models/user");

function register(req, res, next) {
  const { name, email, password } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(password, salt, (err, hash) => {
      if (err) return next(err);

      User.findOne({ email })
        .then((user) => {
          if (user !== null) {
            return res.status(409).json({ error: "User already exists" });
          }

          return User.create({ name, email, password: hash });
        })
        .then(() => res.status(201).end())
        .catch((err) => next(err));
    });
  });
}

function login(req, res, next) {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user === null) {
        return res.status(401).json({ error: "Email or password is wrong" });
      }

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) return next(err);

        if (result === false) {
          return res.status(401).json({ error: "Email or password is wrong" });
        }

        res.json({ token: "TOKEN" });
      });
    })
    .catch((err) => next(err));
}

module.exports = { register, login };
