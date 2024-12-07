import { createElement } from "../../helpers/createElement.js";
import { getFullDate, getFullTime } from "../../helpers/handleDateFormat.js";
import { handleLocationData } from "../../fetch-data/current-data/handleLocationData.js";

function handleLocationTime(element, data) {
  setInterval(
    () =>
      (element.innerHTML = `${getFullDate(data.localTime())}, ${getFullTime(
        data.localTime()
      )}`),
    1000
  );
}

function handleLocationCity(element, data) {
  element.innerHTML = `<span class="current-city">${data.cityName()}</span>
                        <div class="region-coords">
                            <span class="current-coords">Coords: ${data.coords()}</span>
                            <span class="current-region">Region: ${data.region()}</span>
                        </div>
                        <span class="current-country">${data.countryName()}</span>
                        <div class="sun-status">
                            <span class="sunrise">
                                <span class="material-symbols-outlined">water_lux</span>
                                ${data.sunrise()}
                            </span>
                            <span class="sunset">
                                <span class="material-symbols-outlined">wb_twilight</span>
                                ${data.sunset()}
                            </span>
                        </div>
                        `;
}

function generateLocation(data) {
  const locationData = handleLocationData(data);
  try {
    if (!locationData) {
      throw new Error("Failed to generate location data");
    }

    const framgent = new DocumentFragment();
    const weatherLocation = document.querySelector(".weather-location");

    const locationTime = createElement("span", { class: "location-time" });
    handleLocationTime(locationTime, locationData);

    const locationCity = createElement("div", {
      class: "weather-location-city",
    });
    handleLocationCity(locationCity, locationData);

    framgent.append(locationTime, locationCity);
    weatherLocation.append(framgent);
  } catch (error) {
    console.log(error);
  }
}

export { generateLocation };
