import "./style.css";

const searchToggle = document.querySelector(".submit-form");
const searchContainer = document.querySelector(".weather-search");
const searchField = document.querySelector(".city-search-field");

function openSearchField(e) {
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

function closeOpenedFields(e) {
  const searchIcon = document.querySelector(".form-search-icon");

  if (
    e.target !== searchIcon &&
    e.target !== searchContainer &&
    e.target !== searchField
  ) {
    searchContainer.classList.remove("show-search");
  }
}

searchToggle.addEventListener("click", openSearchField);
window.addEventListener("click", closeOpenedFields);

const refreshBtn = document.querySelector(".title-refresh");
refreshBtn.addEventListener("click", rotateBtn);

function rotateBtn() {
  this.style.transform = "rotate(360deg)";
}

const units = document.querySelector(".weather-header .units");
units.addEventListener("click", changeUnits);

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
