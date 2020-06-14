var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Book = new Schema({
  product_type: {
    type: String,
  },
  name: {
    type: String,
  },
  author: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  edition: {
    type: String,
  },
  publisher: {
    type: String,
  },
  no_of_pages: {
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
module.exports = mongoose.model("Book", Book, "Products");
