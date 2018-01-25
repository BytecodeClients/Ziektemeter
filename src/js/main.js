$(document).ready(function () {

  const increaseValues = () => {
    $('.increaseOverTime').each(function() {
      const currentValue = Number($(this).text().replace(/\./g,''));
      const increasePerInterval = Math.floor(Math.random() * 1000); // TODO: Add a data attribute on the element that will give the increase per interval
      const newValue = currentValue + increasePerInterval;
      const newValueFormatted = new Intl.NumberFormat().format(newValue);
      $(this).text(newValueFormatted);
    });
  };

  setInterval(increaseValues, 1000);
});

const ctx = document.getElementById("myChart").getContext('2d');
const data = {
  datasets: [{
    data: [10, 20, 30],
    backgroundColor: [
      'rgba(255,0,0)',
      'rgba(255,128,0)',
      'rgba(0,255,0)',
    ]
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Red',
    'Green',
    'Orange'
  ]
};
const myPieChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    legend: {
        display: true,
        position: 'right',
    }
  }
});