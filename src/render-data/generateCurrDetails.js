import { handleDetailsData } from "../fetch-data/current-data/handleDetailsData.js";
import { createElement } from "../helpers/createElement.js";

const details = handleDetailsData();

function createCardHeader(headerText, iconText) {
  const header = createElement("div", { class: "detailsHeader" });

  const icon = createElement("span", { class: "icon" }, `${iconText}`);
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

  const humadityContent = createElement(
    "div",
    { class: "currentHumadity" },
    `${details.getHumidity()} <span class="unit">&#37;</span>`
  );
  fragment.append(
    createCard("humadityCard", "Humadity", "water_drop", humadityContent)
  );

  const windSpeedContent = createElement(
    "div",
    { class: "currentWindSpeed" },
    `<i>air</i> <div class="dual-value"><span class="metric"> ${details.getWindKph()} kph</span><span class="imperial"> ${details.getWindMph()} mph</span></div>`
  );
  fragment.append(
    createCard("windSpeedCard", "Wind Speed", "air", windSpeedContent)
  );

  const windDirectionContent = createElement(
    "div",
    { class: "currentWindDirection" },
    `${details.getWindDirection()}`
  );
  fragment.append(
    createCard(
      "windDirectionCard",
      "Wind Direction",
      "air",
      windDirectionContent
    )
  );

  const rainAmountContent = createElement(
    "div",
    { class: "currentRainAmount" },
    `<i>air</i> <div class="dual-value"><span class="metric"> ${details.getRainAmountmm()} mm</span><span class="imperial"> ${details.getRainAmountIn()} in</span></div>`
  );
  fragment.append(
    createCard("rainAmountCard", "Rain Amount", "rainy", rainAmountContent)
  );

  const cloudCoverageContent = createElement(
    "div",
    { class: "currentCloudCoverage" },
    `${details.getCloudCoverage()} <span class="unit">&#37;</span>`
  );
  fragment.append(
    createCard(
      "cloudCoverageCard",
      "Cloud Coverage",
      "cloud",
      cloudCoverageContent
    )
  );

  const uvIndexContent = createElement(
    "div",
    { class: "currentUvIndex" },
    `${details.getUvIndex()}`
  );
  fragment.append(
    createCard("uvIndexCard", "UV Index", "sunny", uvIndexContent)
  );

  return fragment;
}

export { generateCurrDetails };
