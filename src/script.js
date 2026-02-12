function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = response.data.temperature.current;
  let city = document.querySelector("#city-name");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#icon");
  let dateTimeElement = document.querySelector("#dateTime");
  let date = new Date(response.data.time * 1000);

  temperatureElement.innerHTML = Math.round(temperature);
  city.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`;
  dateTimeElement.innerHTML = formatDate(date);
  getForecastData(response.data.city);
}
function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0 ${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function citySearch(city) {
  let apiKey = "3fb4403a03669541456bf8otac408501";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function searchEngine(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#city-input");
  citySearch(searchInput.value);
}
function getForecastData(city) {
  let apiKey = `3fb4403a03669541456bf8otac408501`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(showForecast);
}

function showForecast(response) {
  let days = ["sun", "mon", "tue", "wed", "thu"];
  let forecast = " ";
  days.forEach(function (day) {
    forecast =
      forecast +
      `<div class="forecast">
  <div class="forecast-day1">${day}</div>
  <div class="forecast-icon1">☀️</div>
  <div class="temperatures">
    <div class="forecast-temperature1">
      <strong>4°</strong>
    </div>
    <div class="forecast-temperature1">-2°</div>
  </div>
</div>`;
  });
  let weatherForecast = document.querySelector("#forecast");
  weatherForecast.innerHTML = forecast;
}
showForecast();
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchEngine);
