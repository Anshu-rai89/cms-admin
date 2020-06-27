const express = require("express");

// using express route
const router = express.Router();

router.use("/blog", require("./blog"));

module.exports = router;
