import { handleNextHours } from "../../fetch-data/future-data/next-hours/handleNextHours.js";
import { createElement } from "../../helpers/createElement.js";

function generateNextHours(data) {
  const nextHoursData = handleNextHours(data);

  const fragment = new DocumentFragment();
  const nextHoursCardContainer = document.querySelector(".next-hours");

  nextHoursData.forEach((hour) => {
    const nextHoursCard = createElement("div", { class: "hour-card" });

    const nextHoursDay = createElement(
      "div",
      { class: "hour-date" },
      `${hour.getText()}`
    );
    const nextHoursTime = createElement(
      "div",
      { class: "hour-time" },
      `${hour.getTime()}`
    );
    const nextHoursConditionIcon = createElement("img", {
      class: "hour-icon",
      src: `/assets/icons/${hour.getConditionIcon()}.svg`,
      alt: `${hour.getConditionText()}`,
    });
    const nextHoursConditionText = createElement(
      "h3",
      { class: "hour-condition" },
      `${hour.getConditionText()}`
    );
    const nextHoursTemp = createElement(
      "div",
      { class: "hour-value temp" },
      `<span class="material-symbols-outlined value-icon">device_thermostat</span>
        <div class="dual-value">
          <span class="metric">${hour.getTempF()}<span class="unit">°</span></span>
          <span class="imperial">${hour.getTempC()}<span class="unit">°</span></span>
        </div>`
    );
    const nextHoursSnowChance = createElement(
      "div",
      { class: "hour-value percip" },
      `<span class="material-symbols-outlined value-icon">rainy</span>
        <div class="percip-value">${hour.getChanceOfSnow()}</div>`
    );
    const nextHoursWindSpeed = createElement(
      "div",
      { class: "hour-value wind" },
      `<span class="material-symbols-outlined value-icon">air</span>
      <div class="dual-value">
        <span class="metric">${hour.getWindKph()}<span class="unit">kph</span></span>
        <span class="imperial">${hour.getWindMph()}<span class="unit">mph</span></span>
      </div>`
    );

    nextHoursCard.append(
      nextHoursDay,
      nextHoursTime,
      nextHoursConditionIcon,
      nextHoursConditionText,
      nextHoursTemp,
      nextHoursSnowChance,
      nextHoursWindSpeed
    );
    fragment.append(nextHoursCard);
  });

  nextHoursCardContainer.append(fragment);

  return nextHoursCardContainer;
}

export { generateNextHours };
