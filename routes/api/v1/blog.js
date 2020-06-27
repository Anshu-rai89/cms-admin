const express = require("express");

// using express route
const router = express.Router();
const apiblogController = require("../../../controllers/api/v1/apiBlogContainer");
router.get("/", apiblogController.getBlog);

module.exports = router;
