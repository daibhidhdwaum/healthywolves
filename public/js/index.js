$(document).ready(function() {
  var $newUserSubmit = $("#new-user-submit"); // create new user submit button
  var $loginBtn = $("#user-login-submit"); // user login submit button

  //var $existingUsers = $("#existing-users");

  // The API object contains methods for each kind of request we'll make
  /*var API = {
  createUser: function(users) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users/",
      data: JSON.stringify(users)
    });
  },
  getUsers: function() {
    return $.ajax({
      url: "api/users/",
      type: "GET"
    });
  },
  logginUser: function() {
    return $.ajax({
      url: "api/users/",
      type: "GET"
    });
  }
  /* deleteExample: function(id) {
    return $.ajax({
      url: "api/users/" + id,
      type: "DELETE"
    });
  }*/

  // refreshExamples gets new examples from the db and repopulates the list
  /*var refreshExamples = function() {
  API.getUsers().then(function(data) {
    var $examples = data.map(function(example) {
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
};*/

  //refreshExamples();
  // Add event listeners to both submits and the delete buttons
  $newUserSubmit.on("click", newUser);
  //$loginBtn.on("click", logginUser);
  function newUser(event) {
    event.preventDefault();
    var newUser = {
      userName: $("#new-user")
        .val()
        .trim(),
      Password: $("#new-user-pass")
        .val()
        .trim()
    };
    console.log(newUser);
    $.post("/api/users", newUser);
    $("#new-user").val("");
    $("#new-password").val("");
    alert("User created successfully:");
  }

  $loginBtn.on("click", LoginUser);
  //$loginBtn.on("click", logginUser);
  function LoginUser(event) {
    event.preventDefault();
    var LoginUser = {
      userName: $("#user-login")
        .val()
        .trim(),
      Password: $("#user-login-pass")
        .val()
        .trim()
    };
    console.log(LoginUser);
    $.get("/api/users", LoginUser);
    if (this.status === 200) {
      alert("Login successful:");
    } else {
      alert("Try again to login");
    }
  }
  /*var logginUser = function() {
  API.getUsers().then(function() {
    // if (){
    // password check for login goes here. I assume this will use getUsers above to check the user database for a name match, and then if that succedds, check the password against password.
    // if the check works, it will redirect to loggedin.handlebars
    //if it fails, it should throw an alert (or even a modal) to try again and refresh the page.
    // });
    refreshExamples();
  });
};*/

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


// $deleteItem.on("click", ".delete", handleDeleteBtnClick);

/*$(document).on("submit", "$submitBtn", Login);
$newUser.on("click", "$newUser",createNewUser);

function Login() {
  console.log("Entered Login function");
  event.preventdefault();
  var uName = $username.val().trim();
  console.log(uName);
  var pwd = $password.val().trim();
  console.log(pwd);
}

function createNewUser() {
  console.log("Entered new user function:");
}*/
});
