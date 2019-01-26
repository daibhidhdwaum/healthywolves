/* eslint-disable linebreak-style */
$(document).ready(function () {
  var $existingItems = $("#user-items"); // list of current users items box reference
  var $newItemSubmit = $("#new-item-submit"); // create item for current user button reference
  var $selectNewChart = $("#choose-chart-submit");

  // dirty way to get userId
  var url = window.location.href;
  var UserUserId = url.substr(url.length - 1);
  var currentUser = UserUserId;

  // The API object contains methods for each kind of request we'll make
  var API = {
    getItems: function () {
      return $.ajax({
        url: "/api/loggedIn/",
        type: "GET"
      });
    },
    createItem: function (insertItem) {
      return $.ajax({
        url: "/api/items/",
        data: insertItem,
        type: "POST"
      });
    },
    deleteItem: function (itemId) {
      return $.ajax({
        url: "api/items/" + itemId,
        type: "DELETE"
      });
    },
    barChartGroc: function (currentUser) {
      return $.ajax({
        url: "/api/barGraphGroc/" + currentUser,
        type: "GET"
      });
    },
    barChartRent: function (currentUser) {
      return $.ajax({
        url: "/api/barGraphRent/" + currentUser,
        type: "GET"
      });
    },
    barChartDebt: function (currentUser) {
      return $.ajax({
        url: "/api/barGraphDebt/" + currentUser,
        type: "GET"
      });
    }
  };

  // refreshItems gets new items from the db and repopulates the list
  var refreshItems = function () {
    API.getItems().then(function (data) {
      var $items = data.map(function (itemList) {
        var $a = $("<a>").text(itemList.itemId);

        var $li = $("<li>")
          .attr({
            class: "list-group-item itemButton"
          })
          .append($a);

        var $button = $("<button>")
          .addClass("btn btn-danger float-right delete")
          .text("ｘ");

        $li.append($button);

        return $li;
      });

      $existingItems.empty();
      $existingItems.prepend($items);
    });
  };
  refreshItems();

  // delete item from user including from the database
  // still bugged at this time
  $(document).on("click", ".delete", function () {
    var itemId = $(this).attr("data-id");
    API.deleteItem(itemId);
    refreshItems();
  });

  // create new item for current user
  $newItemSubmit.on("click", newItem);
  function newItem(event) {
    refreshItems();
    event.preventDefault();
    // build item object for api insertion
    var insertItem = {
      Price: $("#item-price")
        .val()
        .trim(),
      Typeof: $("#item-type")
        .val()
        .trim(),
      Category: $("#item-category")
        .val()
        .trim(),
      UserUserId: UserUserId
    };
    console.log(insertItem);
    API.createItem(insertItem);
    $("#item-price").val("");
    $("#item-type").val("");
    $("#item-category").val("");
  }

  $selectNewChart.on("click", gimmieAChart);
  function gimmieAChart(event) {
    console.log("Entered gimmieAChart function:");
    event.preventDefault();
    var whichChart = $("#choose-chart")
      .val()
      .trim();
    console.log(whichChart);
    switch (whichChart) {
      case "Pie Chart":
        renderPie(currentUser);
        break;
      case "Line Chart":
        renderLine(currentUser);
        break;
      case "Bar Chart":
        renderBar(currentUser);
        break;
      default:
        alert("something went wrong");
    }
  }

  var renderBar = function (currentUser) {
    var userGroc = API.barChartGroc(currentUser);
    var userRent = API.barChartRent(currentUser);
    var userDebt = API.barChartDebt(currentUser);
    console.log(userGroc);
    console.log(userRent);
    console.log(userDebt);
  };
});
