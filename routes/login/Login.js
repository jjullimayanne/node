const express = require("express");
const {
  loginView,
  loginUser,
} = require("../../src/services/login/controllers/LoginController");
const passport = require("passport");
const router = express.Router();

router.get("/login", loginView);

router.post("/login", loginUser);

router.get("/home", (req, res) => {
  res.status(200).json({ message: "home" });
});

module.exports = router;
