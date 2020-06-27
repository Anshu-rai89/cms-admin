const mongoose = require("mongoose");

// user schema
const blogSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// registring blogschema in db with name user
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
