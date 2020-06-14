var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Car = new Schema({
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
  km_driven: {
    type: String,
  },
  fuel_type: {
    type: String,
  },
  year: {
    type: String,
  },
  transmission: {
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
module.exports = mongoose.model("Car", Car, "Products");
