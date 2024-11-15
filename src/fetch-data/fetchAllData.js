const API_KEY = "0ed88fd0e42a43e9ace201337240811";

const fetchAllData = async (location = "cairo") => {
  try {
    const hitAPI = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?q=${location}&days=2&key=${API_KEY}`,
      { mode: "cors" }
    );

    if (hitAPI.status == 400) {
      throw new Error("Invalid Location From FetchData");
    }

    const allWeatherData = await hitAPI.json();

    return allWeatherData;
  } catch (err) {
    console.log(err);
  }
};

export default fetchAllData;
