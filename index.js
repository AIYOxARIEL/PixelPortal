const background = document.getElementById('background-graphic');

// Set initial translation values
let initialX = 0;
let initialY = 0;

document.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 50;

  // Calculate new translation values
  const newX = initialX + xAxis + 500; // Add 500px to X translation
  const newY = initialY + yAxis - 60; // Subtract 470px from Y translation

  // Apply the new transform value
  background.style.transform = `translate(${newX}px, ${newY}px)`;
});

// Update initial translation values when the page loads
window.addEventListener('load', () => {
  const currentTransform = window.getComputedStyle(background).getPropertyValue('transform');
  const match = currentTransform.match(/matrix\((-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)\s*,\s*(-?\d+(\.\d+)?)\)/);
  initialX = match ? parseFloat(match[5]) : 0;
  initialY = match ? parseFloat(match[11]) : 0;
});
