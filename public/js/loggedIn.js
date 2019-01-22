/* eslint-disable linebreak-style */
$(document).ready(function() {
  var $existingUsers = $("#existing-users");

  // The API object contains methods for each kind of request we'll make
  var API = {
    getUsers: function() {
      return $.ajax({
        url: "/api/loggedIn/:userName",
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
      var $examples = data.map(function(userList) {
        var $a = $("<a>").text(userList.userName);

        var $li = $("<li>")
          .attr({
            class: "list-group-item"
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
});
