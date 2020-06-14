exports = module.exports = {};
const jwt = require("jsonwebtoken");

var User = require("../model/userModel");
exports.login = (req, res, next) => {
  console.log(req.body);
  User.findOne({
    emailAddress: req.body.emailAddress,
    password: req.body.password,
  }).exec((err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send({ userfound: 0 });
    }
    let payload = { subject: user._id };
    let token = jwt.sign(payload, "secretKey");
    res.send({ token });
  });
};

exports.signup = (req, res, next) => {
  User.findOne({
    emailAddress: req.body.emailAddress,
  }).exec((err, user) => {
    if (err) {
      return next(err);
    }
    if (user) {
      return res.send({ userexist: true });
    } else {
      User.create(req.body, (err, usr) => {
        if (err) {
          return next(err);
        }
        let payload = { subject: usr._id };
        let token = jwt.sign(payload, "secretKey");
        res.send({ token });
      });
    }
  });
};
