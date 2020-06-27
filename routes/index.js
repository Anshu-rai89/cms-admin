const express = require("express");

// using express route
const router = express.Router();

router.use("/api", require("./api"));
router.use("/admin", require("./admin"));
router.use("/blog", require("./blogs"));

module.exports = router;
