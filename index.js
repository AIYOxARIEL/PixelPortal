const background = document.getElementById('background-graphic');

// Set initial translation values
let initialX = 0;
let initialY = 0;

document.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 40;

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



function headerShadow () {
    if(window.scrollY>=5) {
        document.querySelector("#page-title").style.boxShadow = '0px 5px 10px 0px hsl(0, 0%, 75%)';
        document.querySelector("#page-title").style.fontSize = 'max(30px, 6vh)';
        document.querySelector("#page-title").style.transition = "0.5s";
    }
    else {
        document.querySelector("#page-title").style.boxShadow = '0px 0px 0px 0px hsl(0, 0%, 75%)';
        document.querySelector("#page-title").style.fontSize = 'max(30px, 8vh)';
        document.querySelector("#page-title").style.transition = "0.5s";
    }
}
window.addEventListener('scroll', headerShadow);


Chart.defaults.global.defaultFontFamily = 'Gameplay';

new Chart("chart-todaysnet", {
    type: "doughnut",
    data: {
      labels: ["Energy", "Water", "Unused"],
      datasets: [{
        backgroundColor: [
            "#e85849",
            "#51b65c",
            "hsla(0, 0%, 0%, 0.05)"
        ],
        data: [13, 8, 79]
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
        labels: ["Energy", "Water", "Unused"],
      datasets: [{
        backgroundColor: [
            "#fddf45",
            "#49627b",
            "hsla(0, 0%, 0%, 0.05)"
        ],
        data: [19, 12, 69]
      }]
    },
    options: {
      title: {
        display: false,
        text: "World Wide Wine Production 2018"
      },
      layout : {
        padding: 40  
      },
      legend: {
        display: true,
      }
    }
  });

new Chart("chart-history", {
    type: "line",
    data: {
      labels: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      datasets: [{
        data: [1.28,1.27,1.29,1.46,1.31,1.54,1.89,2.36,3.48,7.04,8.73],
        borderColor: "#e85849",
        fill: false,
        label: "Energy (KWh)"
      },{
          data: [0,0,0,0.3,0.1,0.4,0.6,1.1,1.3,1.54,1.56],
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

  new Chart("chart-generation", {
    type: "line",
    data: {
      labels: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      datasets: [{
        data: [1.28,1.27,1.29,1.46,1.31,1.54,1.89,4.86,12.73,21.43,31.07],
        borderColor: "#e85849",
        fill: false,
        label: "% Wind Turbines"
      },{
          data: [0,0,0,0,0,0,0,2.44,38.91,63.22,68.93],
          borderColor: "#51b65c",
          label: "% Solar Panels",
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