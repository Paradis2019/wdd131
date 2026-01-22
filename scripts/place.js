document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather values
const temp = 10;
const windSpeed = 5;

// One-line wind chill function
function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

// Display wind chill if applicable
const chill = document.getElementById("chill");

if (temp <= 10 && windSpeed > 4.8) {
  chill.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
} else {
  chill.textContent = "N/A";
}
