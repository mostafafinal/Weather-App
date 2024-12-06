import data from "../handleWeatherData.js";

function handleLocationData() {
  try {
    if (!data) {
      throw new Error("Invalid Location From The Handle");
    }
    const countryName = () => data.location.country;
    const cityName = () => data.location.name;
    const coords = () => `${data.location.lat}, ${data.location.lon}`;
    const region = () => data.location.region;
    const localTime = () => data.location.localtime;
    const sunrise = () => data.forecast.forecastday[0].astro.sunrise;
    const sunset = () => data.forecast.forecastday[0].astro.sunset;
    return {
      countryName,
      cityName,
      coords,
      region,
      localTime,
      sunrise,
      sunset,
    };
  } catch (err) {
    alert(err);
  }
}

export { handleLocationData };
