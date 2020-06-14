var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Mobile = new Schema({
  product_type: {
    type: String,
  },
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  year: {
    type: String,
  },
  no_of_owners: {
    type: String,
  },
  owner_place: {
    type: String,
  },
  owner_name: {
    type: String,
  },
  owner_number: {
    type: String,
  },
});
module.exports = mongoose.model("Mobile", Mobile, "Products");
