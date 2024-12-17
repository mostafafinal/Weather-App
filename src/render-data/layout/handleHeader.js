import { getFullTime } from "../../helpers/handleDateFormat.js";
import { search } from "../../helpers/search.js";

function handleSearchFieldInteraction(e) {
  const searchContainer = document.querySelector(".weather-search");
  const searchField = document.querySelector(".city-search-field");

  searchField.removeEventListener("click", handleSearchFieldInteraction);

  e.preventDefault();
  e.stopPropagation();

  if (searchField.value !== "") {
    search(searchField.value);

    searchContainer.classList.remove("show-search");

    searchField.value = "";

    searchField.blur();

    return;
  }

  searchContainer.classList.add("show-search");

  searchField.focus();
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

  if (bodyClass.className.includes("metric")) {
    bodyClass.classList.remove("metric");

    bodyClass.classList.add("imperial");
  } else if (bodyClass.className.includes("imperial")) {
    bodyClass.classList.remove("imperial");

    bodyClass.classList.add("metric");
  }

  unit.textContent === "°C"
    ? (unit.textContent = "°F")
    : (unit.textContent = "°C");
}

function toggleSearchField() {
  const searchField = document.querySelector(".city-search-field");
  const searchIcon = document.querySelector(".form-search-icon");
  const submitBtn = document.querySelector(".submit-form");

  searchField.addEventListener("click", handleSearchFieldInteraction);
  submitBtn.addEventListener("click", handleSearchFieldInteraction);
  searchIcon.addEventListener("click", handleSearchFieldInteraction);

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
