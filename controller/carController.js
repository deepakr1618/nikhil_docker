exports = module.exports = {};
var Car = require("../model/carModel");
exports.viewAllCars = (req, res, next) => {
  Car.find({ product_type: "car" }).exec((err, cars) => {
    if (err) {
      return next(err);
    }
    if (cars.length == 0) {
      return res.json({
        productFound: false,
      });
    }
    return res.json({
      productFound: true,
      data: cars,
    });
  });
};
exports.postCar = (req, res, next) => {
  Car.create(req.body, (err, car) => {
    if (err) {
      return next(err);
    }
    return res.json({
      err: null,
      msg: "Car posted",
      data: car,
    });
  });
};
