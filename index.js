const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const session = require("express-session");
// dotenv.config();
const passport = require("passport");
const bodyParser = require("body-parser");
const { loginCheck } = require("./src/auth/passport");
loginCheck(passport);

// Mongo DB conncetion
const database =
  "mongodb+srv://julli:julli123@cluster0.y6bzbkq.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("e don connect"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

//BodyParsing

//app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes/login/login"));
app.use("/", require("./routes/register/register"));

//Routes
// app.use("/", require("./routes/login"));

const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log("Server has started at port " + PORT));
