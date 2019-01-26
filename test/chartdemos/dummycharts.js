$("#choose-chart").change(function() {
    $("img[class=chart-types]").attr("src",$(this).val());

});


/* Dynamic Colour Generating - currently broken)
//Function to generate random colours
function dynamicColours() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + ", 0.5)";
}
//Function to group colours
function groupColours(a) {
    var colourGroup = [];
    for(i=0; i < a; i++) {
        colourGroup.push(dynamicColours());}
    return colourGroup;
}
*/


//Global chart configurations
Chart.defaults.global.defaultFontColor = "black";
Chart.defaults.global.defaultFontSize = 14;

//Doughnut chart for Needs vs Wants
var ctx = $("#HoleChart");
var HoleChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["I Needed It", "I Wanted It"],
        datasets: [{
            data: [20, 80],
            backgroundColor: [
            "rgb(194, 86, 26)",
            "rgb(16, 120, 149)"
            ],
            borderColor: [
                "rgb(194, 86, 26)",
                "rgb(16, 120, 149)"
                ],
        }]
    },
    options: {
        responsive: true,
        cutoutPercentage: 50,
        title: {
            display: true,
            text: "Did You Really Need To Buy That?",
            fontSize: 16,
            fontColor: "rgba(0, 0, 0)"
        }
    }
});



//Bar chart for amount totals by category
var ctx = $("#BarChart");
var BarChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Rent", "Groceries", "Debt"],
        datasets: [{
            label: "Totals by Category",
            data: [2500,300,17043],
            backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(240,128,128, 0.2)",
                "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
                "rgba(75, 192, 192, 1)",
                "rgba(240,128,128, 1)",
                "rgba(255, 159, 64, 1)"
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



//Line chart for money spent over period of time
var ctx = $("#LineChart");
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
            label: "Total Spending by Month",
            xAxisID: "Month",
            yAxisID: "$",
            data: [42000,3993,5000,16700,9483,2000,4000,324,8675,19743,245,197],
            backgroundColor: "rgba(255, 255, 255)",
            borderColor: "rgba(255, 255, 255)",
            borderWidth: 3,
            fill: true
        }]
    },
    options: {
        title: {
            display: true,
            text: "The Big Picture"
        },
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
                    labelString: "Value"
                }
            }]
        }
    }
});