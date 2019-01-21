var db = require("../models");

// I'm just writing this here as a test

module.exports = function (app) {
  // Get all users for login check
  app.get("/api/users", function (req, res) {
    db.user.findAll({}).then(function (getUsers) {
      res.json(getUsers);
    });
  });

  // get all bills for a particular user (use on logged in page for particular user)
  // userID is optional so that all bills for all users can be pulled
  app.get("/api/bills/:userID?", function (req, res) {
    db.bill.findAll({}).then(function (userBills) {
      res.json(userBills);
    });
  });

  // get all items for a particular user (use on logged in page for particular user)
  // optional user tag to pull data for all users to create graphs
  // optional type tag to pull data for various types from a user to create graphs
  app.get("/api/items/:userID?/:type?", function(req, res) {
    db.item.findAll({}).then(function(userBills) {
      res.json(userBills);
    });
  });

  // Create a new bill (for a specific user)
  app.post("/api/users", function(req, res) {
    db.User.create({
      password: req.body
    }).then(function(newUser) {
      res.json(newUser);
    });
  });

  // Delete a bill (only for logged in user)
  // app.delete("/api/bills/:id", function(req, res) {
  //   db.bill.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(refreshPage);
  //   });
  // });
};
