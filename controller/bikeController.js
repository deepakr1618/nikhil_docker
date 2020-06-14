exports = module.exports = {};
var Bike = require("../model/bikeModel");
exports.viewAllBikes = (req, res, next) => {
  Bike.find({ product_type: "bike" }).exec((err, bikes) => {
    if (err) {
      return next(err);
    }
    if (bikes.length == 0) {
      return res.json({
        bikeFound: false,
      });
    }
    return res.json({
      bikeFound: true,
      data: bikes,
    });
  });
};
exports.postBike = (req, res, next) => {
  Bike.create(req.body, (err, bike) => {
    if (err) {
      return next(err);
    }
    return res.json({
      err: null,
      msg: "Bike posted",
      data: bike,
    });
  });
};
