// variable to select canvas tag from the DOM
let charts = document.querySelectorAll('canvas');

// Arr of types of charts
const arrTypes = ['bar', 'line', 'radar', 'bubble', 'scatter'];

// Arr for types of data
let arrData = [];

// Function that renders the chart
const renderChart = (i) => {
  // create CTX variable and specify the getContext to 2d and also secuencialy change DOM charts
  const ctx = document.getElementById(`myChart${i}`).getContext('2d');
  const randomType = Math.floor(Math.random() * 5);
  const myChart = new Chart(ctx, {
    type: arrTypes[randomType],
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: arrData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

for (let i = 1; i <= charts.length; i++) {
  for (let j = 1; j <= 10; j++) {
    arrData.push(Math.floor(Math.random() * 5));
  }
  renderChart(i);
  arrData = [];
}
