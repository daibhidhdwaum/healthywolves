var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/loggedIn", function (req, res) {
    res.render("loggedIn");
    // db.User.findOne({ where: { UserId: req.params.UserId } }).then(function (
    //   UserId
    // ) {
    //   res.send(UserId);
    // });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
