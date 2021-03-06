var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/loggedIn", function (req, res) {
    res.render("loggedIn");
  });

  // Load example page and pass in an example by id
  app.get("/loggedIn/:userid", function(req, res) {
    console.log(req.params.userid);
    db.Item.findAll({
      where: {
        UserUserId: req.params.userid
      }
    }).then(function(userData) {
      console.log(userData);
      var dataObj = {userData: userData};
      res.render("loggedIn", dataObj);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
