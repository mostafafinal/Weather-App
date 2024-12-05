import { createElement } from "../../helpers/createElement.js";
import { getFullDate, getFullTime } from "../../helpers/handleDateFormat.js";
import { handleLocationData } from "../../fetch-data/current-data/handleLocationData.js";

const locationData = handleLocationData();

function handleLocationTime(element) {
  setInterval(
    () =>
      (element.innerHTML = `${getFullDate(
        locationData.localTime()
      )}, ${getFullTime(locationData.localTime())}`),
    1000
  );
}

function handleLocationCity(element) {
  element.innerHTML = `<span class="current-city">${locationData.cityName()}</span>
                        <div class="region-coords">
                            <span class="current-coords">Coords: ${locationData.coords()}</span>
                            <span class="current-region">Region: ${locationData.region()}</span>
                        </div>
                        <span class="current-country">${locationData.countryName()}</span>
                        <div class="sun-status">
                            <span class="sunrise">
                                <span class="material-symbols-outlined">water_lux</span>
                                ${locationData.sunrise()}
                            </span>
                            <span class="sunset">
                                <span class="material-symbols-outlined">wb_twilight</span>
                                ${locationData.sunset()}
                            </span>
                        </div>
                        `;
}

function generateLocation() {
  try {
    if (!locationData) {
      throw new Error("Failed to generate location data");
    }

    const framgent = new DocumentFragment();
    const weatherLocation = document.querySelector(".weather-location");

    const locationTime = createElement("span", { class: "location-time" });
    handleLocationTime(locationTime);

    const locationCity = createElement("div", {
      class: "weather-location-city",
    });
    handleLocationCity(locationCity);

    framgent.append(locationTime, locationCity);
    weatherLocation.append(framgent);
  } catch (error) {
    console.log(error);
  }
}

export { generateLocation };
