import fetchWeatherAPI from "./fetch-data/fetchWeatherAPI.js";
import weatherState from "./fetch-data/weatherState.js";
import { handleHeader } from "./render-data/layout/handleHeader.js";
import { screenController } from "./render-data/screenController.js";
import { updateScreen } from "./render-data/updateScreen.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", async function () {
  document.body.style.visibility = "visible";

  handleHeader();

  weatherState.subscribe(screenController);

  await fetchWeatherAPI();

  const refreshBtn = document.querySelector(".title-refresh");

  function rotateBtn() {
    refreshBtn.style.transform = "rotate(360deg)";

    setTimeout(() => (refreshBtn.style.transform = "rotate(0deg)"), 1000);
  }

  function refreshScreen() {
    rotateBtn();

    updateScreen();

    fetchWeatherAPI(weatherState.location);
  }

  refreshBtn.addEventListener("click", refreshScreen);
});
