const express = require("express");
const {
  loginView,
  loginUser,
} = require("../../src/services/login/controllers/LoginController");
///const passport = require("passport");
const router = express.Router();
const passport = require("passport");
router.get("/login", loginView);

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/error",
    failureFlash: true, //
  })
);

// app.get('/', (req, res) => {
//   if (req.isAuthenticated()) {
//     res.send('Página protegida! Olá, ' + req.user.username);
//   } else {
//     res.redirect('/login');
//   }
// });

router.get("/home", (req, res) => {
  res.status(200).json({ message: "home" });
});

router.get("/error", (req, res) => {
  res.status(400).json({ message: "pag de erro" });
});

module.exports = router;
