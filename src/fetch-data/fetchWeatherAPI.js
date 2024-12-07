import { updateScreen } from "../render-data/updateScreen.js";
import weatherData from "./weatherState.js";

const fetchWeatherAPI = async (location = "cairo") => {
  const API_KEY = "0ed88fd0e42a43e9ace201337240811";

  try {
    const hitAPI = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?q=${location}&days=3&key=${API_KEY}`,
      { mode: "cors" }
    );

    if (hitAPI.status == 400) {
      throw new Error("Invalid Location From FetchData");
    }

    const allWeatherData = await hitAPI.json();

    weatherData.setData(allWeatherData);
    updateScreen();
  } catch (err) {
    console.log(err);
  }
};

export default fetchWeatherAPI;
