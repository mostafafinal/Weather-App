import { getFullTime } from "../helpers/handleDateFormat.js";

function openSearchField(e) {
  const searchContainer = document.querySelector(".weather-search");
  const searchField = document.querySelector(".city-search-field");

  e.preventDefault();

  if (searchField.value === "") {
    searchContainer.classList.toggle("show-search");

    searchField.focus();
  } else {
    searchContainer.classList.toggle("show-search");

    alert(searchField.value);

    searchField.value = "";
  }
}

function closeSearchField(e) {
  const searchContainer = document.querySelector(".weather-search");
  const searchField = document.querySelector(".city-search-field");
  const searchIcon = document.querySelector(".form-search-icon");

  if (
    e.target !== searchIcon &&
    e.target !== searchContainer &&
    e.target !== searchField
  ) {
    searchContainer.classList.remove("show-search");
  }
}

function changeUnits() {
  const bodyClass = document.body;
  const unit = document.querySelector(`.${this.className} .unit `);

  bodyClass.className === "metric"
    ? (bodyClass.className = "imperial")
    : (bodyClass.className = "metric");

  unit.textContent === "°C"
    ? (unit.textContent = "°F")
    : (unit.textContent = "°C");
}

function toggleSearchField() {
  const searchToggle = document.querySelector(".submit-form");

  searchToggle.addEventListener("click", openSearchField);
  window.addEventListener("click", closeSearchField);
}

function toggleTempUnits() {
  const units = document.querySelector(".weather-header .units");
  units.addEventListener("click", changeUnits);
}

function handleHeaderLocalTime() {
  const localTime = document.querySelector(".weather-local-time");

  setInterval(() => (localTime.innerHTML = getFullTime()), 1000);
}

// handling weather search

function handleHeader() {
  handleHeaderLocalTime();
  toggleSearchField();
  toggleTempUnits();
}

export { handleHeader };
