var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Job = new Schema({
  product_type: {
    type: String,
  },
  designation: {
    type: String,
  },
  company: {
    type: String,
  },
  salary: {
    type: String,
  },
  description: {
    type: String,
  },
  salary_period: {
    type: String,
  },
  position_type: {
    type: String,
  },
  experience: {
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
module.exports = mongoose.model("Job", Job, "Products");
