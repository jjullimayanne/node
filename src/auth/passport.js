// const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
//Load model

const User = require("../services/register/models/RegisterModel");

const loginCheck = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          console.log("wrong");
          return done(null, false);
        }
        return done(null, user);
      });
    })

  );

  // passport.use(
  //   new LocalStrategy({ usernameField: "email" }, (email, done) => {
  //     User.findOne({ email: email })
  //       .then((user) => {
  //         if (!user) {
  //           /// res.status(400).json({ message: "Email erradoo" });
  //           return done(null, false, { message: "Credenciais inválidas" });
  //         }
  //         ///return done(null, user, { message: "asda" });

  //         //Match Password

  //         // bcrypt.compare(password, user.password, (error, isMatch) => {
  //         //   if (error) throw error;
  //         //   if (isMatch) {
  //         //     return done(null, user);
  //         //   } else {
  //         //     console.log("Wrong password");
  //         //     return done();
  //         //   }
  //         // });
  //       })
  //       .catch((error) => {
  //         console.error("Erro:", error.message);
  //       });
  //   })
  // );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {
      done(error, user);
    });
  });

  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/error",
    failureFlash: true, //
  });
};

module.exports = {
  loginCheck,
};
