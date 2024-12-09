import { hideLoader, showLoader } from "../helpers/handleLoader.js";
import weatherData from "./weatherState.js";

const fetchWeatherAPI = async (location = "cairo") => {
  const API_KEY = process.env.WEATHER_API_KEY;

  try {
    showLoader();

    const hitAPI = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?q=${location}&days=3&key=${API_KEY}`,
      { mode: "cors" }
    );

    hideLoader();

    if (hitAPI.status == 400) {
      throw new Error("Invalid Location");
    }

    const allWeatherData = await hitAPI.json();

    weatherData.setData(allWeatherData);
  } catch (err) {
    alert(err);
  }
};

export default fetchWeatherAPI;
