const Blog = require("../../../model/blog");

module.exports.getBlog = async function (req, res) {
  try {
    let blogs = await Blog.find({});
    return res.json(200, {
      msg: "blogs fetched ",
      blogs,
    });
  } catch (err) {
    return res.json(500, {
      msg: "internal server error",
    });
  }
};
