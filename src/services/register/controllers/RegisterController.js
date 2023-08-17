const passport = require("passport");
const User = require("../../login/models/user");
const bcrypt = require("bcryptjs");

//For Register Page
const registerView = (req, res) => {
  res.status().sendStatus(200);
};

//Post Request for Register

async function registerUser(req, res) {
  const { name, email, location, password, confirm } = req.body;

  //   bcrypt.genSalt(10, (err, salt) =>
  //     bcrypt.hash(newUser.password, salt, (err, hash) => {
  //       if (err) throw err;

  //       newUser.password = hash;
  //       newUser
  //         .save()
  //         .then(res.console.log("/login"))
  //         .catch((err) => console.log(err));
  //     })
  //   );

  if (!name || !email || !password || !confirm) {

    return res.status(400).json({ message: "Fill empty fields" });
  }

  //   //Confirm Passwords

  if (password !== confirm) {
    return res.status(400).json({ message: "Password must match" });
  } else {
    //Validation
    User.findOne({ email: email }).then((user) => {
      if (user) {
        //throw new Error("Usuario ja cadastrado");
       
        res.render("register", {
          name,
          email,
          password,
          confirm,
        });
        return res.status(400).json({ message: "Email já registrado" });
      } else {
        const newUser = new User({
          name,
          email,
          location,
          password,
        });

        newUser.save();
        return res.status(201).json({ message: "Registro bem-sucedido" });
        //Validation
        // const newUser = new User({
        //   name,
        //   email,
        //   location,
        //   password,
        // });
        //Password Hashing
        // bcrypt.genSalt(10, (err, salt) =>
        //   bcrypt.hash(newUser.password, salt, (err, hash) => {
        //     if (err) throw err;
        //     newUser.password = hash;
        //     newUser
        //       .save()
        //       .then(res.redirect("/login"))
        //       .catch((err) => console.log(err));
        //   })
        // );
      }
    });
  }
}

module.exports = {
  registerView,
  registerUser,
};
