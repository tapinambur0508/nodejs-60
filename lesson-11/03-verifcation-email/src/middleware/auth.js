const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (typeof authHeader === "undefined") {
    return res.status(401).json({ message: "No token provided" });
  }

  const [bearer, token] = authHeader.split(" ", 2);

  if (bearer !== "Bearer") {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = decoded;

    next();
  });
}

module.exports = auth;
