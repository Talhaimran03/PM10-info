async function options() {

  let value = document.getElementById("dataCity");
  let options = document.getElementById("options");
  let cities = await get_city();

  // inserisco gli option più belli
  for (city of cities) {
    let option = document.createElement("button");
    option.innerHTML = city.nome;
    options.appendChild(option);
    option.onclick=()=>{
      value.innerHTML = option.innerHTML; 
      dataCity();
      openSelection();
    };
  }
  value.innerHTML = cities[0].nome;
  dataCity();
}

const blue = ["#36a2eb", "#9ad0f5"];
const orange = ["#fea047", "#fec784"];
var chart;

async function dataCity() {
  let value = document.getElementById("dataCity").innerHTML;

  // Set color
  const color = value === "VR-Giarol Grande PM2,5" ? orange : blue;
  const label = value === "VR-Giarol Grande PM2,5" ? "PM2,5" : "PM10";

  // Download and build data
  let result = await get_by_city(value);
  let data = [];
  for (let item of result) {
    data.push({ x: item.data, y: item.valore });
  }

  // Get chart
  const ctx = document.getElementById("getByCity");

  // Destroy chart
  if (chart) chart.destroy();

  // Build chart
  chart = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          data,
          tension: 0,
          label,
          borderColor: color[0],
          backgroundColor: color[1],
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: "time",
          time: {
            unit: "month",
          },
        },
        y: {
          min: 0,
        },
      },
      elements: {
        point: {
          radius: 0,
        },
      },
    },
  });
}

function openSelection() {
  let options = document.getElementById("options");
  let icon = document.getElementById("icon");


  if (options.style.maxHeight != options.scrollHeight + "px") {
    options.style.maxHeight = options.scrollHeight + "px";
    icon.style.transform = "rotate(180deg)";
  } else {
    options.style.maxHeight = 0 + "px";
    icon.style.transform = "rotate(0deg)";

  }

}