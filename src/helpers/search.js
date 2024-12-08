import fetchWeatherAPI from "../fetch-data/fetchWeatherAPI.js";

function search(location) {
  fetchWeatherAPI(location);
}

export { search };
