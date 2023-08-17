const passport = require("passport");
const loginView = (req, res) => {
  res.status().send(200);
};

const loginUser = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha vazios" });
  } else {
    passport.authenticate("local", {
      successRedirect: "/register",
      failureRedirect: console.log("not"),
      failureFlash: true,
    })(req, res, next);
  }
};

module.exports = {
  loginView,
  loginUser,
};
