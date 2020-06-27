const express = require("express");

// using express route
const router = express.Router();
const blogController = require("../controllers/blogController");
router.get("/", blogController.showBlogs);
router.post("/create", blogController.create);
module.exports = router;
