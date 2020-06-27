const Blog = require("../model/blog");

// function to create blog
module.exports.create = async function (req, res) {
  try {
    let blog = await Blog.create(req.body);
    console.log("blog created succssfully");

    return res.redirect("back");
  } catch (err) {
    console.log("error in creating Blog", err);
    return res.redirect("back");
  }
};

// function to show blogs
module.exports.showBlogs = async function (req, res) {
  try {
    if (!req.isAuthenticated()) {
      return res.redirect("/admin/signin");
    }
    let blogs = await Blog.find({});

    return res.render("blog", {
      title: "blog",
      blogs,
    });
  } catch (err) {
    console.log("error in fetching blogs");
    return res.redirect("back");
  }
};
