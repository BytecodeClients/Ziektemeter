$(document).ready(function () {

  const increaseValues = () => {
    $('.increaseOverTime').each(function () {
      const currentValue = Number($(this).text().replace(/\./g, ''));
      const increasePerInterval = Math.floor(Math.random() * $(this).attr('data-increase')); // TODO: Add a data attribute on the element that will give the increase per interval
      const newValue = currentValue + increasePerInterval;
      const newValueFormatted = new Intl.NumberFormat().format(newValue);
      $(this).text(newValueFormatted);
    });
  };

  setInterval(increaseValues, 1000);

  const ctx0 = document.getElementById("piechart").getContext('2d');
  // Big Pie Chart
  const myPieChart = new Chart(ctx0, {
    type: 'pie',
    data: {
      datasets: [{
        data: [8.02,4.07,2.06,2.88], //getallen voor de pie chart
        backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)","rgb(86, 255, 86)"]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Geen chronische ziekten',
        '1 chronische ziekte',
        '2 chronische ziekten',
        '3 of meer chronische ziekten',
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

  const ctx3 = document.getElementById("smallpiechart0").getContext('2d');
  // Small Pie Chart 0
  const mySmallPieChart0 = new Chart(ctx3, {
    type: 'pie',
    data: {
      datasets: [{
        data: [4,96], //getallen voor de pie chart
        backgroundColor:["rgb(54, 162, 235)","#dd2526"]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Preventie',
        'Nazorg',
      ]
    },
    options: {
      responsive: true,
      legend: {
        display: false,
        position: 'right',
      },
      tooltips: {
        mode: 'label',
        callbacks: {
          label: function(tooltipItem, data) {
            return data['datasets'][0]['data'][tooltipItem['index']] + '%';
          }
        }
      }
    }
  });

  const ctx4 = document.getElementById("smallpiechart1").getContext('2d');
  // Small Pie Chart 1
  const mySmallPieChart1 = new Chart(ctx4, {
    type: 'pie',
    data: {
      datasets: [{
        data: [5,95], //getallen voor de pie chart
        backgroundColor:["rgb(54, 162, 235)","#dd2526"]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Erfelijkheid',
        'Leefstijl',
      ]
    },
    options: {
      responsive: true,
      legend: {
        display: false,
        position: 'right',
      },
      tooltips: {
        mode: 'label',
        callbacks: {
          label: function(tooltipItem, data) {
            return data['datasets'][0]['data'][tooltipItem['index']] + '%';
          }
        }
      }
    }
  });


  //Line Chart 1
  const ctx1 = document.getElementById("linechart1").getContext('2d');
  const lineChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: [1982,"","",1985,"","","","",1990,"","","","",1995,"","","","",2000,"","","","",2005,"","","","",2010,"","","","",2015,""],
      datasets: [{ 
          data: [72.73,72.93,72.96,73.08,73.09,73.51,73.68,73.66,73.84,74.05,74.3,73.98,74.58,74.60,74.66,75.16,75.19,75.34,75.54,75.80,75.99,76.24,76.87,77.19,77.63,78.01,78.32,78.53,78.77,79.18,79.14,79.41,79.87,79.73,79.88], //getallen voor de eerste line
          label: "mannen", //label voor de eerste line
          borderColor: "#36a2eb",
          fill: false
        }, { 
          data: [79.41,79.56,79.68,79.66,79.61,80.06,80.24,79.92,80.11,80.15,80.28,80.00,80.31,80.36,80.35,80.55,80.69,80.45,80.58,80.71,80.69,80.93,81.44,81.60,81.89,82.31,82.28,82.65,82.72,82.85,82.82,83.04,83.29,83.13], //getallen voor de tweede line
          label: "vrouwen", //label voor de tweede line
          borderColor: "#ff6384",
          fill: false
        },
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
      labels: [1981,"","","",1985,"","","","",1990,"","","","",1995,"","","","",2000,"","","","",2005,"",2007],
      datasets: [{ 
          data: [54.5,53.3,52.7,52.2,51.4,51.6,51.8,52.0,50.9,51.4,50.7,50.6,50.2,49.9,49.8,48.6,49.3,49.7,49.0,48.6,48.7,46.8,49.1,48.3,46.6,48.3,47.9], //getallen voor de eerste line
          label: "mannen", //label voor de tweede line
          borderColor: "#36a2eb",
          fill: false
        }, { 
          data: [53.9,54.5,51.5,49.2,48.8,50.0,50.1,50.3,49.3,48.5,47.9,48.8,47.1,47.4,47.3,45.2,45.3,45.2,43.7,44.2,42.1,41.3,41.8,42.9,41.9,41.8,42.3], //getallen voor de tweede line
          label: "vrouwen", //label voor de tweede line
          borderColor: "#ff6384",
          fill: false
        },
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
