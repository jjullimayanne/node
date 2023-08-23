const express = require("express");

const {
  registerView,
  registerUser,
} = require("../controllers/RegisterController");

const router = express.Router();

router.get("/register", registerView);

router.post("/register", registerUser);

module.exports = router;
