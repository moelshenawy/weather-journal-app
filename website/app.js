/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = "c4249e1b8ccedb9ed46c063dea0973df";
const generate = document.querySelector("#generate");

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */
generate.addEventListener("click", async () => {
  const zipCode = document.querySelector("#zip").value;
  const theUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;

  const res = await fetch(theUrl);
  const data = await res.json();
  const temp = data.main.temp;
  console.log(temp);
});
