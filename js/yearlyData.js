const blue = "#9ad0f5";
const orange = "#fec784";
var chart;

async function yearlyData() {
    const ctx = document.getElementById("yearlyData");

    let result = await get_yearlyData();

    // Destroy chart
    if (chart) chart.destroy();

    // Build chart
    var xValues = [];
    var values2019 = [];
    var values2020 = [];

    for (city of result) {
        if (!(xValues.includes(city.nome))) {
            xValues.push(city.nome);
        }
        if (city.year == "2020") {
            values2020.push(city.average_value);
        } else {
            values2019.push(city.average_value);
        }
    }

    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                data: values2019,
                label: "2019",
                backgroundColor: blue,
            }, {
                data: values2020,
                label: "2020",
                backgroundColor: orange,
            }],

        },
    });
}