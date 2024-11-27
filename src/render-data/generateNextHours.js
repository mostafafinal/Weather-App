import { handleNextHours } from "../fetch-data/future-data/next-hours/handleNextHours.js";
import { createElement } from "../helpers/createElement.js";

const hours = handleNextHours();

function generateNextHours() {
  const fragment = new DocumentFragment();
  const nextHoursCardContainer = createElement("div", {
    class: "nextHoursContainer",
  });

  hours.forEach((hour) => {
    const nextHoursCard = createElement("div", { class: "nextHoursCard" });
    const nextHoursDay = createElement(
      "div",
      { class: "nextHoursDay" },
      `${hour.getText()}`
    );
    const nextHoursTime = createElement(
      "div",
      { class: "nextHoursTime" },
      `${hour.getTime()}`
    );
    const nextHoursConditionIcon = createElement("img", {
      class: "nextHours Icon",
      src: `/assets/icons/${hour.getConditionIcon()}.svg`,
    });
    const nextHoursConditionText = createElement(
      "div",
      { class: "nextHoursText" },
      `${hour.getConditionText()}`
    );
    const nextHoursTemp = createElement(
      "div",
      { class: "nextHoursTemp" },
      `<i>device_thermostat</i> <div class="dual-value"><span class="metric"> ${hour.getTempF()} <span class="unit">&deg;</span></span><span class="imperial"> ${hour.getTempC()} <span class="unit">&deg;</span></span></div>`
    );
    const nextHoursSnowChance = createElement(
      "div",
      { class: "nextHoursSnowChance" },
      `<i>rainy</i> <div class="value">${hour.getChanceOfSnow()}</div>`
    );
    const nextHoursWindSpeed = createElement(
      "div",
      { class: "nextHoursWindSpeed" },
      `<i>air</i> <div class="dual-value"><span class="metric"> ${hour.getWindKph()} kph</span><span class="imperial"> ${hour.getWindMph()} mph</span></div>`
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
