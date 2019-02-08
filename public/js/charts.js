//Global chart configuration
Chart.defaults.global.defaultFontColor = "black";
Chart.defaults.global.defaultFontSize = 14;


//Function to generate chart colours on load
function dynamicColours() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + ", 0.5)";
}

//Function to group colours, trying to prevent repeat colours
/*
function groupColours(a) {
     var colourGroup = [];
     for(i = 0; i < a; i++) {
         colourGroup.push(dynamicColours());}
     return colourGroup;
 } */


//Chart selection function
$("#choose-chart").change(function() {
    //console.log($(this).val());
    //console.log($('#choose-chart :selected').val());

    var selectedChart = $('#choose-chart :selected').val()

    if (selectedChart === "PieChart") {

        //Doughnut chart for Needs vs Wants
        var ctx = $("#MyChart");
        var PieChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["I Needed It", "I Wanted It"],
                datasets: [{
                    data: [20, 80],
                    backgroundColor: [
                        dynamicColours(),
                        dynamicColours()
                    ],
                    borderColor: [
                        dynamicColours(),
                        dynamicColours()
                        ],
                }]
            },
            options: {
                cutoutPercentage: 50,
                title: {
                    responsive: true,
                    display: true,
                    text: "Did You Really Need To Buy That?",
                    fontSize: 16,
                    fontColor: "rgba(0, 0, 0)"
                }
            }
        });
    } else if (selectedChart === "BarChart") {

        //Bar chart for amount totals by category
        var ctx = $("#MyChart");
        var BarChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Rent", "Groceries", "Debt"],
                datasets: [{
                    label: "Totals by Category",
                    data: [2500,300,17043],
                    backgroundColor: [
                        dynamicColours(),
                        dynamicColours(),
                        dynamicColours()
                    ],
                    borderColor: [
                        dynamicColours(),
                        dynamicColours(),
                        dynamicColours()
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                },
                title: {
                    responsive: true,
                    display: true,
                    text: "Where Is Your Money Going?"
                }
            }
        });
    } else if (selectedChart === "LineChart") {

        //Line chart for money spent over period of time
        var ctx = $("#MyChart");
        var LineChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                    ],
                datasets: [{
                    label: "Spending By Month",
                    data: [42000,3993,5000,16700,9483,2000,4000,324,8675,19743,245,197],
                    backgroundColor: [
                        dynamicColours()
                    ],
                    borderColor: [
                        dynamicColours()
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: "Month"
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: "$"
                        }
                    }]
                },
                title: {
                    responsive: true,
                    display: true,
                    text: "The Big Picture"
                }
            }
        });
    }
});