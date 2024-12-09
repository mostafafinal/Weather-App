import { handleNextDays } from "../../fetch-data/future-data/next-days/handleNextDays.js";
import { createElement } from "../../helpers/createElement.js";

function generateNextDays(data) {
  const nextDaysData = handleNextDays(data);

  const fragment = new DocumentFragment();
  const nextDaysCardContainer = document.querySelector(".next-days");

  nextDaysData.forEach((day) => {
    const nextDaysCard = createElement("div", { class: "day-card" });

    const nextDayDate = createElement(
      "div",
      { class: "day-date" },
      `${day.getDate()}`
    );
    const nextDaysConditionIcon = createElement("img", {
      class: "day-icon",
      src: `/assets/icons/${day.getConditionIcon()}.svg`,
      alt: `${day.getConditionText()}`,
    });
    const nextDaysConditionText = createElement(
      "div",
      { class: "day-condition" },
      `${day.getConditionText()}`
    );

    const nextDaysMinTemp = createElement(
      "div",
      { class: "detail temp-min" },
      `<span class="detail-icon temp">lo</span>
      <div class="dual-value">
        <span class="metric">${day.getMinTempF()}<span class="unit">°</span></span>
        <span class="imperial">${day.getMinTempC()}<span class="unit">°</span></span>
      </div>`
    );
    const nextDaysMaxTemp = createElement(
      "div",
      { class: "detail temp-max" },
      `<span class="detail-icon temp">lo</span>
      <div class="dual-value">
        <span class="metric">${day.getMaxTempF()}<span class="unit">°</span></span>
        <span class="imperial">${day.getMaxTempC()}<span class="unit">°</span></span>
      </div>`
    );
    const nextDaysSnowChance = createElement(
      "div",
      { class: "detail percip" },
      `<span class="detail-icon material-symbols-outlined">rainy</span>
        <div class="detail-value">${day.getSnowChance()}</div>`
    );
    const nextDaysDetails = createElement(
      "div",
      { class: "day-details" },
      `<div class="detail-divider">|</div>`
    );
    nextDaysDetails.prepend(nextDaysMinTemp);
    nextDaysDetails.append(nextDaysMaxTemp);

    nextDaysCard.append(
      nextDayDate,
      nextDaysConditionIcon,
      nextDaysConditionText,
      nextDaysDetails
    );
    fragment.append(nextDaysCard);
  });

  nextDaysCardContainer.append(fragment);
}

export { generateNextDays };
