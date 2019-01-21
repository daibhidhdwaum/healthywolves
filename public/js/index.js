// Get references to page elements
var $newUser = $("#new-user");
var $submitBtn = $("#submit");
var $existingUsers = $("#existing-users");

// The API object contains methods for each kind of request we'll make
var API = {
  createUser: function(users) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(users)
    });
  },
  getUsers: function() {
    return $.ajax({
      url: "api/users",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/users/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
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
};

refreshExamples();

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list

var newUser = {
  text: $newUser.val().trim()
};

$newUser.val("");

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

var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$existingUsers.on("click", ".delete", handleDeleteBtnClick);
