const express = require("express");
const app = express();
const port = 7000;
const db = require("./configs/mongoose");
const cokkiesparser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const passportlocal = require("./configs/passport-local");

const MongoStore = require("connect-mongo")(session);
// middlewares
app.use(express.urlencoded());
app.use(cokkiesparser());

//CORS access
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static("./assets"));

// seting up our view engine

app.set("view engine", "ejs");
app.set("views", "./views");

//  using session as middleware here

app.use(
  session({
    name: "cms-Admin",

    secret: "Somethiing Fishy", // just for development purpose
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: new MongoStore(
      {
        mongooseConnection: db,
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err || "connect-mongodb setup ok");
      }
    ),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthentication);

// using express router
app.use("/", require("./routes"));

// firing server

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server:${port}`);
    return;
  }

  console.log(`Surver is up and Running at POrt :${port}`);
  return;
});
