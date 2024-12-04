import { createElement } from "../../helpers/createElement.js";
import { handleConditionData } from "../../fetch-data/current-data/handleConditionData.js";

const currConditionData = handleConditionData();

function handleCurrentTemp(element) {
  element.innerHTML = `<div class="dual-value">
                          <span class="metric">${currConditionData.tempF()}<span class="unit">°</span> </span>
                          <span class="imperial">${currConditionData.tempC()}<span class="unit">°</span> </span>
                      </div>`;
}

function handleCurrentCondition(element) {
  element.innerHTML = `<img class="condition-icon" src="assets/icons/${currConditionData.conditionIconCode()}.svg" alt="Condition Icon" />
                      <span class="condition-text">${currConditionData.conditionText()}</span>`;
}

function generateCurrCondition() {
  try {
    if (!currConditionData) {
      throw new Error("Failed to generate condition data");
    }

    const framgent = new DocumentFragment();
    const weatherCurrentCondition = document.querySelector(
      ".weather-current .now"
    );

    const currentTemp = createElement("div", {
      class: "weather-current-temp",
    });
    handleCurrentTemp(currentTemp);

    const currentCondition = createElement("div", {
      class: "weather-current-condition",
    });
    handleCurrentCondition(currentCondition);

    framgent.append(currentTemp, currentCondition);
    weatherCurrentCondition.append(framgent);
  } catch (error) {
    console.log(error);
  }
}

export { generateCurrCondition };
