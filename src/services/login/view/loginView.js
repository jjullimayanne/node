// const loginView = (req, res) => {
//   res.render("login", {});
// };

// module.exports = {
//   loginView,
// };


// const loginUser = (req, res) => {
//     const { email, password } = req.body;
  
//     //Required
//     if (!email || !password) {
//       console.log("Please fill in all the fields");
//       res.render("login", {
//         email,
//         password,
//       });
//     } else {
//       passport.authenticate("local", {
//         successRedirect: console.log("Login success"),
//         failureRedirect: "/login",
//         failureFlash: true,
//       })(req, res);
//     }
//   };