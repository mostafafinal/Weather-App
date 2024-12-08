function showLoader() {
  document.querySelector(".loader").classList.add("open");
}

function hideLoader() {
  document.querySelector(".loader").classList.remove("open");
}

export { showLoader, hideLoader };
