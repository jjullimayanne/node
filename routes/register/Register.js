const express = require("express");

const {
  registerView,
  registerUser,
} = require("../../src/services/register/controllers/RegisterController");

const router = express.Router();

router.get("/register", registerView);

router.post("/register", registerUser);


module.exports = router;
