require("dotenv").config();
const express = require("express");
const session = require("express-session");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const { loginCheck } = require("./src/auth/passport");
// const swaggerSpec = require("./docs/swagger");
// const swaggerUi = require("swagger-ui-express");

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const dbUrl = process.env.DB_HOST;
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

app.use("/", require("./src/services/login/router/loginRouter"));
app.use("/", require("./src/services/register/router/RegisterRouter"));
const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log("Server has started at port " + PORT));
