const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const { loginCheck } = require("./src/auth/passport");
loginCheck(passport);
const dbUrl = process.env.DB_HOST;

// Mongo DB conncetion
const database = dbUrl;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("e don connect"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes/login/login"));
app.use("/", require("./routes/register/register"));

const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log("Server has started at port " + PORT));
