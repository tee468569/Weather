function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = response.data.temperature.current;

  temperatureElement.innerHTML = Math.round(temperature);

  let city = document.querySelector("#city-name");

  city.innerHTML = response.data.city;
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

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchEngine);
