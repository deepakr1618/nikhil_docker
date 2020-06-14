var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
const mongoose = require("mongoose");
var uri =
  "mongodb+srv://Nikhil:mongopassword@cluster0-b8lj9.mongodb.net/AdsBay?retryWrites=true&w=majority";
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      return console.log("Connected to Database");
    }
    console.log("Database error");
    process.exit(0);
  }
);
var app = express();

const port = process.env.PORT || 8080

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/dist/frontend")));
app.use(cors());
app.use("/", indexRouter);
app.get("/",(req,res)=>{
	res.sendFile(path.join(__dirname))
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});





app.listen(port,"0.0.0.0",console.log("Server running at : "+port))
