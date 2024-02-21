const background = document.getElementById('background-graphic');

// Set initial translation values
let initialX = 0;
let initialY = 0;

document.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 50;

  // Calculate new translation values
  const newX = initialX + xAxis + 500;
  const newY = initialY + yAxis + 60;

  background.style.transform = `translate(${newX}px, ${newY}px)`;
});

// Update initial translation values when the page loads
window.addEventListener('load', () => {
  const currentTransform = window.getComputedStyle(background).getPropertyValue('transform');
  const match = currentTransform.match(/matrix\((-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)\)/);
  initialX = match ? parseFloat(match[5]) : 0;
  initialY = match ? parseFloat(match[11]) : 0;
});

Chart.defaults.global.defaultFontFamily = 'Gameplay';

new Chart("chart-todaysnet", {
    type: "doughnut",
    data: {
      labels: ["Energy", "Water"],
      datasets: [{
        backgroundColor: [
            "#e85849",
            "#51b65c"
        ],
        data: [55, 49]
      }]
    },
    options: {
      title: {
        display: false,
        text: "World Wide Wine Production 2018"
      },
      layout : {
        padding: 40  
      }
    }
  });

new Chart("chart-yournet", {
    type: "doughnut",
    data: {
      labels: ["Energy", "Water"],
      datasets: [{
        backgroundColor: [
            "#e85849",
            "#51b65c"
        ],
        data: [55, 49]
      }]
    },
    options: {
      title: {
        display: false,
        text: "World Wide Wine Production 2018"
      },
      layout : {
        padding: 40  
      }
    }
  });

new Chart("chart-history", {
    type: "line",
    data: {
      labels: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      datasets: [{
        data: [1.28,1.27,1.29,1.46,1.31,1.54,1.89,2.36,3.48,7.04,8.73,11.23,14.38],
        borderColor: "#e85849",
        fill: false,
        label: "Energy (KWh)"
      },{
          data: [0,0,0,0.3,0.1,0.4,0.6,1.1,1.3,1.54,1.56,1.34,1.46],
          borderColor: "#51b65c",
          label: "Water (Gph)",
          fill: false
      }]
    },
    options: {
      legend: {display: true},
      layout : {
        padding: 40  
      }
      
    }
  });