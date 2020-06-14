exports = module.exports = {};
var Mobile = require("../model/mobileModel");
exports.viewAllMobiles = (req, res, next) => {
  Mobile.find({ product_type: "mobile" }).exec((err, mobiles) => {
    if (err) {
      return next(err);
    }
    if (mobiles.length == 0) {
      return res.json({
        productFound: false,
      });
    }
    return res.json({
      productFound: true,
      data: mobiles,
    });
  });
};
exports.postMobile = (req, res, next) => {
  Mobile.create(req.body, (err, mobile) => {
    if (err) {
      return next(err);
    }
    return res.json({
      err: null,
      msg: "Mobile posted",
      data: mobile,
    });
  });
};
