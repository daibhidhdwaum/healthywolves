$(document).ready(function () {
  var $newUserSubmit = $("#new-user-submit"); // create new user submit button
  var $loginBtn = $("#user-login-submit"); // user login submit button

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
    $("#new-user-pass").val("");
    if (newUser) {
      alert("User created successfully:");
    } else {
      alert("User already exists");
    }
  }

  $loginBtn.on("click", LoginUser);
  //$loginBtn.on("click", logginUser);
  function LoginUser() {
    event.preventDefault();
    var userName = $("#user-login")
      .val()
      .trim();
    var Password = $("#user-login-pass")
      .val()
      .trim();
    console.log(userName);
    console.log(Password);
    var url = "/api/users/" + userName + "/" + Password;
    var jqxhr = $.get(url, function () {
      if (jqxhr.done() && (userName || "")) {
        window.location = "/loggedIn";
        alert("Success");
      } else if (jqxhr.fail()) {
        alert("Invalid login.Try again");
      }
    });
  }
});
