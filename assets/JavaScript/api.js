// Your OpenWeatherMap API key
const API_KEY = "631f9e3a166c7f20327ba73f59a26b08";

// URL to get the weather data for Lyon
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Lyon,FR&appid=${API_KEY}&units=metric`;

// Fetch the weather data from OpenWeatherMap API
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    // Get the temperature in Lyon
    const temperature = data.main.temp;

    // Display the temperature in the span tag
    document.getElementById("temperature").innerText = temperature + "°C";
  })
  .catch((error) => {
    console.error(error);
  });
fetch(`http://api.openweathermap.org/data/2.5/weather?q=Lyon&appid=${API_KEY}`)
  .then((response) => response.json())
  .then((data) => {
    const iconId = data.weather[0].icon;
    document.querySelector(
      "#weather-icon"
    ).style.backgroundImage = `url(http://openweathermap.org/img/wn/${iconId}@2x.png)`;
  });

var postalAddress = document.getElementById("postalAddress");
var autocomplete = new google.maps.places.Autocomplete(postalAddress);
