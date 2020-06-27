const User = require("../model/user");

// function to render dahsbord
module.exports.home = async function (req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect("/admin/signin");
  }
  res.render("dashbord", {
    title: "dashbord",
  });
};

// function to register a user as admin
// get the sign up data
module.exports.create = async function (req, res) {
  try {
    if (req.body.password != req.body.confirm_password) {
      return res.redirect("back");
    }

    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      req.body["isAdmin"] = true;
      let newuser = await User.create(req.body);
      return res.redirect("/admin/signin");
    } else {
      return res.redirect("back");
    }
  } catch (err) {
    console.log("ERror");
    return;
  }
};

// function to create session
module.exports.createsession = function (req, res) {
  return res.redirect("/admin");
};

// function to  render signin page
module.exports.signin = function (req, res) {
  if (req.isAuthenticated()) return res.redirect("/admin");
  return res.render("signin", {
    title: "sign in",
  });
};

// function to render signup page for
module.exports.signup = async function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/admin");
  }

  return res.render("signup", {
    title: "Sign Up",
  });
};

// function to handle signout
module.exports.signout = function (req, res) {
  req.logout();
  return res.redirect("/admin/signin");
};
