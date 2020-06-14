exports = module.exports = {};
var Job = require("../model/jobModel");
exports.viewAllJobs = (req, res, next) => {
  Job.find({ product_type: "job" }).exec((err, jobs) => {
    if (err) {
      return next(err);
    }
    if (jobs.length == 0) {
      return res.json({
        productFound: false,
      });
    }
    return res.json({
      productFound: true,
      data: jobs,
    });
  });
};
exports.postjob = (req, res, next) => {
  Job.create(req.body, (err, job) => {
    if (err) {
      return next(err);
    }
    return res.json({
      err: null,
      msg: "Job posted",
      data: job,
    });
  });
};
