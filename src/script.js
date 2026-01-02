function searchEngine(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#city-input");
  let h1 = document.querySelector("#city-name");
  h1.innerHTML = searchInput.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchEngine);
