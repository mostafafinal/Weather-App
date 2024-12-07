import weatherState from "../fetch-data/weatherState.js";
import { screenController } from "./screenController.js";

function removeWeatherContainer() {
  const weatherLocation = document.querySelector(".weather-location");
  const weatherCurrCondition = document.querySelector(".weather-current .now");
  const weatherCurrDetails = document.querySelector(".weather-current-details");

  weatherLocation.innerHTML = "";
  weatherCurrCondition.innerHTML = "";
  weatherCurrDetails.innerHTML = "";
}

function removeNextHoursContainer() {
  const nextHours = document.querySelector(".next-hours");

  nextHours.innerHTML = "";
}

function removeNextDaysContainer() {
  const nextDays = document.querySelector(".next-days");

  nextDays.innerHTML = "";
}

function updateScreen() {
  removeWeatherContainer();
  removeNextHoursContainer();
  removeNextDaysContainer();

  screenController(weatherState.data);
}

export { updateScreen };
