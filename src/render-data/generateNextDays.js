import { handleNextDays } from "../fetch-data/future-data/next-days/handleNextDays.js";
import { createElement } from "../helpers/createElement.js";

const days = handleNextDays();

function generateNextDays() {
  const fragment = new DocumentFragment();
  const nextDaysCardContainer = createElement("div", {
    class: "nextDaysContainer",
  });

  days.forEach((day) => {
    const nextDaysCard = createElement("div", { class: "nextDaysCard" });

    const nextDayDate = createElement(
      "div",
      { class: "nextDayDate" },
      `${day.getDate()}`
    );
    const nextDaysConditionIcon = createElement("img", {
      class: "nextDays Icon",
      src: `...`,
    });
    const nextDaysConditionText = createElement(
      "div",
      { class: "nextDaysText" },
      `${day.getConditionText()}`
    );

    const nextDaysMinTemp = createElement(
      "div",
      { class: "nextDaysMinTemp" },
      `<i class="temp-icon">lo</i><div class="dual-value"><span class="metric"> ${day.getMinTempF()} <span class="unit">&deg;</span></span><span class="imperial"> ${day.getMinTempC()} <span class="unit">&deg;</span></span></div>`
    );
    const nextDaysMaxTemp = createElement(
      "div",
      { class: "nextDaysMaxTemp" },
      `<i class="temp-icon">hi</i><div class="dual-value"><span class="metric"> ${day.getMaxTempF()} <span class="unit">&deg;</span></span><span class="imperial"> ${day.getMaxTempC()} <span class="unit">&deg;</span></span></div>`
    );
    const nextDaysDetails = createElement(
      "div",
      { class: "nextDaysDetails" },
      `${nextDaysMinTemp.innerHTML} | ${nextDaysMaxTemp.innerHTML}`
    );

    const nextDaysSnowChance = createElement(
      "div",
      { class: "nextHoursSnowChance" },
      `<i>rainy</i> <div class="value">${day.getSnowChance()}</div>`
    );

    nextDaysCard.append(
      nextDayDate,
      nextDaysConditionIcon,
      nextDaysConditionText,
      nextDaysDetails,
      nextDaysSnowChance
    );
    fragment.append(nextDaysCard);
  });

  nextDaysCardContainer.append(fragment);

  return nextDaysCardContainer;
}

export { generateNextDays };
