// Get references to page elements
var $newUser = $("#new-user"); // new user name field
var $newUserPass = $("#new-user-pass"); // new user password field
var $newUserSubmit = $("#new-user-submit"); // create new user submit button

var $loginUser = $("#user-login"); // user login name field
var $loginPass = $("#user-login-pass"); // user login password field
var $loginBtn = $("#submit"); // user login submit button


var $existingUsers = $("#existing-users");

// The API object contains methods for each kind of request we'll make
var API = {
  createUser: function (users) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users/",
      data: JSON.stringify(users)
    });
  },
  getUsers: function () {
    return $.ajax({
      url: "api/users/",
      type: "GET"
    });
  },
  logginUser: function () {
    return $.ajax({
      url: "api/users/",
      type: "GET"
    });
  },
  deleteExample: function (id) {
    return $.ajax({
      url: "api/users/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function () {
  API.getUsers().then(function (data) {
    var $examples = data.map(function (example) {
      var $a = $("<a>").text(example.Password);
      // .attr("href", "/api/user/" + example.UserId);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.UserId
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $existingUsers.empty();
    $existingUsers.append($examples);
  });
};

refreshExamples();

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list

var newUser = function () {
  API.createUser({
    userName: $newUser.val().trim(),
    Password: $newUserPass.val().trim()
  }).then(function () {
    refreshExamples();
  });
};

var logginUser = function () {
  API.getUsers().then(function () {
    // if (){
    // password check for login goes here. I assume this will use getUsers above to check the user database for a name match, and then if that succedds, check the password against password.
    // if the check works, it will redirect to loggedin.handlebars
    //if it fails, it should throw an alert (or even a modal) to try again and refresh the page.
    // });
    refreshExamples();
  });
};

// if (!(example.text && example.description)) {
//   alert("You must enter an example text and description!");
//   return;
// }

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list

// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to both submits and the delete buttons
$newUserSubmit.on("click", newUser);
$loginBtn.on("click", logginUser);
// $deleteItem.on("click", ".delete", handleDeleteBtnClick);
