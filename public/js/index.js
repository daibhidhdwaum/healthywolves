// Get references to page elements
<<<<<<< HEAD
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
=======
var $newUser = $("#new-user");
var $submitBtn = $("#submit");
var $existingUsers = $("#existing-user");
>>>>>>> 25880987e754231659e88567585b015b523d66f2

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(users) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(users)
    });
  },
  getExamples: function () {
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
<<<<<<< HEAD
var refreshExamples = function () {
  API.getExamples().then(function (data) {
    var $examples = data.map(function (User) {
      var $a = $("<a>")
        .text(User.Password)
        .attr("href", "/api/users/" + User.UserId);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": User.UserId
        })
        .append($a);
=======
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);
>>>>>>> 25880987e754231659e88567585b015b523d66f2

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

refreshExamples();

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list

<<<<<<< HEAD
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };
=======
  var example = {
    text: $newUser.val().trim()
  };

  // if (!(example.text && example.description)) {
  //   alert("You must enter an example text and description!");
  //   return;
  // }
>>>>>>> 25880987e754231659e88567585b015b523d66f2

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

<<<<<<< HEAD
//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };
=======
  $newUser.val("");
};
>>>>>>> 25880987e754231659e88567585b015b523d66f2

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

// Add event listeners to the submit and delete buttons
<<<<<<< HEAD

// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);


=======
$submitBtn.on("click", handleFormSubmit);
$existingUsers.on("click", ".delete", handleDeleteBtnClick);
>>>>>>> 25880987e754231659e88567585b015b523d66f2
