var db = require("../models");

// I'm just writing this here as a test

module.exports = function (app) {
  // Get all users for login check
  app.get("/api/users/:userName/:Password", function(req, res) {
    var userName = req.params.userName;
    var Password = req.params.Password;
    console.log(userName);
    console.log(Password);
    var condition = {
      where: {
        userName: userName,
        Password: Password
      }
    };
    db.User.findOne(condition).then(function(getUsers) {
      if (getUsers) {
        console.log("User Found:");
        //var userid = getUsers.UserId;
        //console.log("The logged in user's id is:" + getUsers);
        res.json(getUsers);
      } else {
        console.log("No such user:");
        res.status(404).send("No such user");
      }
    });
  });

  app.get("/api/loggedIn/:UserName", function(req, res) {
    db.User.findAll().then(function(getUsers) {
      res.json(getUsers);
    });
  });
  // get all items for a particular user (use on logged in page for particular user)
  // optional user tag to pull data for all users to create graphs
  // optional type tag to pull data for various types from a user to create graphs

  // app.get("/api/items/:userID?/:type?", function(req, res) {
  //   db.item.findAll({}).then(function(userBills) {
  //     res.json(userBills);
  //   });
  // });

  // Create a new bill (for a specific user)
  app.post("/api/users", function (req, res) {
    db.User.create({
      userName: req.body.userName,
      Password: req.body.Password
    }).then(function(newUser) {
      if (newUser) {
        res.json(newUser);
      } else {
        console.log("User already exists:");
        res.status(404).send("User already exists");
      }
    });
  });

  // Delete a item (only for logged in user)
  app.delete("/api/item/:ItemId", function (req, res) {
    db.Item.destroy({ where: { ItemId: req.params.ItemId } }).then(function () {
      res.json(refreshPage);
    });
  });
};
