const redColor = "#FF9580";
const yellowColor = "#FFEA80";
const greenColor = "#61dc82";
var chart;

async function cityAnalytics() {
    const ctx = document.getElementById("cityAnalytics");

    let result = await get_cityAnalytics();

    // Destroy chart
    if (chart) chart.destroy();

    // Build chart
    var xValues = [];
    var red = [];
    var yellow = [];
    var green = [];

    for (city of result) {
        xValues.push(city.nome);
        red.push(city.count_red);
        yellow.push(city.count_yellow);
        green.push(city.count_green);
    }

    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                data: red,
                label: "Red (35+)",
                backgroundColor: redColor,
            }, {
                data: yellow,
                label: "Yellow (15-35)",
                backgroundColor: yellowColor,
            }, {
                data: green,
                label: "Green (0-15)",
                backgroundColor: greenColor,
            }],

        },
    });
}