import { hideLoader, showLoader } from "../helpers/handleLoader.js";
import weatherData from "./weatherState.js";

const fetchWeatherAPI = async (location = "cairo") => {
  try {
    showLoader();

    const hitAPI = await fetch(
      `/.netlify/functions/weatherAPI?location=${location}`,
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
