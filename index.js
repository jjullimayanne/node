const express = require("express");
require("dotenv").config();
const session = require("express-session");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const { loginCheck } = require("./src/auth/passport");
// const swaggerSpec = require("./docs/swagger");
// const swaggerUi = require("swagger-ui-express");

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const dbUrl = process.env.DB_HOST;
const flash = require("connect-flash");
loginCheck(passport);

const database = dbUrl;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("e don connect"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(
  session({
    secret: "Node api",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
///app.use(flash());

app.use("/", require("./routes/login/login"));
app.use("/", require("./routes/register/register"));

const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log("Server has started at port " + PORT));
