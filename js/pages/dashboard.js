


$(function () {

  'use strict';

//##################------------ Graph dashboard--------------###############
var options = {
  series: [{
      name: "Profit",
      data: [0, 40, 110, 70, 100, 60, 130, 55, 140, 125]
  }],
  chart: {
foreColor:"#bac0c7",
    height: 385,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
colors:['#0F5EF7'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
      show: true,
curve: 'smooth',
lineCap: 'butt',
colors: undefined,
width: 5,
dashArray: 0, 
  },		
markers: {
size: 5,
colors: '#ffffff',
strokeColors: '#0F5EF7',
strokeWidth: 3,
strokeOpacity: 0.9,
strokeDashArray: 0,
fillOpacity: 1,
discrete: [],
shape: "circle",
radius: 5,
offsetX: 0,
offsetY: 0,
onClick: undefined,
onDblClick: undefined,
hover: {
  size: undefined,
  sizeOffset: 3
}
},	
  grid: {
borderColor: '#f7f7f7', 
    row: {
      colors: ['transparent'], // takes an array which will be repeated on columns
      opacity: 0
    },			
yaxis: {
lines: {
  show: true,
},
},
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
labels: {
show: true,        
    },
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: true
    },
    tooltip: {
      enabled: true,        
    },
  },
  yaxis: {
    labels: {
      show: true,
      formatter: function (val) {
        return val + "K";
      }
    }
  
  },
};
var chart = new ApexCharts(document.querySelector("#charts_widget_43_chart"), options);
chart.render();


 
  const cty = document.getElementById('orderChart').getContext('2d');
  const orderChart = new Chart(cty, {
      type: 'doughnut',
      data: {
          labels: ['Complete Order', 'Cancle Order'],
          datasets: [{
              data: [80, 20], // example data
              backgroundColor: [ '#0F5EF7', '#f50202'],
              hoverBackgroundColor: [ '#36A2EB', '#FFCE56']
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'bottom',
              },
              tooltip: {
                  callbacks: {
                      label: function(tooltipItem) {
                          return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                      }
                  }
              }
          }
      }
  });
 
  const ctx = document.getElementById('deliveryChart').getContext('2d');
  const deliveryChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Cash On Delivery', 'Others', 'Amount'],
          datasets: [{
              data: [30, 20, 50], // example data
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'bottom',
              },
              tooltip: {
                  callbacks: {
                      label: function(tooltipItem) {
                          return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                      }
                  }
              }
          }
      }
  });

  var options = {
    series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 99, ]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, ]
    }],
    chart: {
      type: 'bar',
      foreColor: "#bac0c7",
      height: 290,
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    colors: ['#EF3737', '#0F5EF7'],
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024' ],

    },
    yaxis: {

    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "৳ " + val + " thousands"
        }
      },
      marker: {
        show: false,
      },
    }
  };

  var chart = new ApexCharts(document.querySelector("#recent_trend"), options);
  chart.render();



}); 


function filterItems(period, itemType) {
  // Update active tab
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
      tab.classList.remove('active');
  });
  document.querySelector(`.tab.${period}`).classList.add('active');

  // Show/Hide list items based on the selected period
  const items = document.querySelectorAll(`.${itemType}`);
  items.forEach(item => {
      if (item.classList.contains(period) || period === 'all' || period === 'all-brand') {
          item.classList.remove('hidden');
      } else {
          item.classList.add('hidden');
      }
  });
}



// earning chart
