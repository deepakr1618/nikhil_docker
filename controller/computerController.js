exports = module.exports = {};
var Computer = require("../model/computerModel");
exports.viewAllComputers = (req, res, next) => {
  Computer.find({ product_type: "computer" }).exec((err, computers) => {
    if (err) {
      return next(err);
    }
    if (computers.length == 0) {
      return res.json({
        productFound: false,
      });
    }
    return res.json({
      productFound: true,
      data: computers,
    });
  });
};
exports.postComputer = (req, res, next) => {
  Computer.create(req.body, (err, computer) => {
    if (err) {
      return next(err);
    }
    return res.json({
      err: null,
      msg: "Computer posted",
      data: computer,
    });
  });
};
