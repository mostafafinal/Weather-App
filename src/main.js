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
