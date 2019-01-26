var db = require("../models");
module.exports = function(app) {
  // Login and Password Check for index.handlebars
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

  // generates custom url for loggedIn.handlebars and passes it the item table reference
  app.get("/api/loggedIn/:userid", function(req, res) {
    var userId = req.param.userid;
    console.log(userId);
    var condition = {
      where: {
        UserUserId: userId
      }
    };
    res.json(UserUserId);
    // passes items for that user to the loggedIn page
    db.Item.findAll(condition).then(function(getItems) {
      res.json(getItems);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
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

  // Create a new item
  app.post("/api/items", function(req, res) {
    var Price = req.body.Price;
    var TypeOf = req.body.Typeof;
    var Category = req.body.Category;
    var UserUserId = req.body.UserUserId;
    console.log("Price is " + Price);
    console.log("Type of " + TypeOf);
    console.log("Category " + Category);
    console.log("UserUserId " + UserUserId);

    db.Item.create({
      Price: req.body.Price,
      Typeof: req.body.Typeof,
      Category: req.body.Category,
      UserUserId: req.body.UserUserId
    }).then(function(newItem) {
      console.log(newItem);
      res.status(200).send("Item Created");
    });
  });

  // Delete a item (only for logged in user)
  app.delete("/loggedIn/api/items/:itemId", function(req, res) {
    db.Item.destroy({ where: { itemId: req.params.itemId } }).then(function() {
      res.status(200).send("Item Destroyed");
    });
  });
  //-------------------------------------------------------Charts code--------------------------------------------------//
  // Bar Graph API Call (aka Month to Month total spending)
  app.get("/api/barGraph/:UserUserId", function(req, res) {
    var UserUserId = req.params.UserUserId;
    var condition = {
      include: {
        Price: true,
        where: {
          UserUserId: UserUserId
        },
        group: [sequelize.fn("date_trunc", "month", sequelize.col("createdAt"))]
      }
    };
    db.Item.findAll(condition).then(function(itemDataForChart) {
      res.json(itemDataForChart);
      var monthlyTotals = Object.keys(itemDataForChart);
      console.log(monthlyTotals);
      console.log(monthlyTotals.Price);
      //
      // all data should be grouped in the response by month of creation, not sure how to deal with it from here, but once that is sorted it just needs to be converted to array with Object.keys and it should be able to be passed to the graphing npm
      //
    });
  });

  // Pie Graph API Call (aka Category distribution)
  app.get("/api/pieGraph/:UserUserId", function(req, res) {
    var UserUserId = req.params.UserUserId;
    var condition = {
      where: {
        UserUserId: UserUserId
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

  // Line Graph API Call (want VS need spending)
  app.get("/api/lineGraph/:UserUserId", function(req, res) {
    var userId = req.params.UserUserId;
    //var Password = req.params.Password;
    console.log(userId);
    //console.log(Password);
    /*var condition = {
      where: {
        UserUserId: userId
      }
    };*/
    var condition = {
      attributes: {
        include: [
          [db.sequelize.fn("COUNT", db.sequelize.col("Typeof")), "Type"]
        ]
      }
    };
    db.Item.findAll(condition).then(function(getUsers) {
        if (getUsers) {
          console.log("User Found:");
          console.log(getUsers);
          //var userid = getUsers.UserId;
          //console.log("The logged in user's id is:" + getUsers);
          res.json(getUsers);
        } else {
          console.log("No such user:");
          res.status(404).send("No such user");
        }
      });
    });
    //sequelize.query("select count(*) as count,Typeof from expenses.items where UserUserId = '1' group by Typeof;").spread((results, metadata)

    /*db.Item.findAndCountAll(condition).then(function(getUsers) {
      if (getUsers) {
        console.log("User Found:");
        console.log(getUsers);
        //var userid = getUsers.UserId;
        //console.log("The logged in user's id is:" + getUsers);
        res.json(getUsers);
      } else {
        console.log("No such user:");
        res.status(404).send("No such user");
      }
    });*/
};
