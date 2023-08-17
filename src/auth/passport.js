// const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
//Load model

const User = require("../services/register/models/RegisterModel");

const loginCheck = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      (email, password, done) => {
        User.findOne({ email: email })
          .then((user) => {
            if (!user) {
              res.status(400).json({ message: "Email erradoo" });
              return done({ message: "Credenciais inválidas" });
            }

            //Match Password

            // bcrypt.compare(password, user.password, (error, isMatch) => {
            //   if (error) throw error;
            //   if (isMatch) {
            //     return done(null, user);
            //   } else {
            //     console.log("Wrong password");
            //     return done();
            //   }
            // });
          })
          .catch((error) => res.status(400).json({ message: error }));
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {
      done(error, user);
    });
  });
};

module.exports = {
  loginCheck,
};
