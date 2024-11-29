import "./style.css";

const searchToggle = document.querySelector(".submit-form");
const searchField = document.querySelector(".city-search-field");

function handleSearchField(e) {
  e.preventDefault();

  if (searchField.value === "") {
    searchField.classList.toggle("show-search");

    setTimeout(() => searchField.focus(), 100);
  } else {
    searchField.classList.toggle("show-search");

    alert(searchField.value);

    searchField.value = "";
  }
}

function handleOpenFields(e) {
  const searchIcon = document.querySelector(".form-search-icon");

  if (e.target !== searchIcon && e.target !== searchField) {
    searchField.classList.remove("show-search");
  }
}

searchToggle.addEventListener("click", handleSearchField);
window.addEventListener("click", handleOpenFields);
