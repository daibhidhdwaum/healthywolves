var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/loggedIn/:userName", function (req, res) {
    db.User.findOne({ where: { userName: req.params.userName } }).then(function (
      currentUser
    ) {
      res.render("loggedIn", currentUser);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
