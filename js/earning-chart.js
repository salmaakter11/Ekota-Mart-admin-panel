const chartData1 = {
    all: [6000, 500, 1200, 509, 990],
    today: [1000, 100, 300, 50, 600],
    week: [2500, 300, 800, 70, 80],
    month: [4500, 500, 1200, 60, 90]
};
const chartData2 = {
    all: [3000, 400, 1000, 200, 100],
    today: [700, 80, 200, 50, 30],
    week: [2000, 250, 600, 100, 50],
    month: [3000, 400, 1000, 200, 100]
};

const ctx1 = document.getElementById('netSalesChart1').getContext('2d');
const netSalesChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Product Sales', 'Commission', 'Seller Subscription', 'Customer Subscription', 'Delivery'],
        datasets: [{
            label: 'Net Sales',
            data: chartData1.all,
            backgroundColor: ['#A87676', '#CA8787', '#E1ACAC', '#FFD0D0', '#643843'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.raw;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Sale Category'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'By Sale Category'
                },
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('netSalesChart2').getContext('2d');
const netSalesChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Product Sales', 'Commission', 'Seller Subscription', 'Customer Subscription', 'Delivery'],
        datasets: [{
            label: 'Net Sales',
            data: chartData2.all,
            backgroundColor: ['#FFA62F', '#FFC96F', '#FFE8C8', '#ACD793', '#80C4E9 '],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.raw;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Sale Category'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'By Expense Category'
                },
                beginAtZero: true
            }
        }
    }
});

function showChart1(period) {
    updateButtonStyles('nav-tabs-1', period);
    netSalesChart1.data.datasets[0].data = chartData1[period];
    netSalesChart1.update();
}

function showChart2(period) {
    updateButtonStyles('nav-tabs-2', period);
    netSalesChart2.data.datasets[0].data = chartData2[period];
    netSalesChart2.update();
}

function updateButtonStyles(navId, period) {
    const periods = ['all', 'today', 'week', 'month'];
    const buttons = document.querySelectorAll(`#${navId} .tab-button`);
    buttons.forEach((button, index) => {
        button.classList.toggle('active', periods[index] === period);
    });
}


// 2nd section
const saleData = {
    all: [4500, 500, 1200, 90, 400],
    today: [1000, 100, 300, 90, 70],
    week: [2500, 300, 800, 60, 400],
    month: [4500, 500, 1200, 700, 900]
};
const payoutsData = {
    all: [1000, 200, 100 ,3000, 400],
    today: [700, 80, 200, 50, 30],
    week: [2000, 250, 600, 100, 50],
    month: [3000, 400, 1000, 200, 100]
};

const saleCtx = document.getElementById('saleChart').getContext('2d');
const saleChart = new Chart(saleCtx, {
    type: 'bar',
    data: {
        labels: ['Product Sales', 'Commission', 'Seller Subscription', 'Customer Subscription', 'Delivery'],
        datasets: [{
            label: 'Net Sales',
            data: saleData.all,
            backgroundColor: ['#538392', '#6295A2', '#80B9AD', '#B3E2A7', '#C7B7A3'],
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.raw;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Sale Analytics'
                },
                beginAtZero: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Sale Category'
                }
            }
        }
    }
});

const payoutsCtx = document.getElementById('payoutsChart').getContext('2d');
const payoutsChart = new Chart(payoutsCtx, {
    type: 'bar',
    data: {
        labels: ['Product Sales', 'Commission', 'Seller Subscription', 'Customer Subscription', 'Delivery'],
        datasets: [{
            label: 'Net Sales',
            data: payoutsData.all,
            backgroundColor: ['#86469C', '#BC7FCD', '#FB9AD1', '#FFCDEA', '#6c80a6'],
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.raw;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Payouts Analytics'
                },
                beginAtZero: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Sale Category'
                }
            }
        }
    }
});

function showChart(type, period) {
    const chart = type === 'sale' ? saleChart : payoutsChart;
    const data = type === 'sale' ? saleData[period] : payoutsData[period];
    const navId = type === 'sale' ? 'nav-tabs-sale' : 'nav-tabs-payouts';

    updateButtonStyles(navId, period);
    chart.data.datasets[0].data = data;
    chart.update();
}

function updateButtonStyles(navId, period) {
    const periods = ['all', 'today', 'week', 'month'];
    const buttons = document.querySelectorAll(`#${navId} .tab-button`);
    buttons.forEach((button, index) => {
        button.classList.toggle('active', periods[index] === period);
    });
}