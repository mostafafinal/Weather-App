import { createElement } from "../../helpers/createElement.js";
import { handleConditionData } from "../../fetch-data/current-data/handleConditionData.js";

function handleCurrentTemp(element, data) {
  element.innerHTML = `<div class="dual-value">
                          <span class="metric">${data.tempF()}<span class="unit">°</span> </span>
                          <span class="imperial">${data.tempC()}<span class="unit">°</span> </span>
                      </div>`;
}

function handleCurrentCondition(element, data) {
  element.innerHTML = `<img class="condition-icon" src="assets/icons/${data.conditionIconCode()}.svg" alt="${data.conditionText()}" height="180px" width="180px"/>
                      <h2 class="condition-text">${data.conditionText()}</h2>`;
}

function generateCurrCondition(data) {
  const currConditionData = handleConditionData(data);

  const framgent = new DocumentFragment();
  const weatherCurrentCondition = document.querySelector(
    ".weather-current .now"
  );

  const currentTemp = createElement("div", {
    class: "weather-current-temp",
  });
  handleCurrentTemp(currentTemp, currConditionData);

  const currentCondition = createElement("div", {
    class: "weather-current-condition",
  });
  handleCurrentCondition(currentCondition, currConditionData);

  framgent.append(currentTemp, currentCondition);
  weatherCurrentCondition.append(framgent);
}

export { generateCurrCondition };
