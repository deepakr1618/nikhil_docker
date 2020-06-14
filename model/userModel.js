var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var User = new Schema({
  fullname: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  password: {
    type: String,
  },
});
module.exports = mongoose.model("User", User, "User");
