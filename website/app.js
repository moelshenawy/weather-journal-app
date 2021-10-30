// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = "c4249e1b8ccedb9ed46c063dea0973df";
const generate = document.querySelector("#generate");

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */
generate.addEventListener("click", async () => {
  const zipCode = document.querySelector("#zip").value;
  const feelings = document.querySelector("#feelings").value;

  // Try & Catch to check if there's an error
  try {
    const theUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;

    const res = await fetch(theUrl);
    const data = await res.json();
    const temp = data.main.temp;
    // console.log(temp);

    // Send Post Request
    await fetch("/setData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        date: newDate,
        temp: temp,
        content: feelings,
      }),
    });

    // Dynamic UI
    const dataResult = await fetch("/getData").then((res) => res.json());

    document.getElementById("date").innerHTML = `Date: ${dataResult.date}`;
    document.getElementById(
      "content"
    ).innerHTML = `You Feel: ${dataResult.feelings}`;
    document.getElementById(
      "temp"
    ).innerHTML = `Temperature: ${dataResult.temp} <sup>O</sup>C</p>`;
  } catch (err) {
    console.log("Erorr:", err);
  }
});
