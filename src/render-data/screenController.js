import { getFullTime } from "../helpers/handleDateFormat.js";

function handleLocalTime() {
  const localTime = document.querySelector(".weather-local-time");

  setInterval(() => (localTime.innerHTML = getFullTime()), 1000);
}

function screenController() {
  handleLocalTime();
}

export { screenController };
