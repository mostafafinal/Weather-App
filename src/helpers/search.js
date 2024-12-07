import fetchWeatherAPI from "../fetch-data/fetchWeatherAPI.js";

function search(location) {
  try {
    fetchWeatherAPI(location);
  } catch (err) {
    console.log(err);
  }
}

export { search };
