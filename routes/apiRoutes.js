var db = require("../models");

module.exports = function (app) {
  // Get all users for login check
  app.get("/api/users/:UserName?/:UserPass?", function (req, res) {
    db.User.findAll({
      // where: { userName: req.params.userName }
      // , where: { userPass: req.params.userPass }
    }).then(function (getUsers) {
      res.json(getUsers);
    });
  });

  // Create a new User
  app.post("/api/users/:userName/:Password?", function (req, res) {
    db.User.create({
      userName: req.body.userName,
      Password: req.body.Password
    }).then(function (newUser) {
      res.json(newUser);
    });
  });

  // get all items for a particular user (use on logged in page for particular user)
  // optional user tag to pull data for all users to create graphs
  // optional type tag to pull data for various types from a user to create graphs

  app.get("/api/items/:userId?/:type?/:categorey?", function (req, res) {
    db.Item.findAll({
      // UserId need to fill automatically from the url... not sure how to do that but the user should not have control of this
      where: { userId: req.params.userId },
      // will also need type and category specifiers for the graphical output
      where: { type: req.params.type },
      where: { categorey: req.params.categorey }
    }).then(function (userBills) {
      res.json(userBills);
    });
  });

  // post a new item once logged in as a user

  app.post("/api/items/:userId/:type/:categorey", function (req, res) {
    db.Item.create({
      userId: req.params.userId,
      type: req.params.type,
      categorey: req.params.categorey
    }).then(function (postItem) {
      res.json(postItem);
    });
  });

  // Delete a bill (only for logged in user)
  app.delete("/api/items/:userId/:itemId", function (req, res) {
    db.Item.destroy({
      where: { userId: req.params.userId },
      where: { itemId: req.params.itemId }
    }).then(function (refreshPage) {
      res.json(refreshPage);
    });
  });

  // end of module.export
};
