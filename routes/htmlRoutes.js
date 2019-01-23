var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/loggedIn", function (req, res) {
    res.render("loggedIn");
  });

  // Load example page and pass in an example by id
<<<<<<< HEAD
  app.get("/user/:id", function (req, res) {
    db.user.findOne({ where: { id: req.params.id } }).then(function (UserId) {
      res.render("loggedIn", {
        UserId: UserId,
        bill: bill,
        item: item
      });
=======
  app.get("/loggedIn/:userid", function(req, res) {
    db.Item.findAll({}).then(function(
     currentUser    ) {
      res.render("loggedIn", currentUser);
>>>>>>> ff588841ee41dcf70379418898a10016cd61c483
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
