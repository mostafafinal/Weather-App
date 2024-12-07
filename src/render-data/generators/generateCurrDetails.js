import { handleDetailsData } from "../../fetch-data/current-data/handleDetailsData.js";
import { createElement } from "../../helpers/createElement.js";

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

function generateCurrDetails(data) {
  const currDetailsData = handleDetailsData(data);

  const fragment = new DocumentFragment();
  const currentDetails = document.querySelector(".weather-current-details");

  const humadityContent = createElement(
    "div",
    { class: "detail-value humidity" },
    `<span class="weather-value">${currDetailsData.getHumidity()}
      <span class="unit">&#37;</span>
    </span>`
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
    `<div class="dual-value">
      <span class="metric"> ${currDetailsData.getWindKph()}
        <span class="unit">kph</span>
      </span>
      <span class="imperial"> ${currDetailsData.getWindMph()}
        <span class="unit">mph</span>
      </span>
    </div>`
  );
  fragment.append(
    createCard("current-detail wind", "Wind Speed", "air", windSpeedContent)
  );

  const windDirectionContent = createElement(
    "div",
    { class: "detail-value wind-dir" },
    `<span class="weather-value">${currDetailsData.getWindDirection()}</span>`
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
    `<div class="dual-value">
      <span class="metric"> ${currDetailsData.getRainAmountmm()} 
      <span class="unit">mm</span>
      </span>
      <span class="imperial"> ${currDetailsData.getRainAmountIn()}
      <span class="unit">in</span>
      </span>
    </div>`
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
    `<span class="weather-value">${currDetailsData.getCloudCoverage()}
      <span class="unit">&#37;</span>
    </span>`
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
    `<span class="weather-value">${currDetailsData.getUvIndex()}</span>`
  );
  fragment.append(
    createCard("current-detail uv", "UV Index", "sunny", uvIndexContent)
  );

  currentDetails.append(fragment);
}

export { generateCurrDetails };
