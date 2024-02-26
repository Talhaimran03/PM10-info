const blue = "#9ad0f5";
const orange = "#fec784";
var chart;

async function topCity() {
    const ctx = document.getElementById("topCity");

    let result = await top_city();

    // Destroy chart
    if (chart) chart.destroy();

    // Build chart
    var xValues = [];
    var yValues = [];
    var backgroundColor = [];

    for (city of result) {
        xValues.push(city.nome);
        yValues.push(city.count);

        if (city.nome.includes("PM2,5")) {
            backgroundColor.push(orange);
        } else {
            backgroundColor.push(blue);
        }
    }

    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                data: yValues,
                label: "PM10",
                backgroundColor
            }, {
                label: "PM2.5",
                backgroundColor: orange,
            }],

        },
    });
}