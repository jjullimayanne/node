const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
//export default mongoose.models.Pet || mongoose.model('Pet', PetSchema)
///export const User = mongoose.model('User', user);
const User =  mongoose.models.User || mongoose.model("Users", UserSchema);
module.exports = User;
