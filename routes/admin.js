const express = require("express");
const passport = require("passport");
// using express route
const router = express.Router();
const adminController = require("../controllers/adminController");
router.get("/", adminController.home);
router.get("/signin", adminController.signin);
router.get("/signup", adminController.signup);
router.get("/signout", adminController.signout);
router.post("/create", adminController.create);
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/admin/signin" }),
  adminController.createsession
);

module.exports = router;
