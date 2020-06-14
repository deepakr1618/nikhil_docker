exports = module.exports = {};
var Book = require("../model/bookModel");
exports.viewAllBooks = (req, res, next) => {
  Book.find({ product_type: "book" }).exec((err, books) => {
    if (err) {
      return next(err);
    }
    if (books.length == 0) {
      return res.json({
        productFound: false,
      });
    }
    return res.json({
      productFound: true,
      data: books,
    });
  });
};
exports.postBook = (req, res, next) => {
  Book.create(req.body, (err, book) => {
    if (err) {
      return next(err);
    }
    return res.json({
      err: null,
      msg: "Book posted",
      data: book,
    });
  });
};
