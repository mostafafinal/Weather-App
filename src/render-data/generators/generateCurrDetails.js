import { handleDetailsData } from "../../fetch-data/current-data/handleDetailsData.js";
import { createElement } from "../../helpers/createElement.js";

const currentDetialsData = handleDetailsData();

function createCardHeader(headerText, iconText) {
  const header = createElement("div", { class: "current-detail-icon" });

  const icon = createElement(
    "span",
    { class: "icon material-symbols-outlined" },
    `${iconText}`
  );
  const detailName = createElement("span", { class: "desc" }, `${headerText}`);

  header.append(icon, detailName);

  return header;
}

function createCard(cardClass, headerText, iconText, content) {
  const card = createElement("div", { class: `${cardClass}` });
  const cardHeader = createCardHeader(headerText, iconText);

  card.append(cardHeader, content);

  return card;
}

function generateCurrDetails() {
  const fragment = new DocumentFragment();
  const currentDetails = document.querySelector(".weather-current-details");

  const humadityContent = createElement(
    "div",
    { class: "detail-value humidity" },
    `${currentDetialsData.getHumidity()} <span class="unit">&#37;</span>`
  );
  fragment.append(
    createCard(
      "current-detail humidity",
      "Humadity",
      "water_drop",
      humadityContent
    )
  );

  const windSpeedContent = createElement(
    "div",
    { class: "detail-value wind" },
    `<div class="dual-value"><span class="metric"> ${currentDetialsData.getWindKph()} kph</span><span class="imperial"> ${currentDetialsData.getWindMph()} mph</span></div>`
  );
  fragment.append(
    createCard("current-detail wind", "Wind Speed", "air", windSpeedContent)
  );

  const windDirectionContent = createElement(
    "div",
    { class: "detail-value wind-dir" },
    `${currentDetialsData.getWindDirection()}`
  );
  fragment.append(
    createCard(
      "current-detail wind-dir",
      "Wind Direction",
      "air",
      windDirectionContent
    )
  );

  const rainAmountContent = createElement(
    "div",
    { class: "detail-value precipitation" },
    `<div class="dual-value"><span class="metric"> ${currentDetialsData.getRainAmountmm()} mm</span><span class="imperial"> ${currentDetialsData.getRainAmountIn()} in</span></div>`
  );
  fragment.append(
    createCard(
      "current-detail precipitation",
      "Rain Amount",
      "rainy",
      rainAmountContent
    )
  );

  const cloudCoverageContent = createElement(
    "div",
    { class: "detail-value clouds" },
    `${currentDetialsData.getCloudCoverage()} <span class="unit">&#37;</span>`
  );
  fragment.append(
    createCard(
      "current-detail clouds",
      "Cloud Coverage",
      "cloud",
      cloudCoverageContent
    )
  );

  const uvIndexContent = createElement(
    "div",
    { class: "detail-value uv" },
    `${currentDetialsData.getUvIndex()}`
  );
  fragment.append(
    createCard("current-detail uv", "UV Index", "sunny", uvIndexContent)
  );

  currentDetails.append(fragment);
}

export { generateCurrDetails };
