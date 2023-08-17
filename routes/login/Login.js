const express = require("express");
const {
  loginView,
  loginUser,
} = require("../../src/services/login/controllers/LoginController");

const router = express.Router();

router.get("/login", loginView);

router.post("/login", loginUser);

module.exports = router;
