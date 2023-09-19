const ctx = document.getElementById("myChart");

const newChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        
        color:'green',
        backgroundColor:"red",
        label: "datasets",
        data: [],
        borderWidth: 1,
        borderColor: "brown",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: "linear",
        title: {
          display: true,
          text: "Time",
          color:"red"
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
          color:"green",

        },
      },
    },
    animation: false,
  },
});

function generateData() {
  const newData = Math.random() * 100;
  newChart.data.datasets[0].data.push(newData);

  console.log(newChart.data.datasets[0].data);

  newChart.data.labels.push(newChart.data.labels.length);
  // chart.data.datasets[0].data.push(newData);
  newChart.update(); // Update the chart
}

setInterval(generateData, 1000);
