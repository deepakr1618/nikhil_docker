var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
var UserController = require("../controller/userController");
var CarController = require("../controller/carController");
var BikeController = require("../controller/bikeController");
var BookController = require("../controller/bookController");
var JobController = require("../controller/jobController");
var MobileController = require("../controller/mobileController");
var ComputerController = require("../controller/computerController");

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Unauthorized request");
  }
  let payload = jwt.verify(token, "secretKey");
  if (!payload) {
    return res.status(401).send("Unauthorized request");
  }
  req.userId = payload.subject;
  next();
}



router.post("/login", UserController.login);
router.post("/register", UserController.signup);
router.post("/postcar", verifyToken, CarController.postCar);
router.get("/viewcars", CarController.viewAllCars);
router.post("/postbike", verifyToken, BikeController.postBike);
router.get("/viewbikes", BikeController.viewAllBikes);
router.post("/postbook", verifyToken, BookController.postBook);
router.get("/viewbooks", BookController.viewAllBooks);
router.post("/postjob", verifyToken, JobController.postjob);
router.get("/viewjobs", JobController.viewAllJobs);
router.post("/postmobile", verifyToken, MobileController.postMobile);
router.get("/viewmobiles", MobileController.viewAllMobiles);
router.post("/postcomputer", verifyToken, ComputerController.postComputer);
router.get("/viewcomputers", ComputerController.viewAllComputers);

module.exports = router;
