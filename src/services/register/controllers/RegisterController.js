const User = require("../../login/models/user");

const registerView = (req, res) => {
  res.status().sendStatus(200);
};

async function registerUser(req, res) {
  const { name, email, location, password, confirm } = req.body;

  if (!name || !email || !password || !confirm) {
    return res.status(400).json({ message: "Fill empty fields" });
  }

  if (password !== confirm) {
    return res.status(400).json({ message: "Password must match" });
  }

  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(400).json({ message: "Email já registrado" });
    }
    const newUser = new User({
      name,
      email,
      location,
      password,
    });

    newUser.save();
    return res.status(201).json({ message: "Registro bem-sucedido" });
  });
}

module.exports = {
  registerView,
  registerUser,
};
