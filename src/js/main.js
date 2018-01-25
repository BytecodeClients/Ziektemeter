$(document).ready(function () {

  const increaseValues = () => {
    $('.increaseOverTime').each(function () {
      const currentValue = Number($(this).text().replace(/\./g, ''));
      const increasePerInterval = Math.floor(Math.random() * 50); // TODO: Add a data attribute on the element that will give the increase per interval
      const newValue = currentValue + increasePerInterval;
      const newValueFormatted = new Intl.NumberFormat().format(newValue);
      $(this).text(newValueFormatted);
    });
  };

  setInterval(increaseValues, 50);

  const ctx0 = document.getElementById("piechart").getContext('2d');
  // Big Pie Chart
  const myPieChart = new Chart(ctx0, {
    type: 'pie',
    data: {
      datasets: [{
        data: [10, 20, 30],
        backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        '1 Welvaartsziekte',
        '2 Welvaartsziekte',
        'Geen Welvaartsziekte',
      ]
    },
    options: {
      responsive: true,
      legend: {
        display: false,
        position: 'right',
      }
    }
  });

  //Line Chart 1
  const ctx1 = document.getElementById("linechart1").getContext('2d');
  const lineChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: [1940,1950,1960,1970,1980,1990,2000,2010,2020],
      datasets: [{ 
          data: [70,75,76,77,79,81,82,83,85],
          label: "rood",
          borderColor: "#ff0000",
          fill: false
        }, { 
          data: [70,72,73,75,75,77,82,83,85],
          label: "blauw",
          borderColor: "#0000ff",
          fill: false
        }, { 
          data: [50,72,73,75,75,77,82,83,85],
          label: "blauw",
          borderColor: "#8e5ea2",
          showLine: false
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Levensjaren'
          }
        }]
      },
      responsive: true,
      legend: {
        display: false,
        position: 'right',
      }
    }
  });

  //Line Chart 2
  const ctx2 = document.getElementById("linechart2").getContext('2d');
  const lineChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: [1940,1950,1960,1970,1980,1990,2000,2010,2020],
      datasets: [{ 
          data: [70,75,76,77,79,81,82,83,85],
          label: "rood",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [70,72,73,75,75,77,82,83,85],
          label: "blauw",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: [50,72,73,75,75,77,82,83,85],
          label: "blauw",
          borderColor: "#8e5ea2",
          showLine: false
        }
      ]
    },
    options: {
      responsive: true,
      legend: {
        display: false,
        position: 'right',
      }
    }
  });
})