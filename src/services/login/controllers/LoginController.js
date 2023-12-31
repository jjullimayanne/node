//const passport = require("passport");
const loginView = (req, res) => {
  res.status().send(202);
};

const loginUser = (req, res, next, passport) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email ou senha vazios" });
  }

  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/error",
    failureFlash: true, //
  })(req, res, next);
};

module.exports = {
  loginView,
  loginUser,
};
